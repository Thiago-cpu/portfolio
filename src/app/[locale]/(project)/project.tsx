import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslate } from "@/locales/utils";
import { ProjectCarousel } from "./projectCarousel";

const projects = [
  // {
  //   key: "artmedia",
  //   src: "centro-c.png",
  //   href: "https://www.ccomplejoartmedia.com.ar",
  // },
  {
    key: "tetris",
    src: "tetris.png",
    href: "https://tetris-thiago-cpu.vercel.app/",
  },
  {
    key: "sortVision",
    src: "sort-vision.png",
    href: "https://visualize-sort.vercel.app",
  },
  {
    key: "factorize",
    src: "factorize-or-die.png",
    href: "https://factorize-or-die.vercel.app/",
  },
  {
    key: "chessVision",
    src: "chess-vision.png",
    href: "https://thiago-chess-vision.vercel.app",
  },
] as const;

export function Project() {
  const t = useTranslate("project");

  return (
    <section
      id="#project"
      className="pointer-events-none flex min-h-screen flex-col items-center justify-center gap-10"
    >
      <h2 className="max-w-min text-center text-3xl backdrop-blur-[0.5px]">
        {t("title")}
      </h2>
      <ProjectCarousel
        prevTitle={t("carousel.prev")}
        nextTitle={t("carousel.next")}
      >
        {projects.map((project) => (
          <ProjectSlide
            key={project.key}
            title={t(`items.${project.key}.title`)}
            description={t(`items.${project.key}.description`)}
            alt={t(`items.${project.key}.title`)}
            ctaLabel={t("cta.visit")}
            src={project.src}
            href={project.href}
          />
        ))}
      </ProjectCarousel>
    </section>
  );
}

interface ProjectSlideProps {
  title: string;
  description: string;
  alt: string;
  src: string;
  href: string;

  ctaLabel: string;
}

function ProjectSlide({
  title,
  description,
  alt,
  src,
  href,

  ctaLabel,
}: ProjectSlideProps) {
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
      <Image
        className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.01] group-hover:opacity-100"
        src={`/img/projects/${src}`}
        alt={alt}
        width={1280}
        height={800}
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition duration-500 group-hover:opacity-95 sm:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0  hidden flex-col gap-3 p-5 text-white sm:flex">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
          <div className="pointer-events-auto pt-2">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={href} target="_blank" rel="noreferrer">
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
