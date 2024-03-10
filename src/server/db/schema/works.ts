import { relations, sql } from "drizzle-orm";
import { serial, timestamp, integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";
import { worksToTechnologies } from "./worksToTechnologies";
import { links } from "./links";

export const works = pgTable("work", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  range: varchar("range", { length: 256 }).notNull(),
  location: varchar("location", { length: 256 }).notNull(),
  pageId: serial("pageId").notNull(),
  index: integer("index").notNull(),
  text_en: varchar("text_en", { length: 512 }).notNull(),
  text_es: varchar("text_es", { length: 512 }).notNull(),
  logo: varchar("logo", { length: 255 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const worksRelations = relations(works, ({ many, one }) => ({
  page: one(links, {
    fields: [works.pageId],
    references: [links.id],
  }),
  technologies: many(worksToTechnologies),
}));
