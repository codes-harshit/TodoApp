import express, { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.get("/", getTodos);
todoRouter.post("/", addTodo);
todoRouter.delete("/:id", deleteTodo);
todoRouter.put("/:id", updateTodo);

export default todoRouter;
