import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const formData = contactFormSchema.parse(req.body);

      // Save to storage (database or memory)
      await storage.saveContactSubmission(formData);

      // Send email notification using Resend
      if (process.env.RESEND_API_KEY) {
        try {
          await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "demo77019@gmail.com",
            replyTo: formData.email,
            subject: `New Contact Form Submission from ${formData.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Message:</strong> ${formData.message}</p>
              ${formData.attachmentName ? `<p><strong>Attachment:</strong> ${formData.attachmentName} (${formData.attachmentSize} bytes)</p>` : ""}
            `,
          });
        } catch (emailError) {
          console.error("Error sending email via Resend:", emailError);
        }
      }

      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
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