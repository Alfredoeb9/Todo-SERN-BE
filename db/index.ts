import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema.js";
import * as dotenv from "dotenv";
dotenv.config();

// connect to database
const client = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema, logger: true });
