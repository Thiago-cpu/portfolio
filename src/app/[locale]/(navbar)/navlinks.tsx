import { ScrollLink } from "@/components/ui/scrollLink";
import { useTranslate } from "@/locales/utils";

const links = [
  {
    label: "home",
    to: "#home",
    aria: "Go to home section",
  },
  {
    label: "experience",
    to: "#experience",
    aria: "Go to experience section",
  },
  {
    label: "project",
    to: "#project",
    aria: "Go to projects section",
  },
  {
    label: "contact",
    to: "#contact",
    aria: "Go to contact section",
  },
] as const;

export function Navlinks() {
  const t = useTranslate("links");

  return links.map((link, i) => (
    <ScrollLink
      activeClass="text-foreground"
      className="pointer-events-auto hidden cursor-pointer hover:text-foreground/80 sm:block"
      aria-label={link.aria}
      to={link.to}
      href={link.to}
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
