import { defineConfig, type Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  dialect: "sqlite",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  tablesFilter: ["todo_*"],
  // Print all statements
  verbose: true,
  // Always ask for my confirmation
  strict: true,
});
