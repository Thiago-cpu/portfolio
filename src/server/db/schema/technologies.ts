import { bigint, varchar } from "drizzle-orm/mysql-core";
import { mysqlTable } from "./mysqlTable";

export const technologies = mysqlTable("technology", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull().unique(),
});
