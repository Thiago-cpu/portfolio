import { getServerIsAdmin } from "@/server/auth";
import { Navlinks } from "./navlinks";
import { getCurrentLocale, getI18n } from "@/locales/server";
import Link from "next/link";
import SelectLocale from "./selectLocale";

export async function Navbar() {
  const [isAdmin, t, locale] = await Promise.all([
    getServerIsAdmin(),
    getI18n(),
    getCurrentLocale(),
  ]);
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-10 flex w-[100vw] justify-center gap-5 bg-opacity-background px-10 py-6 md:px-20 xl:bg-transparent">
      <div className="pointer-events-auto">
        <SelectLocale locale={locale} />
      </div>
      <nav className="flex flex-grow items-center justify-end gap-5 text-foreground/60">
        <Navlinks />
        {isAdmin && (
          <Link
            className="pointer-events-auto cursor-pointer hover:text-foreground/80"
            href={"/logout"}
          >
            {t("logout")}
          </Link>
        )}
      </nav>
    </header>
  );
}
