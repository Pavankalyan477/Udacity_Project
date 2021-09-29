const mongoose = require("mongoose");
const express = require("express");
const Signin = require("../models/signin.model");
const Signup = require("../models/signup.model");


const router = express.Router();


router.get("/signin", async (req, res) => {
    const signin = await Signin.find();
    return res.status(200).send({ signin });
})

//creating api for index page view
router.get("/signin/get", async (req, res) => {
    const signin = await Signin.find().lean().exec();
    //console.log("sign",signin)
    return res.render('../views/signin.ejs',{
        signin:signin
    })
})
router.post("/signin", async (req, res) => {
    const signin = await Signin({Email_Address: req.body.mail, Password: req.body.pass});
    signin.save(function(err) {
        if(err) {
            console.log("Something went wrong");
        }
        else {
            if(signin.Email_Address===Signup.)
            console.log("Successfully added a user");
            res.redirect("/signin/get");
        }
    });
    console.log("sign",signin)
//     res.redirect("/")
//    return res.status(201).send({ signup });
})





module.exports = router