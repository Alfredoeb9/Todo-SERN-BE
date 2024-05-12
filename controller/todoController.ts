import { Request, Response, response } from "express";
import { todos } from "../db/schema.js";
import { db } from "../db/index.js";
import { and, eq } from "drizzle-orm";

export const submitTodo = async (req: Request, res: Response) => {
  try {
    const { email, title, task, priority } = req.body;

    const todo = await db
      .insert(todos)
      .values({
        email,
        title,
        task,
        priority,
      })
      .returning();

    return res.status(201).json({ todo, message: "New Todo submitted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const removeTodo = async (req: Request, res: Response) => {
  try {
    const { id, email } = req.body;

    await db.delete(todos).where(and(eq(todos.id, id), eq(todos.email, email)));

    return res.status(201).json({ message: `Todo ID: ${id} has been removed` });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
