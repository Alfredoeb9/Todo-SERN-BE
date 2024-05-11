import express, { Express, Request, Response } from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoutes.js";

const port = 8000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
