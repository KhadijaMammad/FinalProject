import express from "express";
import cors from "cors";
import {config} from "dotenv";
import spotifyDB from "./config/config.js";
import {router} from "./routers/userRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
config();
spotifyDB();

app.use("/users", router);

app.listen(3000, () => console.log("Server is running on port 3000"));
