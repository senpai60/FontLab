import { connectDB } from "./config/connectDB.config.js";
connectDB();

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("OK");
});

app.listen(3000, () => {
  console.log("the server is running on http://localhost:3000");
});
