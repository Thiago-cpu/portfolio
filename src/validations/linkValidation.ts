import { z } from "zod";

export const CreateLinkSchema = z.object({
  label: z.string().min(3).max(256),
  href: z.string().url().max(512),
});
