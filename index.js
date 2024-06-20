// const express = require("express");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extendd: false }));
app.use(bodyParser.json());

app.use(cors());

const port = 3000;
app.get("/", async (req, res) => {
  try {
    res.json({ data: "Hello World" });
  } catch (err) {
    console.log(err);
  }
});
app.post("/SignUp", async (req, res) => {
  try {
    console.log(req.body);
    res.json({ data: "Successfully Created" });
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => `Server running on port ${port} 🔥`);
