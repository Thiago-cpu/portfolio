"use client";
import { type ReactNode, Children, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  children?: ReactNode[] | ReactNode;
}

export function ProjectCarouselSkeleton() {
  return (
    <div className="bg-netbook pointer-events-auto flex h-[370px] w-[640px] bg-cover px-[105px] pb-[96px] pt-[16px]">
      <Skeleton className="grow" />
    </div>
  );
}

export function ProjectCarousel({ children }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);
  const shouldShowButtons = items.length > 1;

  const moveIndex = (distance: number) => {
    setIndex((p) => Math.min(items.length - 1, Math.max(p + distance, 0)));
  };

  return (
    <div className="bg-netbook flex h-[208px] w-[360px] bg-cover px-[59px] pb-[54px] pt-[9px] sm:h-[370px] sm:w-[640px] sm:px-[105px] sm:pb-[96px] sm:pt-[16px]">
      <div className="pointer-events-auto relative flex grow items-center justify-between overflow-hidden bg-background">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 -translate-x-full transform transition-transform duration-700 ease-in-out",
              {
                "translate-x-0": i === index,
                "translate-x-full": i > index,
              },
            )}
          >
            {item}
          </div>
        ))}
        {shouldShowButtons && (
          <Button
            variant="outline"
            className="absolute left-2 h-fit rounded-full p-1 sm:p-2"
            onClick={() => moveIndex(-1)}
          >
            <ChevronLeft className="h-5 w-5 shrink-0 transition-transform duration-200 sm:h-6 sm:w-6" />
          </Button>
        )}
        {shouldShowButtons && (
          <Button
            variant="outline"
            className="absolute right-2 h-fit rounded-full p-1 sm:p-2"
            onClick={() => moveIndex(1)}
          >
            <ChevronRight className="h-5 w-5 shrink-0 transition-transform duration-200 sm:h-6 sm:w-6" />
          </Button>
        )}
      </div>
    </div>
  );
}
