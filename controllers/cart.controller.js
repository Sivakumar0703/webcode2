const cartRouter = require("express").Router();
const cartModule = require('../models/cart.model');







// fsd 3 - 02:42:00
cartRouter.post('/createCart', async (req, res, next) => {
    const {
        productId,
        userId,
        cartItems,
        //cartTotal,
        createdOn
    } = req.body;

    let total = 0;

    if (cartItems.length > 0) {
        cartItems.forEach((product) => {
            total += product.price * product.quantity;
        })
    } else {
        res.status(401).json({
            message: "cart is empty",
        });
    }

    const newCart = new cartModel({
        productId,
        userId,
        cartItems,
        cartTotal:total,
        createdOn
    })

    newCart.save()
    .then((response) => {
        if(response && response._id){
            return res.status(200).json({
                message:"cart created",
                data:response
            })
        }
    }).catch((err) => {
        return res.status(401).json({
           message:"error in cart",
           error:err 
        })
    })
})

module.exports = cartRouter;