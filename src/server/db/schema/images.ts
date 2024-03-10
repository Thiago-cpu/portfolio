import { serial, varchar, integer } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";

export const images = pgTable("image", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 512 }).notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  href: varchar("href", { length: 256 }).notNull(),
  size: integer("size").notNull(),
});
