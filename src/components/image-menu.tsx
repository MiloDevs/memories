"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuBar } from "./icons/menubar";
import { AddtoAlbumDialog } from "./add-to-album-dialog";
import { SearchResults } from "@/app/gallery/page";
import { useState } from "react";

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
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <AddtoAlbumDialog image={image} onOpen={() => setOpen(false)}/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
