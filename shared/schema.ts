import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submission schema
export const contactFormSubmissions = pgTable("contact_form_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  attachmentName: text("attachment_name"),
  attachmentSize: integer("attachment_size"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactFormSchema = createInsertSchema(contactFormSubmissions).pick({
  name: true,
  email: true,
  attachmentName: true,
  attachmentSize: true,
  message: true,
});

export type InsertContactForm = z.infer<typeof contactFormSchema>;
export type ContactFormSubmission = typeof contactFormSubmissions.$inferSelect;
