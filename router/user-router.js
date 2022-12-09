import express from "express";

import { login } from "../controller/user-controller.js";
import { signup } from "../controller/user-controller.js";
import { getUsers } from "../controller/user-controller.js";




const userRouter = express.Router();

userRouter.get("/", getUsers,);
userRouter.post("/login", login);
userRouter.post("/signup", signup);

export default userRouter;


