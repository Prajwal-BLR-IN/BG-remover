import express from "express";
import { clerkWebhook } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post('/webhook', clerkWebhook)

export default userRouter;
