import express, { Express } from "express";
import { removeTodo, submitTodo } from "../controller/todoController.js";

const router = express.Router();

router.post("/submit", submitTodo);
router.delete("/remove", removeTodo);

export default router;
