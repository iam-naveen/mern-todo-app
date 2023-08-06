import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(express.json());
app.use(cors());
const env = dotenv.config();
dotenvExpand.expand(env);

app.use("/api", todoRoutes);

const PORT = process.env.PORT || 8000;
const DB = process.env.MONGO_DB_URL!;
console.log(DB);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log("Server is running in port", PORT));
