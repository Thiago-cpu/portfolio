import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";

export const links = pgTable("link", {
  id: serial("id").primaryKey(),
  label: varchar("label", { length: 256 }).notNull(),
  href: varchar("href", { length: 512 }).notNull(),
});
