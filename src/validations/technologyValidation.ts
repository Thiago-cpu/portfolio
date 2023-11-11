import { z } from "zod";

export const CreateTechnologySchema = z.object({
  name: z.string().min(3).max(256),
});
