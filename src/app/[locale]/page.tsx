import { unstable_setRequestLocale } from "next-intl/server";
import { Contact } from "./(contact)/contact";
import Experience from "./(experience)/experience";
import Home from "./(home)/home";
import { Project } from "./(project)/project";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main className="pointer-events-none flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full max-w-2xl px-4">
        <Home />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
