"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuBar } from "./icons/menubar";
import { AddtoAlbumDialog } from "./add-to-album-dialog";
import { SearchResults } from "@/app/gallery/page";
import { useState } from "react";
import {X, FolderPlus, FolderInput, TrashIcon} from "lucide-react"
import { folders } from "@/app/albums/page";

export function ImageMenu({ image }: { image: SearchResults }) {
    const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-6 h-6 p-0.5">
            <MenuBar />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-34">
          <DropdownMenuItem
            asChild
            className="flex items-center justify-center cursor-pointer w-full"
          >
            <AddtoAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <DropdownMenuItem className="flex items-center justify-center cursor-pointer">
                <Button asChild variant="ghost">
                  <div className="flex items-center justify-center">
                    <X className="h-5 w-5 mr-1" />
                    <span className="text-xs">Move to</span>
                  </div>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
                {folders.map((folder)=>{
                    <DropdownMenuItem>
                        <span>{folder.name}</span>
                    </DropdownMenuItem>
                })}
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuItem className="flex items-center justify-center cursor-pointer">
            <Button asChild variant="ghost">
              <div className="flex items-center justify-center">
                <FolderInput className="h-5 w-5 mr-1" />
                <span className="text-xs">Delete</span>
              </div>
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center justify-center cursor-pointer">
            <Button asChild variant="ghost">
              <div className="flex items-center justify-center">
                <X className="h-5 w-5 mr-1" />
                <span className="text-xs">Remove</span>
              </div>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
