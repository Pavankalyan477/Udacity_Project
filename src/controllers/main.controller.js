const express = require("express");
const Myclassroom = require("../models/myclassroom.model")

const router = express.Router();

router.get("/main", async (req, res) => {
    const selectedCourses = await Myclassroom.find().lean().exec();
    res.render("main.ejs", { selectedCourses });
})
module.exports = router;