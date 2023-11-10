"use client";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "home",
    href: "/#home",
  },
  {
    label: "contact",
    href: "/#contact",
  },
] as const;

export function Navlinks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useScopedI18n("links");

  return links.map((link, i) => (
    <Link
      key={i}
      href={link.href}
      className={cn(
        "pointer-events-auto text-foreground/60 hover:text-foreground/80",
        {
          "text-foreground": activeIndex === i,
        },
      )}
      onClick={() => setActiveIndex(i)}
    >
      {t(link.label)}
    </Link>
  ));
}
