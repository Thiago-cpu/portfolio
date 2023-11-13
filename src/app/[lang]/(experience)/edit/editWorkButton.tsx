"use client";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { type MouseEventHandler } from "react";
import { useWorkStore, type Works } from "../store/workStore";

interface EditWorkProps {
  work: Works[number];
}

export default function EditWorkButton({ work }: EditWorkProps) {
  const setWorkToEdit = useWorkStore((state) => state.setWorkToEdit);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setWorkToEdit(work);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90"
    >
      <Pencil1Icon />
    </div>
  );
}
