import { useTranslate } from "@/locales/utils";
import { Suspense } from "react";
import { ProjectCarousel, ProjectCarouselSkeleton } from "./projectCarousel";
import Image from "next/image";

interface Project {
  src: string;
  href: string;
}

const Projects: Project[] = [
  {
    src: "tetris.png",
    href: "https://tetris-thiago-cpu.vercel.app/",
  },
  {
    src: "factorize-or-die.png",
    href: "https://factorize-or-die.vercel.app/",
  },
];

export function Project() {
  const t = useTranslate("project");

  return (
    <div
      id="#project"
      className="pointer-events-none flex min-h-screen flex-col items-center justify-center gap-12"
    >
      <h2 className="max-w-min bg-opacity-background text-center text-3xl backdrop-blur-[1px]">
        {t("title")}
      </h2>
      <Suspense fallback={<ProjectCarouselSkeleton />}>
        <ProjectCarousel>
          {Projects.map((project) => (
            <a href={project.href} key={project.href} target="_blank">
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
      </Suspense>
    </div>
  );
}
