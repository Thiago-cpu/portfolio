import { getCurrentLocale } from "@/locales/server";
import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { links } from "@/server/db/schema/links";
import { technologies } from "@/server/db/schema/technologies";
import { works } from "@/server/db/schema/works";
import { worksToTechnologies } from "@/server/db/schema/worksToTechnologies";
import { CreateWorkSchema } from "@/validations/workValidation";
import { sql, inArray } from "drizzle-orm";

export const workRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const locale = getCurrentLocale();

    const allWorks = await ctx.db.query.works.findMany({
      columns: {
        title: true,
        text_es: true,
        text_en: true,
        index: true,
        location: true,
        logo: true,
        range: true,
      },

      with: {
        page: {
          columns: {
            href: true,
            label: true,
          },
        },
        technologies: {
          columns: {},
          with: {
            technology: {
              columns: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: (t, { asc }) => asc(t.index),
    });
    const textKey = locale === "en" ? "text_en" : "text_es";
    return allWorks.map((work) => ({
      ...work,
      text: work[textKey],
    }));
  }),

  create: adminProtectedProcedure
    .input(CreateWorkSchema)
    .mutation(async ({ ctx, input: { page, ...input } }) => {
      await ctx.db.transaction(async (tx) => {
        const newLink = await tx.insert(links).values(page).execute();
        await tx
          .insert(technologies)
          .values(input.technologies)
          .onDuplicateKeyUpdate({ set: { id: sql`id` } })
          .execute();

        const newTechs = await tx
          .select({ technologyId: technologies.id })
          .from(technologies)
          .where(
            inArray(
              technologies.name,
              input.technologies.map((t) => t.name),
            ),
          )
          .execute();

        const newWork = await tx
          .insert(works)
          .values({
            ...input,
            pageId: Number(newLink.insertId),
          })
          .execute();

        const newWorksToTechnologies = newTechs.map(({ technologyId }) => ({
          workId: Number(newWork.insertId),
          technologyId,
        }));

        await tx.insert(worksToTechnologies).values(newWorksToTechnologies);
      });

      return true;
    }),
});
