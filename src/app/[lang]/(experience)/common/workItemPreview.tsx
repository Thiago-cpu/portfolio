import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLinkIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { type Works } from "../store/workStore";
import { type RecursivePartial } from "../../../../lib/types";

interface WorkItemProps {
  value: string;
  work: RecursivePartial<Works[number]>;
}

export function WorkItemPreview({ value, work }: WorkItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="px-[13px]">
        <div className="mr-2 flex grow flex-wrap justify-between">
          <p>{work.title}</p>
          <p>{work.range}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent
        onClick={(e) => e.stopPropagation()}
        className="overflow-hidden text-ellipsis border border-b-0 px-3 shadow-sm"
      >
        <div className="flex flex-col-reverse gap-5 pt-4 md:flex-row">
          <div className="flex grow flex-col gap-4">
            <div className="flex  items-center gap-2 text-foreground/60">
              {work.location ? (
                <>
                  <SewingPinFilledIcon className="shrink-0" width={16} />
                  <p className="shrink-0">{work.location}</p>
                </>
              ) : null}

              {work.page?.label ? (
                <div className="flex cursor-pointer items-center gap-2 hover:text-foreground/80">
                  <ExternalLinkIcon className="shrink-0" height={16} />

                  <p className="max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap md:max-w-[30ch]">
                    {work.page.label}
                  </p>
                </div>
              ) : null}
            </div>
            <p>{work.text}</p>
            <div className="flex flex-wrap gap-2 font-mono">
              {work.technologies?.map(
                (t, i) =>
                  t?.technology?.name && (
                    <Badge key={i}>{t.technology.name}</Badge>
                  ),
              )}
            </div>
          </div>
          <div className="shrink-0 self-center">
            {work.logo ? (
              <Image
                src={work.logo}
                alt={work.page?.label ?? "Logo"}
                width={100}
                height={100}
                priority={true}
              />
            ) : null}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
