import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@/env.mjs";
import { schema } from "./schema";

export const db = drizzle(
  new Client({
    url: env.DATABASE_URL,
  }).connection(),
  { schema, logger: env.NODE_ENV === "development" },
);
