const express = require("express");
const app_server = require("./app");

const  node_server= express()

const port = 8080;


node_server.use("/",app_server);

node_server.listen(port , ()=>console.log(`server started at port ${port}`));