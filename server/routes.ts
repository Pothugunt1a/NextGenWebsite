import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const formData = contactFormSchema.parse(req.body);

      // Store contact form submission
      // const contact = await storage.saveContactSubmission(formData); // Commented out database operation

      // In a production environment, you would typically:
      // 1. Send an email notification
      // 2. Create a CRM entry
      // 3. Set up an automated response

      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        // id: contact.id // Removed database id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);

      if (error instanceof z.ZodError) {
        // Send validation errors
        return res.status(400).json({
          success: false,
          message: "Form validation failed",
          errors: error.errors
        });
      }

      res.status(500).json({
        success: false,
        message: "Failed to process contact form submission"
      });
    }
  });

  // Static file serving and fallback routing is handled by setupVite in development
  // and serveStatic in production - see server/vite.ts

  const httpServer = createServer(app);

  return httpServer;
}