import { ForceRefresh } from "@/components/force-refresh";
import AlbumGrid from "./album-grid";
import cloudinary from "cloudinary";

export type SearchResults = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage({params: {albumName}}: {params: {albumName: string}}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
    
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{albumName} Album</h1>
        </div>

        <AlbumGrid images={results.resources} />
      </div>
    </section>
  );
}
