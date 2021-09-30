const express = require("express");
const Course = require("../models/course.model");

const router = express.Router();

//creating api for index page view
router.get("/", async (req, res) => {
    const user = await Course.find().lean().exec();
    return res.render("index.ejs")
})

//creating api for each courses
router.get("/course/:id", async (req, res) => {
    const course = await Course.findById(req.params.id);
    return res.render("course.ejs", { course });
})

/* *******************************API Collection************************************* */

//adding course
router.post("/", async (req, res) => {
    const course = await Course.create(req.body);
    return res.status(201).send({ course });
})

//getting all courses
router.get("/api/courses", async (req, res) => {
    const course = await Course.find().lean().exec();
    return res.status(200).send({ course });
})

//getting each courses
router.get("/api/courses/:id", async (req, res) => {
    const course = await Course.findById(req.params.id).lean().exec();
    return res.status(200).send({ course });
})
//updating a course
router.patch("/api/courses/:id", async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({ course });
})

module.exports = router