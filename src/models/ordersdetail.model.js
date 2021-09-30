const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    "ProgramName": { type: String, required: true },
    "duration": { type: String, required: true },
    "listprice": { type: String, required: true },
    "discount": { type: String, required: true },
    "total": { type: String, required: true },
})


module.exports = mongoose.model("order", orderSchema);

