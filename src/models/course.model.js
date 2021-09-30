const mongoose = require("mongoose");

//creating fake schema
const courseSchema = new mongoose.Schema({
    "Heading_Banner": { type: String, required: true },
    "Description_Banner": { type: String, required: true },
    "Estimated_Time": { type: String, required: true },
    "Enroll_By": { type: String, required: true },
    "Prequists": { type: String, required: true },
    "Heading": { type: String, required: true },
    "Description": { type: String, required: true },
    "head": { type: String, required: true },
    "des": { type: String, required: true },
    "h1": { type: String, required: true },
    "h1_des": { type: String, required: true },
    "h2": { type: String, required: true },
    "h2_des": { type: String, required: true },
    "h3": { type: String, required: true },
    "h3_des": { type: String, required: true },
    "h4": { type: String, required: true },
    "h4_des": { type: String, required: true },
    "cost": { type: Number, required: true },
    "cost_per_month": { type: Number, required: true },
    "image": { type: String, required: false }
}, {
    versionKey: false
})

module.exports = mongoose.model("course", courseSchema);

