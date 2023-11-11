import { z } from "zod";

export const CreateContactSchema = z.object({
  name: z.string().min(3).max(256),
  email: z.string().email().max(256),
  message: z.string().max(500).optional(),
});
