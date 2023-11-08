import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/mysql-core";
import { mysqlTable } from "./mysqlTable";
import { createInsertSchema } from "drizzle-zod";

export const contacts = mysqlTable(
  "contact",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    message: varchar("message", { length: 500 }),
    notified: boolean("notified").notNull().default(false),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (contact) => ({
    nameIndex: index("name_idx").on(contact.name),
  }),
);

export const insertContactSchema = createInsertSchema(contacts, {
  email: (schema) => schema.email.email(),
  name: (schema) => schema.name.min(2),
});
