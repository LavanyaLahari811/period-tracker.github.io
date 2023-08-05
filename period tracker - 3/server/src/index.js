const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/users");
const infoRouter = require("./routes/info");
const dashboardRouter=require("./routes/dashboard");

const nodemailer = require("nodemailer");
const cron = require("node-cron");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/main", infoRouter);
app.use("/main",dashboardRouter);

mongoose.connect(
  "mongodb+srv://lavanyalaharik2003:ODivQhnpruPljjWa@cluster0.xpf1ehh.mongodb.net/ptracker"
);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
