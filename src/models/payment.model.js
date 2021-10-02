const mongoose = require("mongoose");


const paymentSchema = new mongoose.Schema({
    "ProgramName": { type: String, required: true },
})


module.exports = mongoose.model("payment", paymentSchema);

