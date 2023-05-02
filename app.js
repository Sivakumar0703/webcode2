const express = require("express");
const app_server = express();
const parser = require("body-parser");
const productRouter = require("./controllers/product.controller");
const bodyParser = require("body-parser");
const userRouter = require("./controllers/user.controller");

require("./dbconfig");

app_server.use(bodyParser.urlencoded({extended:true}));
app_server.use(bodyParser.json());


app_server.use("/products" , productRouter);
//app_server.use(express.json());

app_server.use("/users",userRouter);















module.exports = app_server;