import { sql, relations } from "drizzle-orm";
import { pgEnum, timestamp, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";
import { accounts } from "./accounts";

export const roleEnum = pgEnum("role", ["admin", "guest"]);

export const users = pgTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  image: varchar("image", { length: 255 }),
  role: roleEnum("role").default("guest"),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));
