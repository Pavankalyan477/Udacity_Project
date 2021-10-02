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
router.get("/signin/get", async (req, res) => {
    //const signin = await Signin.find().lean().exec();
    //console.log("sign",signin)
    return res.render('signup.hbs')
})

router.post('/signin', async (req, res) => {
    try {
        const email = req.body.mail;
        const password = req.body.pass;
        const sign = await Signup.findOne({ Email_Address: email });
        if (sign.Password === password) {
<<<<<<< HEAD
            res.status(201).render("classroom.ejs",{user:" "});
        } else {
            //var out=[{'name':'wrong password'}]
            res.render('signup',{user:"Password is Incorrect"})
=======
            res.status(201).render("classroom.ejs");
        } else {
            res.send("Password is incorrect")
>>>>>>> 79401f3c09df61fba5eadc43bd65be9145a7db7c
        }
        console.log(sign)
    } catch (error) {
        res.status(400).send("Invalid details")
    }
})




module.exports = router