
import { z } from "zod";

export type User = {
  id: number;
  username: string;
  password: string;
};

export type InsertUser = {
  username: string;
  password: string;
};

export type ContactFormSubmission = {
  id: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: Date;
};

export type InsertContactForm = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export const contactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  company: z.string().optional(),
  message: z.string()
});
