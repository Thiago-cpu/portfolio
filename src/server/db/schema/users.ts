import { sql, relations } from "drizzle-orm";
import { mysqlEnum, timestamp, varchar } from "drizzle-orm/mysql-core";
import { mysqlTable } from "./mysqlTable";
import { accounts } from "./accounts";

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  image: varchar("image", { length: 255 }),
  role: mysqlEnum("role", ["admin", "guest"]).notNull().default("guest"),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));
