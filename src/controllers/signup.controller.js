const mongoose = require("mongoose");
const express = require("express");
const Signup = require("../models/signup.model");

const router = express.Router();


router.get("/signup", async (req, res) => {
    const signup = await Signup.find().lean().exec();
    return res.status(200).send({ signup });
})

//creating api for index page view
router.get("/signup/get", async (req, res) => {
    const signup = await Signup.find().lean().exec();
    //console.log("sign",signup)
    return res.render('../views/signup.hbs', {
        signup: signup
    })
})
router.post("/signup", async (req, res) => {
    const signup = await Signup({ First_Name: req.body.First_Name, Last_Name: req.body.Last_Name, Email_Address: req.body.mail, Password: req.body.pass });
    signup.save(function (err) {
        if (err) {
            console.log("Something went wrong");
        }
        else {
            console.log("Successfully added a user");
            res.redirect("/signup/get");
        }
    });
    // console.log("sign",signup)
    //res.redirect("/")
    // return res.status(201).send({ signup });
})



module.exports = router