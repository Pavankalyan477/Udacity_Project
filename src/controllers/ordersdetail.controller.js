const mongoose = require("mongoose");
const express = require("express");
const Order = require("../models/ordersdetail.model");
const Course = require("../models/course.model");

const router = express.Router();


router.get("/order", async (req, res) => {
    const order = await Order.find();
    return res.status(200).send({ order });
})

router.get("/course/:id/order", async (req, res) => {
    const order = await Course.findById(req.params.id);
    return res.render("orderdetail.ejs", { order });
})


//creating api for index page view
router.get("/order/get", async (req, res) => {
    const order = await Course.find().lean().exec();
    //console.log("sign",signup)
    return res.render('orderdetail.ejs',{
        order:order
    })
})

router.post("/order", async (req, res) => {
    const order = await Order.create(req.body);
   return res.status(201).send({ order })
    });

module.exports = router