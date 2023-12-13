import { ScrollLink } from "@/components/ui/scrollLink";
import { useTranslate } from "@/locales/utils";

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
    label: "project",
    to: "#project",
  },
  {
    label: "contact",
    to: "#contact",
  },
] as const;

export function Navlinks() {
  const t = useTranslate("links");

  return links.map((link, i) => (
    <ScrollLink
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
    </ScrollLink>
  ));
}
