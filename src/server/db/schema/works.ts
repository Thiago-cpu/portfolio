import { relations, sql } from "drizzle-orm";
import { bigint, timestamp, int, varchar } from "drizzle-orm/mysql-core";
import { mysqlTable } from "./mysqlTable";
import { worksToTechnologies } from "./worksToTechnologies";
import { links } from "./links";

export const works = mysqlTable("work", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  title: varchar("title", { length: 256 }).notNull(),
  range: varchar("range", { length: 256 }).notNull(),
  location: varchar("location", { length: 256 }).notNull(),
  pageId: bigint("pageId", { mode: "number" }).notNull(),
  index: int("index").notNull(),
  text_en: varchar("text_en", { length: 512 }).notNull(),
  text_es: varchar("text_es", { length: 512 }).notNull(),
  logo: varchar("logo", { length: 255 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const worksRelations = relations(works, ({ many, one }) => ({
  page: one(links, {
    fields: [works.pageId],
    references: [links.id],
  }),
  technologies: many(worksToTechnologies),
}));
