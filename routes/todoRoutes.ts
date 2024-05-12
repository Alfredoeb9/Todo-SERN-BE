import express from "express";
import {
  getPosts,
  removeTodo,
  submitTodo,
} from "../controller/todoController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/submit", submitTodo);
router.delete("/remove", removeTodo);

router.use(requireAuth);
router.get("/posts", getPosts);

export default router;
