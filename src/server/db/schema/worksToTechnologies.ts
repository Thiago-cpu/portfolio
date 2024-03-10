import { bigint, primaryKey } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";
import { technologies } from "./technologies";
import { works } from "./works";
import { relations } from "drizzle-orm";

export const worksToTechnologies = pgTable(
  "works_to_technologies",
  {
    workId: bigint("work_id", { mode: "number" }).notNull(),
    technologyId: bigint("techonolgy_id", { mode: "number" }).notNull(),
  },
  (t) => ({
    pk: primaryKey(t.workId, t.technologyId),
  }),
);

export const worksToTechnologiesRelations = relations(
  worksToTechnologies,
  ({ one }) => ({
    work: one(works, {
      fields: [worksToTechnologies.workId],
      references: [works.id],
    }),
    technology: one(technologies, {
      fields: [worksToTechnologies.technologyId],
      references: [technologies.id],
    }),
  }),
);
