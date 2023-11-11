import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { api } from "@/trpc/server";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";

export default async function Works() {
  const works = await api.work.getAll.query();

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-opacity-background"
    >
      {works.map((work, i) => (
        <AccordionItem value={`work-${i}`} key={i}>
          <AccordionTrigger className="px-[13px]">
            <div className="mr-2 flex grow justify-between">
              <p>{work.title}</p>
              <p>{work.range}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className=" overflow-hidden text-ellipsis  border border-b-0 px-3 pt-4 shadow-sm">
            <div className="flex flex-col-reverse gap-5 md:flex-row">
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
      ))}
    </Accordion>
  );
}
