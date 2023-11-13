import { z } from "zod";
import { CreateLinkSchema } from "./linkValidation";
import { CreateTechnologySchema } from "./technologyValidation";

export const CreateWorkSchema = z.object({
  title: z.string().min(3).max(256),
  range: z.string().min(3).max(256),
  location: z.string().min(3).max(256),
  page: CreateLinkSchema,
  index: z.number().nonnegative(),
  text_en: z.string().max(512),
  text_es: z.string().max(512),
  logo: z.string().url(),
  technologies: z.array(CreateTechnologySchema).min(1),
});

export const DeleteWorkSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((value) => Number(value)),
});

export const UpdateWorkSchema = CreateWorkSchema.merge(DeleteWorkSchema);
