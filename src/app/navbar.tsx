import { getServerIsAdmin } from "@/server/auth";
import { Navlinks } from "./navlinks";
import { getI18n } from "@/locales/server";
import Link from "next/link";

export async function Navbar() {
  const [isAdmin, t] = await Promise.all([getServerIsAdmin(), getI18n()]);
  return (
    <header className="pointer-events-none fixed left-0 right-0 z-10 flex justify-center bg-opacity-background xl:bg-transparent">
      <nav className="flex flex-grow justify-end gap-5 px-10 py-6 text-foreground/60 md:px-20">
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
