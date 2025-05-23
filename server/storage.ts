import { type User, type InsertUser, type ContactFormSubmission, type InsertContactForm } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission>;
  getContactSubmissions(): Promise<ContactFormSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    throw new Error("Database operations removed");
  }

  async saveContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission> {
    throw new Error("Database operations removed");
  }

  async getContactSubmissions(): Promise<ContactFormSubmission[]> {
    return [];
  }
}

export const storage = new DatabaseStorage();