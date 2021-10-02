const mongoose = require("mongoose");
const express = require("express");
const Signup = require("../models/signup.model");
const Signin = require("../models/signin.model");


const router = express.Router();


// router.get("/signin", async (req, res) => {
//     const signin = await Signin.find();
//     return res.status(200).send({ signin });
// })

//creating api for index page view
router.get("/signin/get", async (req, res) => {
    //const signin = await Signin.find().lean().exec();
    //console.log("sign",signin)
    return res.render('../views/signup.ejs')
})

router.post('/signin', async (req, res) => {
    try {
        const email = req.body.mail;
        const password = req.body.pass;
        const sign = await Signup.findOne({ Email_Address: email });
        if (sign.Password === password) {
            res.status(201).render("classroom.ejs");
        } else {
            res.send("Password is incorrect")
        }
        console.log(sign)
    } catch (error) {
        res.status(400).send("Invalid details")
    }
})




module.exports = router