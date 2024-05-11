import express, { Express, Request, Response } from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const port = 8000;
const app: Express = express();
app.use(cors());
app.use(express.json());

//middleware
app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
