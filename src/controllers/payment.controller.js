const mongoose = require("mongoose");
const express = require("express");
const Payment = require("../models/payment.model");
const Course = require("../models/course.model")
const Myclassroom = require("../models/myclassroom.model")

const router = express.Router();

router.get("/payment", async (req, res) => {
    const payment = await Payment.find();
    return res.status(200).send({ payment });
})


router.get("/payment/:id", async (req, res) => {
    const payment = await Course.findById(req.params.id).lean().exec();
    let classroom = await Myclassroom.findById(req.params.id).lean().exec();
    if (classroom == null) {
        classroom = await Myclassroom.create(payment);
        return res.render("payment.ejs", { payment, classroom });
    }
})

//successful payments
router.get("/success", async (req, res) => {
    return res.render("success.ejs");
})




//creating api for index page view
router.get("/payment/get", async (req, res) => {
    const payment = await payment.find().lean().exec();
    return res.render('/payment.ejs', {
        payment: payment
    })
})

router.post("/payment", async (req, res) => {
    const payment = await Payment.create(req.body);
    return res.status(201).send({ payment })
});

module.exports = router