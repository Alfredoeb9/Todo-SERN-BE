import express, { Express } from "express";
import { submitTodo } from "../controller/todoController.js";

const router = express.Router();

router.post("/submit", submitTodo);

export default router;
