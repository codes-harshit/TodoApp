import express, { Router } from "express";

const todoRouter = Router();

todoRouter.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    data: "hello world",
    message: "hello world",
  });
});

export default todoRouter;
