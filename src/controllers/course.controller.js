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

router.get("/data", async (req, res) => {
    const course = await Course.find().lean().exec();
    return res.render("data.ejs", { course });
})

router.get("/web", async (req, res) => {
    const course = await Course.find().lean().exec();
    return res.render("web.ejs")
})

router.get("/product", async (req, res) => {
    const course = await Course.find().lean().exec();
    return res.render("product.ejs")
})

//adding course
router.post("/", async (req, res) => {
    const course = await Course.create(req.body);
    return res.status(201).send({ course });
})



/* *******************************API Collection************************************* */
//getting all courses
router.get("/api/courses", async (req, res) => {
    const course = await Course.find().lean().exec();
    return res.status(200).send({ course });
})

module.exports = router