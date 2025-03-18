import express, { Router } from "express";
import { loginUser, signupUser } from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);

export default userRouter;
