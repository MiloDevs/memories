"use server"

import { SearchResults } from "@/app/gallery/page";
import cloudinary from "cloudinary";


export async function CreateFolder(folder: string, image: SearchResults){
    await cloudinary.v2.api.create_folder(folder);

    let parts = image.public_id.split("/");

    if(parts.length > 1){
        parts = parts.slice(1);
    }

    const publicId = parts.join("/")

    await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${publicId}`);

}

export async function RemoveFromFolder(folder: string, image: SearchResults) {
    let parts = image.public_id.split("/");

    if(parts.length > 1){
        parts = parts.slice(1);
    }

    const publicId = parts.join("/");

    await cloudinary.v2.uploader.rename(image.public_id, `${publicId}`);
}