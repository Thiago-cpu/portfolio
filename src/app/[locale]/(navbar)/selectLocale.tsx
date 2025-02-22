"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Locale, LOCALES } from "@/locales/utils";
import { usePathname, useRouter } from "@/navigation";
import { useId, useTransition } from "react";

export default function SelectLocale({
  placeholder,
  defaultValue,
}: {
  placeholder: string;
  defaultValue: string;
}) {
  const id = useId();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger
        id={id}
        aria-label={placeholder}
        className="gap-5 bg-opacity-background px-2 py-2 text-xs sm:w-[145px] sm:gap-0 sm:px-3"
      >
        <p className="hidden text-muted-foreground sm:block">{placeholder}:</p>
        <SelectValue />
      </SelectTrigger>
      <SelectContent aria-labelledby={id}>
        {LOCALES.map((l) => (
          <SelectItem key={l} value={l}>
            {l}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
