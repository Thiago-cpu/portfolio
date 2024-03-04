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
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="relative flex justify-center"
      opts={{ loop: true }}
    >
      <div className="relative flex h-[208px] w-[360px] bg-netbook bg-cover px-[59px] pb-[54px] pt-[9px] sm:h-[370px] sm:w-[640px] sm:px-[105px] sm:pb-[96px] sm:pt-[16px]">
        <CarouselContent className="pointer-events-auto">
          {items.map((item, index) => (
            <CarouselItem key={index}>{item}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          title={prevTitle}
          className="left-2 top-[40%] sm:left-8 sm:h-10 sm:w-10"
        />
        <CarouselNext
          title={nextTitle}
          className="right-2 top-[40%] sm:right-8 sm:h-10 sm:w-10"
        />
      </div>
    </Carousel>
  );
}
