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

  // Serve static files from the client/dist/public directory
  app.use(express.static('dist/public'));

  // Handle client-side routing - always serve index.html for any unknown routes
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      res.status(404).json({ message: 'API endpoint not found' });
    } else {
      res.sendFile(path.resolve(import.meta.dirname, '../dist/public/index.html'));
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}