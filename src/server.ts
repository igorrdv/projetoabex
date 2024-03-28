import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes/api";

dotenv.config();
const server = express();
server.use(express.urlencoded({ extended: true }));

server.use(express.json());
server.use(router);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Hello World!`);
});
