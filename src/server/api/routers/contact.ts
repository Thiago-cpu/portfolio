import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contacts, insertContactSchema } from "@/server/db/schema/contacts";

export const contactRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      insertContactSchema.pick({
        name: true,
        email: true,
        message: true,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const notified = false;
      await ctx.db.insert(contacts).values({
        name: input.name,
        email: input.email,
        message: input.message,
        notified,
      });
      return true;
    }),
});
