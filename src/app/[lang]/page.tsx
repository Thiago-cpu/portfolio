import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { getI18n } from "@/locales/server";
import { Background } from "@/components/ui/background";
import { SsrBackground } from "@/components/ui/background_ssr";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="relative z-0 flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* <Background squares={25} /> */}
      <SsrBackground squares={25} />
      <div className=" pointer-events-none backdrop-blur-[1px]">
        <h1 className="text-center font-mono text-6xl uppercase">
          {t("home.name")}
        </h1>

        <h2 className="mt-2 text-center font-mono text-xl uppercase">
          {t("home.description")}
        </h2>
      </div>
    </main>
  );
}
