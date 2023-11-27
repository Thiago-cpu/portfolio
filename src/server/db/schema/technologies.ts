import { bigint, varchar, json } from "drizzle-orm/mysql-core";
import { mysqlTable } from "./mysqlTable";
import { type CSSProperties } from "react";

export const technologies = mysqlTable("technology", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull().unique(),
  style: json("style")
    .$type<CSSProperties>()
    .default({
      backgroundColor: "hsl(0 0% 98%)",
      color: "hsl(0 0% 9%)",
    })
    .notNull(),
});
