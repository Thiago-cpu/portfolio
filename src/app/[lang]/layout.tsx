import { Background } from "@/app/background/background";
import { I18nProviderClient } from "@/locales/client";
import { type ReactElement } from "react";
import { Navbar } from "../navbar";

export default function SubLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactElement;
}) {
  return (
    <I18nProviderClient locale={lang}>
      <Navbar />
      <Background squares={25} />
      {children}
    </I18nProviderClient>
  );
}
