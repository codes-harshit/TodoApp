import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRouter from "./routes/todo.routes.js";
import { connectDB } from "./config/connectDB.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  await connectDB();
  console.log(`App listening on port ${port}`);
});
