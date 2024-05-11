import express, { Express, Request, Response } from "express";
import cors from "cors";

const port = 8000;
const app: Express = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
