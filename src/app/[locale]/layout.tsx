import { Navbar } from "./(navbar)/navbar";
import "@/styles/globals.css";
import { headers } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/locales/utils";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!LOCALES.some((l) => l === locale)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <TRPCReactProvider headers={headers()}>
      <Navbar />
      {children}
      <Toaster />
    </TRPCReactProvider>
  );
}
