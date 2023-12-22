import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Children, type ReactNode } from "react";

interface ProjectCarouselProps {
  children?: ReactNode[] | ReactNode;
}

export function ProjectCarousel({ children }: ProjectCarouselProps) {
  const items = Children.toArray(children);

  return (
    <Carousel className="relative flex justify-center" opts={{ loop: true }}>
      <div className="relative flex h-[208px] w-[360px] bg-netbook bg-cover px-[59px] pb-[54px] pt-[9px] sm:h-[370px] sm:w-[640px] sm:px-[105px] sm:pb-[96px] sm:pt-[16px]">
        <CarouselContent className="pointer-events-auto">
          {items.map((item, index) => (
            <CarouselItem key={index}>{item}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 top-[40%] sm:left-8 sm:h-10 sm:w-10" />
        <CarouselNext className="right-2 top-[40%] sm:right-8 sm:h-10 sm:w-10" />
      </div>
    </Carousel>
  );
}
