const mongoose = require("mongoose");

//const passportLocalMongoose = require("passport-local-mongoose");

//creating fake schema
const signupSchema = new mongoose.Schema({
    "First_Name": { type: String, required: true },
    "Last_Name": { type: String, required: true },
    "Email_Address": { type: String, required: true },
    "Password": { type: String, required: true }
})

//signupSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("signup", signupSchema);

