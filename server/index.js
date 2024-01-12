import express from "express";
import path from "path";
import { join } from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
dotenv.config();

const app = express();

app.use(express.static("public"));
app.use("/public", express.static("public"));

const __filename = new URL(import.meta.url).pathname;
const __dirname = join(__filename, "..");
app.use(express.static(path.join(__dirname, "/index.html")));

app.get("/api", (req, res) => {
  res.send("hello from the server");
});

app.listen(process.env.PORT || 6968, () => {
  console.log("======================================================");
  console.log("listening on port ", process.env.PORT || 6968);
});
