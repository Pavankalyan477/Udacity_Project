const mongoose = require("mongoose");


// const myclassroomSchema = new mongoose.Schema({
//     "ProgramName": { type: String, required: true },
//     "discription": { type: String, required: true },
//     "image": {type:String, required:true}
// })

//creating fake schema
const myclassroomSchema = new mongoose.Schema({
    "_id": { type: String, required: false },
    "Heading_Banner": { type: String, required: false },
    "Description_Banner": { type: String, required: false },
    "Estimated_Time": { type: String, required: false },
    "Enroll_By": { type: String, required: false },
    "Prequists": { type: String, required: false },
    "Heading": { type: String, required: false },
    "Description": { type: String, required: false },
    "head": { type: String, required: false },
    "des": { type: String, required: false },
    "h1": { type: String, required: false },
    "h1_des": { type: String, required: false },
    "h2": { type: String, required: false },
    "h2_des": { type: String, required: false },
    "h3": { type: String, required: false },
    "h3_des": { type: String, required: false },
    "h4": { type: String, required: false },
    "h4_des": { type: String, required: false },
    "cost": { type: Number, required: false },
    "cost_per_month": { type: Number, required: false },
    "image": { type: String, required: false }
}, {
    versionKey: false
})


module.exports = mongoose.model("myclassroom", myclassroomSchema);

