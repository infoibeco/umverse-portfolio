
import { db } from "./db";
import { films, fiction, type Film, type Fiction } from "@shared/schema";

export interface IStorage {
  getFilms(): Promise<Film[]>;
  getFiction(): Promise<Fiction[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getFilms(): Promise<Film[]> {
    return await db.select().from(films);
  }

  async getFiction(): Promise<Fiction[]> {
    return await db.select().from(fiction);
  }

  async seedData(): Promise<void> {
    try {
      // Data override for the Films slate
      await db.delete(films);
      await db.insert(films).values([
        {
          title: "Amniotic Rain",
          year: 2026,
          imageUrl: "/amniotic-rain.jpg",
          abstractSentence: "A controlled birth within a quiet system.",
          duration: "7M",
          festivalSelection: "Official Selection – Berlin Indie Film Festival (2026)"
        },
        {
          title: "The Dispenser",
          year: 2026,
          imageUrl: "/the-dispenser.jpg",
          abstractSentence: "A peaceful world is a form that conceals human cruelty.",
          duration: "7M"
        },
        {
          title: "Emotion Gum",
          year: 2026,
          imageUrl: "/emotion-gum.jpg",
          abstractSentence: "Bubble gum that reveals emotions in color.",
          duration: "7M"
        }
      ]);
    } catch (error) {
      console.error("Seeding error:", error);
    }
  }
}

export const storage = new DatabaseStorage();
