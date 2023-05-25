
//const express = require('express');
const Razorpay = require('razorpay');
const razorRouter = require("express").Router();

var razorpay = new Razorpay({
    key_id: 'rzp_test_f3Zt6s7fSoiZSu',
    key_secret : 'ObqLEeSpRqphtxBZI88ju0E7' ,
    });

    // creating an order

    razorRouter.post('/order' , (req,res)=>{
        let {amount} = req.body
        console.log('request' , req.body)
        var options = {
            amount: amount * 100,// 500 * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
          };

          razorpay.orders.create(options, function(err, order) { // for every transaction a new order id is generated
            console.log('newly generated order id from backend razorpay.js',order,err);
            res.send({orderId : order.id})
          });
    })

    module.exports = razorRouter

   
      