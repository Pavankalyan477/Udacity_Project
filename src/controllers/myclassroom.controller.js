const mongoose = require("mongoose");
const express = require("express");
const Myclassroom = require("../models/myclassroom.model");
const Course = require("../models/course.model");

const router = express.Router();


router.get("/myclassroom", async (req, res) => {
    const myclassroom = await Myclassroom.find();
    return res.status(200).send({ myclassroom });
})

router.get("/myclassroom/get", async (req, res) => {
    const myclassroom = await Course.findById(req.params.id);
    return res.render("myclassroom.ejs", { myclassroom });
})


//creating api for index page view
router.get("/myclassroom/get", async (req, res) => {
    const myclassroom = await Myclassroom.find().lean().exec();
    return res.render('myclassroom.ejs', {
        myclassroom: myclassroom
    })
})

router.post("/myclassroom", async (req, res) => {
    const myclassroom = await Myclassroom.create(req.body);
    return res.status(201).send({ myclassroom })
});

//deletion
router.delete("/myclassroom/:id", async (req, res) => {
    const selectedCourses = await Myclassroom.findByIdAndDelete(req.params.id);
    return res.status(200).send({ selectedCourses });
})


module.exports = router