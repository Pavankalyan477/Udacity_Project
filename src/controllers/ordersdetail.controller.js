const mongoose = require("mongoose");
const express = require("express");
const Order = require("../models/ordersdetail.model");

const router = express.Router();


router.get("/order", async (req, res) => {
    const order = await Order.find();
    return res.status(200).send({ order });
})

//creating api for index page view
router.get("/order/get", async (req, res) => {
    const order = await Order.find().lean().exec();
    return res.render('../views/ordersdetails.ejs.ejs',{
        order:order
    })
})

router.post("/order", async (req, res) => {
    const order = await Order.create(req.body);
   return res.status(201).send({ order })
    });

module.exports = router