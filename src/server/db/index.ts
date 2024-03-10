import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "@/env.mjs";
import { schema } from "./schema";
import postgres from "postgres";

export const db = drizzle(postgres(env.DATABASE_URL, { prepare: false }), {
  schema,
  logger: env.NODE_ENV === "development",
});
