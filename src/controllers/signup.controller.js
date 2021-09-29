const mongoose = require("mongoose");
const express = require("express");
const Signup = require("../models/signup.model");

const router = express.Router();

//creating api for index page view
router.get("/index", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.render("index.ejs")
})

router.get("/data", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.render("data.ejs")
})

router.get("/web", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.render("web.ejs")
})

router.get("/product", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.render("product.ejs")
})

module.exports = router