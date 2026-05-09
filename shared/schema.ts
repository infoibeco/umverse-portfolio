
import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const films = pgTable("films", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  year: integer("year").notNull(),
  imageUrl: text("image_url").notNull(), // For the still or video thumbnail
  abstractSentence: text("abstract_sentence").notNull(), // The "one sentence" revealed on hover
  duration: text("duration").notNull(),
  festivalSelection: text("festival_selection"), // Optional festival selection text
});

export const fiction = pgTable("fiction", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  year: integer("year").notNull(),
  fragment: text("fragment").notNull(), // 1-2 sentences maximum
});

// === SCHEMAS ===

export const insertFilmSchema = createInsertSchema(films).omit({ id: true });
export const insertFictionSchema = createInsertSchema(fiction).omit({ id: true });

// === EXPLICIT API TYPES ===

export type Film = typeof films.$inferSelect;
export type InsertFilm = z.infer<typeof insertFilmSchema>;

export type Fiction = typeof fiction.$inferSelect;
export type InsertFiction = z.infer<typeof insertFictionSchema>;

export type FilmListResponse = Film[];
export type FictionListResponse = Fiction[];
