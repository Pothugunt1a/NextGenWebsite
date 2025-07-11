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
    if (!db) throw new Error("Database not initialized");
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not initialized");
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error("Database not initialized");
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Contact form methods
  async saveContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission> {
    if (!db) throw new Error("Database not initialized");
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
    if (!db) throw new Error("Database not initialized");
    return db.select().from(contactFormSubmissions).orderBy(contactFormSubmissions.createdAt);
  }
}

export class MemoryStorage implements IStorage {
  private users: User[] = [];
  private contactSubmissions: ContactFormSubmission[] = [];
  private nextUserId = 1;
  private nextContactId = 1;

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.nextUserId++,
      ...insertUser
    };
    this.users.push(user);
    return user;
  }

  // Contact form methods
  async saveContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission> {
    const contactSubmission: ContactFormSubmission = {
      id: this.nextContactId++,
      ...submission,
      attachmentName: submission.attachmentName || null,
      attachmentSize: submission.attachmentSize || null,
      createdAt: new Date()
    };
    this.contactSubmissions.push(contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactFormSubmission[]> {
    return [...this.contactSubmissions].sort((a, b) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }
}

// Use memory storage when database is not available
export const storage = db ? new DatabaseStorage() : new MemoryStorage();
