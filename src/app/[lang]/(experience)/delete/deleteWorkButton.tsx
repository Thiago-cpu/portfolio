"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import { type MouseEventHandler } from "react";
import { type Works, useWorkStore } from "../store/workStore";

interface DeleteWorkProps {
  work: Works[number];
}

export default function DeleteWorkButton({ work }: DeleteWorkProps) {
  const setWorkToDelete = useWorkStore((state) => state.setWorkToDelete);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setWorkToDelete(work);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-full bg-destructive p-2 text-destructive-foreground hover:bg-destructive/90"
    >
      <TrashIcon />
    </div>
  );
}
