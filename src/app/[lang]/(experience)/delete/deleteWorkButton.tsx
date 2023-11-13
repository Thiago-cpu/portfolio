"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import { type MouseEventHandler } from "react";
import { type Works, useWorkStore } from "../store/workStore";
import { Button } from "@/components/ui/button";

interface DeleteWorkProps {
  work: Works[number];
}

export default function DeleteWorkButton({ work }: DeleteWorkProps) {
  const setWorkToDelete = useWorkStore((state) => state.setWorkToDelete);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setWorkToDelete(work);
  };

  return (
    <Button
      variant="destructive"
      onClick={handleClick}
      className="rounded-full"
      size="icon"
    >
      <TrashIcon />
    </Button>
  );
}
