'use client'

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "../../components/cloudinary-image";
import { SearchResults } from "./page";


export default function GalleryGrid({images}: {images: SearchResults[]}){
    
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