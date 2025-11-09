"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Children, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";

interface ProjectCarouselProps {
  children?: ReactNode[] | ReactNode;
  prevTitle: string;
  nextTitle: string;
}

export function ProjectCarousel({
  children,
  prevTitle,
  nextTitle,
}: ProjectCarouselProps) {
  const items = Children.toArray(children);

  return (
    <div className="pointer-events-auto relative flex aspect-[954/552] w-full max-w-[954px] overflow-hidden bg-netbook bg-cover px-[16.057%] pb-[14.905%] pt-[2.6%]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="relative flex w-full justify-center"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-0 h-full rounded-lg">
          {items.map((item, index) => (
            <CarouselItem key={index} className="h-full rounded-lg pl-0">
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          title={prevTitle}
          className="-left-12 top-1/2 -translate-y-1/2 border-white/20 bg-black/60 text-white shadow-lg sm:-left-16  sm:h-10 sm:w-10"
        />
        <CarouselNext
          title={nextTitle}
          className="-right-12 top-1/2 -translate-y-1/2 border-white/20 bg-black/60 text-white shadow-lg sm:-right-16  sm:h-10 sm:w-10"
        />
      </Carousel>
    </div>
  );
}
