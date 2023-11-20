import { z } from "zod";

export const CreateContactSchema = z.object({
  name: z
    .string({ required_error: "errors.required" })
    .min(3, { message: "errors.min#other" })
    .max(256, { message: "errors.max#other" }),
  email: z
    .string({ required_error: "errors.required" })
    .email({ message: "errors.email" })
    .max(256, { message: "errors.max#other" }),
  message: z
    .string({ required_error: "errors.required" })
    .max(500, { message: "errors.max#other" })
    .optional(),
});
