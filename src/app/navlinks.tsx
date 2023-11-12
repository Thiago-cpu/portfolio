"use client";
import { useScopedI18n } from "@/locales/client";
import { Link, scroller } from "react-scroll";
import { useEffect } from "react";

const links = [
  {
    label: "home",
    to: "#home",
  },
  {
    label: "experience",
    to: "#experience",
  },
  {
    label: "contact",
    to: "#contact",
  },
] as const;

export function Navlinks() {
  const t = useScopedI18n("links");

  useEffect(() => {
    if (!window.location.hash) return;
    const link = links.find((link) => link.to === window.location.hash);
    if (!link) return;

    scroller.scrollTo(link.to, {
      duration: 500,
      smooth: true,
    });
  }, []);

  return links.map((link, i) => (
    <Link
      activeClass="text-foreground"
      className="pointer-events-auto cursor-pointer hover:text-foreground/80"
      to={link.to}
      hashSpy={true}
      spy={true}
      smooth={true}
      duration={350}
      key={i}
    >
      {t(link.label)}
    </Link>
  ));
}
