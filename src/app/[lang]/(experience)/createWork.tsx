import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getServerIsAdmin } from "@/server/auth";
import { getScopedI18n } from "@/locales/server";
import { Button } from "@/components/ui/button";
import { CreateWorkForm } from "./createWorkForm";

export default async function CreateWork() {
  const [t, isAdmin] = await Promise.all([
    getScopedI18n("experience.create"),
    getServerIsAdmin(),
  ]);
  if (!isAdmin) return null;
  return (
    <Sheet>
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
          <CreateWorkForm />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
