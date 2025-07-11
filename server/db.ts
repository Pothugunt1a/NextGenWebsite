
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// Database connection
let db: ReturnType<typeof drizzle> | null = null;

// Initialize database connection only if DATABASE_URL is available
if (process.env.DATABASE_URL) {
  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql);
}

export { db };
