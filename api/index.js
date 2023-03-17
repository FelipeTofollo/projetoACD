import express  from "express";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();

//Add Funções e middwares -modo json

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(13700);