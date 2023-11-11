import { getScopedI18n } from "@/locales/server";
import Works from "./works";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CreateWork from "./createWork";
import { getServerIsAdmin } from "@/server/auth";

export default async function Experience() {
  const [t, isAdmin] = await Promise.all([
    getScopedI18n("experience"),
    getServerIsAdmin(),
  ]);

  return (
    <div
      id="experience"
      className="pointer-events-none flex min-h-screen flex-col items-center justify-center gap-4"
    >
      <h2 className="max-w-min bg-opacity-background text-center text-3xl backdrop-blur-[1px]">
        {t("title")}
      </h2>
      <Suspense fallback={<Skeleton className="h-[56px] w-full" />}>
        <Works />
      </Suspense>

      {isAdmin && <CreateWork />}
    </div>
  );
}