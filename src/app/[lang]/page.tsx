import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { getI18n } from "@/locales/server";
import { Background } from "@/components/ui/background";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="relative z-0 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Background squares={50} />
    </main>
  );
}
