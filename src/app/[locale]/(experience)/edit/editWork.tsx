"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useTranslate } from "@/locales/utils";
import { EditWorkForm } from "./editWorkForm";
import { useWorkStore } from "../store/workStore";

export default function EditWork() {
  const t = useTranslate("experience.update");
  const { open, handleClose } = useWorkStore((state) => ({
    open: Boolean(state.workToEdit),
    handleClose: state.cancelEdit,
  }));

  return (
    <Sheet open={open} onOpenChange={(open) => !open && handleClose()}>
      <SheetContent
        side="left"
        className="w-full max-w-sm md:max-w-lg lg:max-w-2xl"
      >
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
          <SheetDescription className="whitespace-pre">
            {t("description")}
          </SheetDescription>
          <EditWorkForm onSuccess={handleClose} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
