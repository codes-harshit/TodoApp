import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRouter from "./routes/todo.routes.js";
import { connectDB } from "./config/connectDB.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/v1/todos", todoRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  connectDB();
  console.log(`App listening on port ${port}`);
});
