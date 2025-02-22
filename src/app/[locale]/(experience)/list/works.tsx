import { Accordion } from "@/components/ui/accordion";

import { api } from "@/trpc/server";

import { getServerIsAdmin } from "@/server/auth";
import type { Works as TWorks } from "../store/workStore";
import { WorkItem } from "./workItem";
import { getLocale } from "@/locales/server";

export default async function Works() {
  const locale = await getLocale();
  const [works, isAdmin] = await Promise.all([
    api.work.getAll.query({ locale }),
    getServerIsAdmin(),
  ]);

  return <WorkList works={works} isAdmin={isAdmin} />;
}

function WorkList({ works, isAdmin }: { works: TWorks; isAdmin: boolean }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-opacity-background"
      defaultValue={`work-${Math.floor(Math.random() * works.length)}`}
    >
      {works.map((work, i) => (
        <WorkItem
          key={work.id}
          value={`work-${i}`}
          work={work}
          isAdmin={isAdmin}
        />
      ))}
    </Accordion>
  );
}
