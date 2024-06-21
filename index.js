// const express = require("express");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import bcrypt from "bcrypt";

const app = express();

app.use(bodyParser.urlencoded({ extendd: false }));
app.use(bodyParser.json());

app.use(cors());

const port = 3000;
// Middleware to parse JSON bodies
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./temp/my-uploads");
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
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("email = ", email);
      console.log("username = ", username);
      console.log("mobile no = ", Mobile);
      console.log("password = ", hashedPassword);
      res.json({ data: "Successfully Created" });
      // res.send("Sign In Successfully");
    } catch (err) {
      console.log(err);
    }
  }
);
app.post("/SignIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email = ", email);
    console.log("password = ", password);
    res.json({ data: "Successfully Created SignIn" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post(
  "/BookingForm",
  upload.fields([{ name: "hotelimage", maxCount: 1 }]),
  async (req, res) => {
    try {
      console.log(req.body);
      console.log("hotelimage = ", req.files);
      res.json({ data: "Successfully Created BookingForm" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
app.listen(port, () => `Server running on port ${port} 🔥`);
