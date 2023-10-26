const express = require("express");

const jwt = require("jsonwebtoken");
const { CourseModel } = require("../Model/Course.Model");
const courseRouter = express.Router();

courseRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "masai", async (err, decoded) => {
      if (decoded) {
        // No need to extract user ID from the token
        const course = await CourseModel.find();
        res.status(200).send(course);
      } else {
        res.status(401).send({ msg: "User not allowed" });
      }
    });
  }
});

courseRouter.post("/create", async (req, res) => {
  const payload = req.body;
  const course = new CourseModel(payload);
  await course.save();
  res.send({ msg: "Course Created" });
});




module.exports = {
  courseRouter,
};
