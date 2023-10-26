const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Model/User.Model");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the email already exists in the database
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.send({ msg: "Email ID already exists" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) res.send({ msg: "Something went wrong", error: err.message });
        else {
          const user = new UserModel({ name, email, password: hash });
          await user.save();
          res.send({ msg: "New User has been registered" });
        }
      });
    }
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user._id }, "masai");
          res.send({ msg: "Login Successful", token: token });
        } else {
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.send({ msg: "Something went wrong", error: err.message });
  }
});

module.exports = { userRouter };
