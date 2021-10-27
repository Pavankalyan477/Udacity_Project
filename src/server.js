const express = require("express");

const connect = require("./configs/db");

const courseController = require("./controllers/course.controller");
const signupController = require("./controllers/signup.controller");
const paymentController = require("./controllers/payment.controller");
const orderController = require("./controllers/ordersdetail.controller");
const signinController = require("./controllers/signin.controller");
const myclassController = require("./controllers/myclassroom.controller");
const mainController = require("./controllers/main.controller");
const course1Controller = require("./controllers/course1.controller");



const app = express();
app.use(express.json());


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//setting view engine
app.set("view engine", "ejs");
app.set("view engine", "hbs");
app.use(express.static("public"));



//calling api
app.use("/", courseController);
app.use("/", signupController);
app.use("/", paymentController);
app.use("/", orderController);
app.use("/", signinController);
app.use("/", myclassController);
app.use("/", mainController);
app.use("/", course1Controller);


app.listen(3000, async () => {
    await connect();
    console.log("Listening to Port 3000");
})