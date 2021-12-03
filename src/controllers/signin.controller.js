const mongoose = require("mongoose");
const express = require("express");
const Signup = require("../models/signup.model");
const Signin = require("../models/signin.model");
const signupModel = require("../models/signup.model");


const router = express.Router();


// router.get("/signin", async (req, res) => {
//     const signin = await Signin.find();
//     return res.status(200).send({ signin });
// })

//creating api for index page view
router.get("/signinPage", async (req, res) => {
    let datalog = {
        error: ""
    }
    return res.render('../views/signup.ejs', { datalog });
})

router.post('/signin', async (req, res) => {
    try {
        const email = req.body.mail;
        const password = req.body.pass;
        const sign = await Signup.findOne({ Email_Address: email });
        if (sign.Password === password) {

            res.status(201).render("index.ejs");
        } else {
            let datalog = {
                "error": "Invalid Email/Password. Please try again"
            }
            res.render("signup.ejs", { datalog })
        }
        console.log(sign)
    } catch (error) {
        res.status(400).send(error)
    }
})




module.exports = router