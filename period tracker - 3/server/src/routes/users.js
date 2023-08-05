const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username,email, password } = req.body;

  const user = await UserModel.findOne({ username }).lean();

  if (user) {
    return res.json({
      message: "user already exists",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username,email,password: hashedPassword });
    await newUser.save();
    res.json({
      message: "user registered successfully",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username }).lean();

  if (!user) {
    return res.json({
      message: "user doesn't exist",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({
      message: "username or password is Incorrect",
    });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userId: user._id });
});

const userRouter = router;
module.exports=userRouter
