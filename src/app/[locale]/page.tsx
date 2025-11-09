import { setRequestLocale } from "next-intl/server";
import { Contact } from "./(contact)/contact";
import Experience from "./(experience)/experience";
import Home from "./(home)/home";
import { Project } from "./(project)/project";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <main className="pointer-events-none flex min-h-screen w-full flex-col items-center">
      <div className="w-full max-w-5xl space-y-12 px-4 sm:px-8">
        <Home />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
