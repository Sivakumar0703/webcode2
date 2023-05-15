const express = require("express");
const app_server = express();

const productRouter = require("./controllers/product.controller");
//const bodyParser = require("body-parser");
const userRouter = require("./controllers/user.controller");
const cartRouter = require("./controllers/cart.controller")
const paymentRouter = require("./controllers/payment.controller")
const razorRouter = require("./controllers/razorpay")
//const indexRouter = require("./index")
const cors = require('cors')

require("./dbconfig");


//middleware

app_server.use(cors());
app_server.use(express.json());
//app_server.use(bodyParser.urlencoded({extended:true}));
//app_server.use(bodyParser.json());


// routes
app_server.use("/products" , productRouter);


app_server.use("/users",userRouter);

app_server.use("/cart",cartRouter);

app_server.use("/payment",paymentRouter);

app_server.use("/razor" , razorRouter);

// from
/*
var instance = new Razorpay({
    key_id: 'rzp_test_f3Zt6s7fSoiZSu',
    key_secret : 'ObqLEeSpRqphtxBZI88ju0E7' ,
    });

    const Razorpay = require('razorpay');
    var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })
    
    var options = {
      amount: req.body.amount,  // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
      console.log(order);
      res.send({orderId : order.id})
    });
*/

// to


module.exports = app_server;