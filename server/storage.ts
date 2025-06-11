import { 
  users, 
  type User, 
  type InsertUser, 
  contactFormSubmissions,
  type InsertContactForm,
  type ContactFormSubmission
} from "@shared/schema";
import { eq } from "drizzle-orm";
import { db } from "./db";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  saveContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission>;
  getContactSubmissions(): Promise<ContactFormSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Contact form methods
  async saveContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission> {
    // Make sure attachment fields can be null for database compatibility
    const data = {
      ...submission,
      attachmentName: submission.attachmentName || null,
      attachmentSize: submission.attachmentSize || null
    };
    
    const result = await db
      .insert(contactFormSubmissions)
      .values(data)
      .returning();
    
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactFormSubmission[]> {
    return db.select().from(contactFormSubmissions).orderBy(contactFormSubmissions.createdAt);
  }
}

export const storage = new DatabaseStorage();
