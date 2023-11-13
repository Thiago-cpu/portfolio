"use client";
import { useScopedI18n } from "@/locales/client";
import { Link } from "react-scroll";

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
