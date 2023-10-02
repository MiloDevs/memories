import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/cloudinary-image";
import { ForceRefresh } from "@/components/force-refresh";
import FavoritesList from "./favorites-list";

export type SearchResults = {
  public_id: string;
  tags: string[]
};

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorites</h1>
          {/* <UploadButton /> */}
        </div>

        
         <FavoritesList initialresources={results.resources} />
      </div>
    </section>
  );
}
