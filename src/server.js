const express = require("express");

const connect = require("./configs/db");

const courseController = require("./controllers/course.controller");

const app = express();
app.use(express.json());

//setting view engine
app.set("view engine", "ejs");
app.use(express.static("public"));


//calling api
app.use("/", courseController);


app.listen(3000, async () => {
    await connect();
    console.log("Listening to Port 3000");
})