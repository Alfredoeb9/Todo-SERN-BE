import express, { Express } from "express";
import { login } from "../controller/authController";
const router = express.Router();

router.post("/login", login);

export default router;
