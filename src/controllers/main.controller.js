const express = require("express");
const Myclassroom = require("../models/myclassroom.model")

const router = express.Router();

router.get("/main", async (req, res) => {
    const selectedCourses = await Myclassroom.find().lean().exec();
    res.render("main.ejs", { selectedCourses });
})

router.get("/remove/:id", async (req, res) => {
    const removeelement = await Myclassroom.findByIdAndDelete(req.params.id);
    res.redirect("back");
})
module.exports = router;