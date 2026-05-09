
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Seed data on server start
  await storage.seedData();

  app.get(api.films.list.path, async (req, res) => {
    const films = await storage.getFilms();
    res.json(films);
  });

  app.get(api.fiction.list.path, async (req, res) => {
    const fiction = await storage.getFiction();
    res.json(fiction);
  });

  return httpServer;
}
