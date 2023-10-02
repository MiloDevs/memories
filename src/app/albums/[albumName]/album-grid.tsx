"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResults } from "./page";
import CloudinaryImage from "@/components/cloudinary-image";

export default function AlbumGrid({ images }: { images: SearchResults[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResults) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            className="rounded-xl"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
