import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  sqliteTableCreator,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const createTable = sqliteTableCreator((name) => `todo_${name}`);

// create the users schema
export const user = createTable(
  "users",
  {
    id: integer("id").primaryKey(),
    email: text("email").notNull(),
  },
  (users) => ({
    emailIdx: uniqueIndex("emailIdx").on(users.email),
  })
);

export const todos = createTable(
  "todos",
  {
    id: integer("id").primaryKey(),
    title: text("title").notNull(),
    task: text("task").notNull(),
    priority: text("priority", { enum: ["High", "Medium", "Low"] }).notNull(),
    createdAt: integer("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: integer("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (todos) => ({
    nameIdx: uniqueIndex("nameIdx").on(todos.title),
  })
);
