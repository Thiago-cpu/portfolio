import { Accordion } from "@/components/ui/accordion";

import { api } from "@/trpc/server";

import { getServerIsAdmin } from "@/server/auth";
import { type Works } from "../store/workStore";
import { WorkItem } from "./workItem";

export default async function Works() {
  const [works, isAdmin] = await Promise.all([
    api.work.getAll.query(),
    getServerIsAdmin(),
  ]);

  return <WorkList works={works} isAdmin={isAdmin} />;
}

function WorkList({ works, isAdmin }: { works: Works; isAdmin: boolean }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-opacity-background"
    >
      {works.map((work, i) => (
        <WorkItem value={`work-${i}`} key={i} work={work} isAdmin={isAdmin} />
      ))}
    </Accordion>
  );
}