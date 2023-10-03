'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SearchResults } from "@/app/gallery/page";
import { CreateFolder } from "./actions";
import { FolderPlus } from "lucide-react";

export function AddtoAlbumDialog({ image, onClose }: { image: SearchResults, onClose: () => void }) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false);
  console.log(image);


  return (
    <Dialog open={open} onOpenChange={(newOpenState) => {
        if(!newOpenState){
            onClose();
        }
        setOpen(newOpenState);
    }}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <div className="flex items-center w-full">
            <FolderPlus className="mr-1" />
            <span >Add to album</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to album</DialogTitle>
          <DialogDescription>
            Add to image to an album or create a new one.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              id="album-name"
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              defaultValue="saves"
              value={albumName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
          type="submit" 
          onClick={ async () => {
            onClose();
            setOpen(false);
            await CreateFolder(albumName, image);
            
          }}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
