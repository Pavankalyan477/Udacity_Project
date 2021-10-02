const mongoose = require("mongoose");

//const passportLocalMongoose = require("passport-local-mongoose");

//creating fake schema
const signinSchema = new mongoose.Schema({
    // "Email_Address": { type: String, required: true },
    // "Password": { type: String, required: true }
    "signed_in": { type: String, required: false }
})

//signupSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("signin", signinSchema);

