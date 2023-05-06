const express = require("express");
const app_server = require("./app");
const cors = require('cors');
const router = express.Router();

const  node_server= express()

const port = 8080;


//node_server.use("/",app_server);

node_server.use(cors());

node_server.listen(port , ()=>console.log(`server started at port ${port}`));

router.get('/', function(req, res) {
    res.send(`<h1> Wlecome to Express </h1>`)
  });