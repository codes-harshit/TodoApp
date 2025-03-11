import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRouter from "./routes/todo.routes.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/v1/todo", todoRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
