import { bigint, varchar } from "drizzle-orm/mysql-core";
import { mysqlTable } from "./mysqlTable";

export const links = mysqlTable("link", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  label: varchar("label", { length: 256 }).notNull(),
  href: varchar("href", { length: 512 }).notNull(),
});
