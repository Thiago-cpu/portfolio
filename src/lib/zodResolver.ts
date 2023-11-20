/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Resolver, type FieldValues } from "react-hook-form";
import { type z, ZodError } from "zod";

export const zodResolver =
  <TFieldValues extends FieldValues>(
    schema: z.ZodType,
  ): Resolver<TFieldValues> =>
  async (data, _context, _options) => {
    try {
      const values = await schema.parseAsync(data);
      return { values, errors: {} };
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, any> = {};
        error.errors.forEach((issue) => {
          const path = issue.path.join(".");
          formattedErrors[path] = issue;
        });
        return { values: {}, errors: formattedErrors };
      } else {
        throw error;
      }
    }
  };
