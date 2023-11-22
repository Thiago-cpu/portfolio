import { getServerIsAdmin } from "@/server/auth";
import { getTranslate } from "@/locales/server";
import Link from "next/link";
import SelectLocale from "./selectLocale";
import { Navlinks } from "./navlinks";
import { useTranslate } from "@/locales/utils";
import { useLocale } from "next-intl";

export function Navbar() {
  const t = useTranslate();
  const locale = useLocale();
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-10 flex w-[100vw] justify-center gap-5 bg-opacity-background px-10 py-6 md:px-20 xl:bg-transparent">
      <div className="pointer-events-auto">
        <SelectLocale placeholder={t("language")} defaultValue={locale} />
      </div>
      <nav className="flex flex-grow items-center justify-end gap-5 text-foreground/60">
        <Navlinks />
        <LogoutLink />
      </nav>
    </header>
  );
}

export async function LogoutLink() {
  const [isAdmin, t] = await Promise.all([getServerIsAdmin(), getTranslate()]);
  if (!isAdmin) return null;
  return (
    <Link
      className="pointer-events-auto cursor-pointer hover:text-foreground/80"
      href={"/api/auth/signout"}
    >
      {t("logout")}
    </Link>
  );
}
