import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { type Works } from "../store/workStore";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";

const WorkToolbar = dynamic(() => import("./workToolbar"));

interface WorkItemProps {
  value: string;
  isAdmin: boolean;
  work: Works[number];
}

export function WorkItem({ value, isAdmin, work }: WorkItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className="px-[13px]"
        rightTrigger={isAdmin && <WorkToolbar work={work} />}
      >
        <div className="mr-2 flex grow flex-wrap justify-between">
          <p>{work.title}</p>
          <p>{work.range}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="overflow-hidden text-ellipsis border border-b-0 px-3 shadow-sm">
        <div className="flex flex-col-reverse gap-5 pt-4 md:flex-row">
          <div className="flex grow flex-col gap-4">
            <div className="flex  items-center gap-2 text-foreground/60">
              <SewingPinFilledIcon className="shrink-0" width={16} />
              <p className="shrink-0">{work.location}</p>
              <Link
                className="pointer-events-auto flex items-center gap-2 hover:text-foreground/80"
                href={work.page.href}
                target="_blank"
              >
                <ExternalLinkIcon className="shrink-0" height={16} />
                <p className="max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap md:max-w-[30ch]">
                  {work.page.label}
                </p>
              </Link>
            </div>
            <p>{work.text}</p>
            <div className="flex flex-wrap gap-2 font-mono">
              {work.technologies.map(({ technology: tech }, i) => (
                <Badge key={i}>{tech.name}</Badge>
              ))}
            </div>
          </div>
          <div className="shrink-0 self-center">
            <Link
              href={work.page.href}
              target="_blank"
              className="pointer-events-auto"
            >
              <Image
                src={work.logo}
                alt={work.page.label}
                width={100}
                height={100}
                priority={true}
              />
            </Link>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
