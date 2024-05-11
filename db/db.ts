import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

// connect to database
const client = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client);
