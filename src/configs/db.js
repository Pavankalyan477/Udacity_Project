const mongoose = require("mongoose");

module.exports = () => mongoose.connect("mongodb+srv://Proj_Uda:Udacity123@cluster0.hyzfq.mongodb.net/Proj_Udacity?retryWrites=true&w=majority");