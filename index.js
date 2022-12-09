import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./router/user-router.js";
import sipRouter from "./router/sip-router.js";

   

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to Hotel Booking API");
});

app.use("/api/user", userRouter);
app.use("/api/sip", sipRouter);

const PORT = process.env.PORT || 4000;
const url = process.env.MONGODB_URL;
mongoose.connect(url
)
.then(() => app.listen(PORT))
.then(() => console.log("Connected to Database and Listening To Localhost 4000"))
.catch((err) => console.log(err));