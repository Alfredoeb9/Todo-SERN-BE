import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

// create the users schema
export const user = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    email: text("email").notNull(),
  },
  (users) => ({
    emailIdx: uniqueIndex("emailIdx").on(users.email),
  })
);
