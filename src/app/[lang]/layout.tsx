import { I18nProviderClient } from "@/locales/client";
import { type ReactElement } from "react";

export default function SubLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactElement;
}) {
  return <I18nProviderClient locale={lang}>{children}</I18nProviderClient>;
}
