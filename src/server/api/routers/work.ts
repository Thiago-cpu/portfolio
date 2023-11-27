import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { links } from "@/server/db/schema/links";
import { technologies } from "@/server/db/schema/technologies";
import { works } from "@/server/db/schema/works";
import { worksToTechnologies } from "@/server/db/schema/worksToTechnologies";
import {
  CreateWorkSchema,
  DeleteWorkSchema,
  GetAllWorkSchema,
  UpdateWorkSchema,
} from "@/validations/workValidation";
import { TRPCError } from "@trpc/server";
import { sql, inArray, eq } from "drizzle-orm";

export const workRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(GetAllWorkSchema)
    .query(async ({ ctx, input }) => {
      const allWorks = await ctx.db.query.works.findMany({
        columns: {
          id: true,
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
                  style: true,
                },
              },
            },
            orderBy: (_t, { sql }) => sql`RAND()`,
          },
        },
        orderBy: (t, { asc }) => asc(t.index),
      });
      const textKey = input.locale === "en" ? "text_en" : "text_es";
      return allWorks.map((work) => ({
        ...work,
        text: work[textKey],
      }));
    }),

  create: adminProtectedProcedure
    .input(CreateWorkSchema)
    .mutation(async ({ ctx, input: { page, ...input } }) => {
      await ctx.db.transaction(async (tx) => {
        const newLink = await tx.insert(links).values(page);
        await tx
          .insert(technologies)
          .values(input.technologies)
          .onDuplicateKeyUpdate({ set: { id: sql`id` } });

        const newTechs = await tx
          .select({ technologyId: technologies.id })
          .from(technologies)
          .where(
            inArray(
              technologies.name,
              input.technologies.map((t) => t.name),
            ),
          );

        const next = await tx
          .select({
            index: sql<number>`COALESCE(MAX(${works.index}), 0) + 1 as max`,
          })
          .from(works);

        const newWork = await tx.insert(works).values({
          ...input,
          index: next[0]?.index ?? 0,
          pageId: Number(newLink.insertId),
        });

        const newWorksToTechnologies = newTechs.map(({ technologyId }) => ({
          workId: Number(newWork.insertId),
          technologyId,
        }));

        await tx.insert(worksToTechnologies).values(newWorksToTechnologies);
      });

      return true;
    }),
  delete: adminProtectedProcedure
    .input(DeleteWorkSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.transaction(async (tx) => {
        const work = await tx.query.works.findFirst({
          where: (works, { eq }) => eq(works.id, input.id),
        });
        if (!work) throw new TRPCError({ code: "NOT_FOUND" });
        await tx.delete(links).where(eq(links.id, work.pageId));
        await tx.delete(works).where(eq(works.id, work.id));
      });
      return true;
    }),
  update: adminProtectedProcedure
    .input(UpdateWorkSchema)
    .mutation(
      async ({
        ctx,
        input: { page, technologies: inputTechnologies, ...input },
      }) => {
        await ctx.db.transaction(async (tx) => {
          const work = await tx.query.works.findFirst({
            where: (works, { eq }) => eq(works.id, input.id),
          });
          if (!work) throw new TRPCError({ code: "NOT_FOUND" });
          await tx.update(links).set(page).where(eq(links.id, work.pageId));

          await tx
            .insert(technologies)
            .values(inputTechnologies)
            .onDuplicateKeyUpdate({ set: { id: sql`id` } });

          const map = inputTechnologies.map((t) => t.name);

          const newTechs = await tx
            .select({ technologyId: technologies.id })
            .from(technologies)
            .where(inArray(technologies.name, map));

          await tx
            .update(works)
            .set({
              ...input,
            })
            .where(eq(works.id, input.id));

          await tx
            .delete(worksToTechnologies)
            .where(eq(worksToTechnologies.workId, work.id));

          const newWorksToTechnologies = newTechs.map(({ technologyId }) => ({
            workId: work.id,
            technologyId,
          }));

          await tx.insert(worksToTechnologies).values(newWorksToTechnologies);
        });

        return true;
      },
    ),
});
