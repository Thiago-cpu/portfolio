import { serial, varchar, json } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";
import { type CSSProperties } from "react";

export const technologies = pgTable("technology", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull().unique(),
  style: json("style")
    .$type<CSSProperties>()
    .default({
      backgroundColor: "hsl(0 0% 98%)",
      color: "hsl(0 0% 9%)",
    })
    .notNull(),
});
