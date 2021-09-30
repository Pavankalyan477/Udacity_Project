const mongoose = require("mongoose");


const myclassroomSchema = new mongoose.Schema({
    "ProgramName": { type: String, required: true },
    "discription": { type: String, required: true },
    "image": {type:String, required:true}
})


module.exports = mongoose.model("myclassroom", myclassroomSchema);

