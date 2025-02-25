import { useTranslate } from "@/locales/utils";
import { ProjectCarousel } from "./projectCarousel";
import Image from "next/image";

interface Project {
  src: string;
  href: string;
}

const Projects: Project[] = [
  {
    src: "centro-c.png",
    href: "https://www.ccomplejoartmedia.com.ar",
  },
  {
    src: "el-destape.png",
    href: "https://feria.eldestapeweb.com/feria",
  },
  {
    src: "tetris.png",
    href: "https://tetris-thiago-cpu.vercel.app/",
  },
  {
    src: "sort-vision.png",
    href: "https://visualize-sort.vercel.app",
  },
  {
    src: "factorize-or-die.png",
    href: "https://factorize-or-die.vercel.app/",
  },
  {
    src: "chess-vision.png",
    href: "https://thiago-chess-vision.vercel.app",
  },
];

export function Project() {
  const t = useTranslate("project");

  return (
    <div
      id="#project"
      className="pointer-events-none flex min-h-screen flex-col items-center justify-center gap-12"
    >
      <h2 className="max-w-min text-center text-3xl backdrop-blur-[0.5px]">
        {t("title")}
      </h2>
      <ProjectCarousel
        prevTitle={t("carousel.prev")}
        nextTitle={t("carousel.next")}
      >
        {Projects.map((project) => (
          <a
            href={project.href}
            key={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="h-full w-full"
              src={`/img/projects/${project.src}`}
              alt="tetris"
              width={1280}
              height={800}
            />
          </a>
        ))}
      </ProjectCarousel>
    </div>
  );
}
