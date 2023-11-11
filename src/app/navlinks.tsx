"use client";
import { useHash } from "@/hooks/useHash";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "home",
    href: "/#home",
  },
  {
    label: "experience",
    href: "/#experience",
  },
  {
    label: "contact",
    href: "/#contact",
  },
] as const;

export function Navlinks() {
  const t = useScopedI18n("links");
  const hash = useHash();
  const pathname = usePathname();
  const pathnameWithHash = `${pathname}${hash}`;

  const hasHash = (s: string) => s.includes("#");

  return links.map((link, i) => (
    <Link
      key={i}
      href={link.href}
      className={cn(
        "pointer-events-auto text-foreground/60 hover:text-foreground/80",
        {
          "text-foreground": hasHash(link.href)
            ? link.href === pathnameWithHash
            : link.href === pathname,
        },
      )}
    >
      {t(link.label)}
    </Link>
  ));
}
