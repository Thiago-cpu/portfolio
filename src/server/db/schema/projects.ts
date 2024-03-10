import { serial, integer } from "drizzle-orm/pg-core";
import { pgTable } from "./pgTable";
import { relations } from "drizzle-orm";
import { links } from "./links";
import { images } from "./images";

export const projects = pgTable("project", {
  id: serial("id").primaryKey(),
  index: integer("index").notNull().unique(),
  linkId: serial("link_id").notNull(),
  imageId: serial("image_id").notNull(),
});

export const projectsRelations = relations(projects, ({ one }) => ({
  link: one(links, {
    fields: [projects.linkId],
    references: [links.id],
  }),
  image: one(images, {
    fields: [projects.imageId],
    references: [images.id],
  }),
}));
