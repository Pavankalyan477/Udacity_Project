const express = require("express");

const connect = require("./configs/db");

const courseController = require("./controllers/course.controller");
const signupController = require("./controllers/signup.controller");

const app = express();
app.use(express.json());


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded( {extended: true} ));
//setting view engine
app.set("view engine", "ejs");
app.use(express.static("public"));


//calling api
app.use("/", courseController);
app.use("/", signupController);


app.listen(3000, async () => {
    await connect();
    console.log("Listening to Port 3000");
})