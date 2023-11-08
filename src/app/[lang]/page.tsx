import { getI18n } from "@/locales/server";
import { Background } from "@/components/ui/background";
import { Contact } from "./contact";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="relative z-0 flex min-h-screen flex-col items-center justify-center bg-background text-white">
      <Background squares={25} />
      <div className="pointer-events-none flex min-h-screen flex-col justify-center">
        <h1 className="text-center font-mono text-6xl uppercase backdrop-blur-[1px]">
          {t("home.name")}
        </h1>

        <h2 className="mt-2 text-center font-mono text-xl uppercase backdrop-blur-[1px]">
          {t("home.description")}
        </h2>
      </div>
      <Contact />
    </main>
  );
}
