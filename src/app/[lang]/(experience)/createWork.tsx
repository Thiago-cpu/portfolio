"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CreateWorkForm } from "./createWorkForm";
import { useScopedI18n } from "@/locales/client";
import { useState } from "react";

export default function CreateWork() {
  const t = useScopedI18n("experience.create");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>{t("add-button")}</Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full max-w-sm md:max-w-lg lg:max-w-2xl"
      >
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
          <SheetDescription className="whitespace-pre">
            {t("description")}
          </SheetDescription>
          <CreateWorkForm onSuccess={() => setOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
