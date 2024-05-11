import { relations, sql } from "drizzle-orm";
import {
  int,
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

export const usersRelations = relations(user, ({ one, many }) => ({
  posts: many(todos),
}));

export const todos = createTable(
  "todos",
  {
    id: int("id").primaryKey(),
    title: text("title").notNull(),
    email: text("email").notNull(),
    task: text("task").notNull(),
    priority: text("priority", { enum: ["High", "Medium", "Low"] }).notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (todos) => ({
    titleTodoIdx: uniqueIndex("titleTodoIdx").on(todos.title),
  })
);

export const todosRelations = relations(todos, ({ one }) => ({
  author: one(user, {
    fields: [todos.email],
    references: [user.email],
  }),
}));
