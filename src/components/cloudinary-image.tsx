"use client";
import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { ComponentType, useState, useTransition } from "react";
import { setFavourite } from "../app/gallery/actions";
import { SearchResults } from "../app/gallery/page";
import { FilledHeart } from "@/components/icons/filledheart";
import { DropdownMenu } from "./ui/dropdown-menu";
import { ImageMenu } from "./image-menu";

export default function CloudinaryImage(props : {
 imageData: SearchResults;
 onUnheart?: (unheartedResource: SearchResults)  => void
 } & Omit<CldImageProps, "src">) {
  const [transition, startTransition] = useTransition();

  const { imageData , onUnheart } = props;

  const [isfav, setFavourited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isfav ? (
        <FilledHeart
          onClick={() => {
            onUnheart?.(imageData);
            setFavourited(false);
            startTransition(() => {
              setFavourite(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-500 hover:cursor-pointer"
        />
      ) : (
        <Heart
          className="absolute top-2 left-2 hover:text-red-500 hover:cursor-pointer"
          onClick={() => {
            setFavourited(true);
            startTransition(() => {
              setFavourite(imageData.public_id, true);
            });
          }}
        />
      )}

      <ImageMenu 
      image={imageData}
      />
    </div>
  );
}
