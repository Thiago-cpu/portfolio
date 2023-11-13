"use client";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { type MouseEventHandler } from "react";
import { useWorkStore, type Works } from "../store/workStore";
import { Button } from "@/components/ui/button";

interface EditWorkProps {
  work: Works[number];
}

export default function EditWorkButton({ work }: EditWorkProps) {
  const setWorkToEdit = useWorkStore((state) => state.setWorkToEdit);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setWorkToEdit(work);
  };

  return (
    <Button onClick={handleClick} size="icon" className="rounded-full">
      <Pencil1Icon />
    </Button>
  );
}
