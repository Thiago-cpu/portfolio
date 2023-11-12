import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  return (
    <div
      id="#home"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <h1 className="bg-opacity-background text-center font-mono text-6xl uppercase backdrop-blur-[1px]">
        {t("home.name")}
      </h1>
      <h2 className="mt-2 bg-opacity-background text-center font-mono text-xl uppercase backdrop-blur-[1px]">
        {t("home.description")}
      </h2>
    </div>
  );
}
