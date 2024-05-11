import { type Config } from "drizzle-kit";
import "dotenv/config";

export default {
  dialect: "sqlite",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
