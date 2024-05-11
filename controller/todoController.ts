import { Request, Response } from "express";
import { todos } from "../db/schema.js";
import { db } from "../db/index.js";

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
