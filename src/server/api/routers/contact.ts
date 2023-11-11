import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contacts } from "@/server/db/schema/contacts";
import { Email } from "@/server/email";
import { ContactTemplate } from "@/server/email/templates/ContactTemplate";
import { CreateContactSchema } from "@/validations/contactValidation";

export const contactRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateContactSchema)
    .mutation(async ({ ctx, input }) => {
      const emailSent = await Email.send({
        from: "Portfolio <onboarding@resend.dev>",
        subject: "New Contact",
        react: ContactTemplate(input),
      });
      const notified = Boolean(emailSent.error);
      await ctx.db.insert(contacts).values({
        name: input.name,
        email: input.email,
        message: input.message,
        notified,
      });
      return true;
    }),
});
