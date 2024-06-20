// const express = require("express");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();

app.use(bodyParser.urlencoded({ extendd: false }));
app.use(bodyParser.json());

app.use(cors());

const port = 3000;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
app.get("/", async (req, res) => {
  try {
    res.json({ data: "Hello World" });
  } catch (err) {
    console.log(err);
  }
});
app.post(
  "/SignUp",
  upload.fields([{ name: "avatar", maxCount: 1 }]),
  async (req, res) => {
    try {
      console.log(req.files);
      const { email, username, Mobile, password } = req.body;
      console.log(email);
      console.log(username);
      console.log(Mobile);
      console.log(password);
      res.json({ data: "Successfully Created" });
    } catch (err) {
      console.log(err);
    }
  }
);
app.listen(port, () => `Server running on port ${port} 🔥`);
