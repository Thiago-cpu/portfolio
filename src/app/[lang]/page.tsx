import { getI18n } from "@/locales/server";
import { Contact } from "./(contact)/contact";
import Experience from "./(experience)/experience";
import { setStaticParamsLocale } from "next-international/server";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  setStaticParamsLocale(lang);
  const t = await getI18n();

  return (
    <main className="pointer-events-none flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full max-w-2xl px-4">
        <div
          id="home"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <h1 className="bg-opacity-background text-center font-mono text-6xl uppercase backdrop-blur-[1px]">
            {t("home.name")}
          </h1>
          <h2 className="mt-2 bg-opacity-background text-center font-mono text-xl uppercase backdrop-blur-[1px]">
            {t("home.description")}
          </h2>
        </div>
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
