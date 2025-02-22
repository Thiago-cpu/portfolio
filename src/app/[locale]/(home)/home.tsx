import { useTranslate } from "@/locales/utils";

export default function Home() {
  const t = useTranslate();
  return (
    <div
      id="#home"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <h1 className="text-center font-mono text-6xl uppercase backdrop-blur-[0.5px]">
        {t("home.name")}
      </h1>
      <h2 className="mt-2 text-center font-mono text-xl uppercase backdrop-blur-[0.5px]">
        {t("home.description")}
      </h2>
    </div>
  );
}
