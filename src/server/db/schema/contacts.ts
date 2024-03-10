import {
  serial,
  index,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";

export const contacts = pgTable(
  "contact",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    message: varchar("message", { length: 500 }),
    notified: boolean("notified").notNull().default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (contact) => ({
    nameIndex: index("name_idx").on(contact.name),
  }),
);
