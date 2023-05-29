
const paymentRouter = require("express").Router();
const paymentModel = require("../models/payment.model");


paymentRouter.get("/",async(req,res) => {
    try {
        let payment = await paymentModel.find();
        res.status(200).json({payment,message:"all payment data are fetched"})
    } catch (error) {
        console.log(error)
        res.status(200).json({message:"not able to fetch payment data"})
    }
});



paymentRouter.post('/cartPayment',async(req,res) => {
//get from front end
  const { productName , productId , userId, userName , fromDate , toDate, totalAmount  , totalDays  , orderId } = req.body
   console.log('orderid from fron end', orderId) // undefined
try {
    // post to database
    const newCart = new paymentModel({
        productName : productName,
        productId : productId,
        userId : userId,
        userName : userName,
        fromDate : fromDate,
        toDate : toDate,
        totalAmount : totalAmount,
        totalDays : totalDays,
        orderId : orderId // orderId should be here
    })


   await newCart.save()
    res.status(200).json({newCart,message:"payment done"}) // send to front end
} catch (error) {
    console.log(error)
    res.status(500).json({message:"error occured in payment process",error})
}

})


paymentRouter.post('/getCartItem' , async(req,res) => {
    const userId = req.body.userId ;

    try {
        const item = await paymentModel.find({userId : userId})
       res.status(200).json({item})
    } catch (error) {
        res.status(500).json({message:"error occurent during fetching cart items" , error:error})
    }
})




module.exports = paymentRouter;