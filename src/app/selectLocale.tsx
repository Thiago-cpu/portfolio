"use client";
import { useChangeLocale, useI18n } from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectLocale({ locale }: { locale: "en" | "es" }) {
  const changeLocale = useChangeLocale();
  const t = useI18n();

  return (
    <Select
      defaultValue={locale}
      onValueChange={(v: "es" | "en") => changeLocale(v)}
    >
      <SelectTrigger className="gap-5 px-2 py-2 text-xs sm:w-[145px] sm:gap-0 sm:px-3">
        <p className="hidden text-muted-foreground sm:block">{`${t(
          "language",
        )}:`}</p>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">en</SelectItem>
        <SelectItem value="es">es</SelectItem>
      </SelectContent>
    </Select>
  );
}
