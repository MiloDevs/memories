'use client'
import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "../../components/cloudinary-image";
import { useEffect, useState } from "react";

export type SearchResults = {
  public_id: string,
  tags: string[],
};

export default function FavoritesList({initialresources}: {initialresources: SearchResults[]}) {

    const [resources, setResources] = useState(initialresources);

    useEffect(() =>{
        setResources(initialresources);
    }, [initialresources]);

  return (

            <ImageGrid 
            images={resources} 
            getImage={(imageData: SearchResults) =>{
                return(
                    <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                className="rounded-xl"
                alt="an image of something"
                onUnheart={(unheartedResource) => {
                    setResources((currentResource) => 
                        currentResource.filter(
                            (resource) => resource.public_id !== unheartedResource.public_id
                        )
                    )
                }}
              />
                )
            }}
            />
  );
}
