const productRouter = require("express").Router();
const productModel = require("../models/products.model");

/*

get all product
add new product
get product by id

*/

//get

productRouter.get("/allProducts", (req, res, next) => {
    res.status(200).json({ msg: "product data fetched"})
});


// post => add new product

productRouter.post("/addProducts", (req, res, next) => {

    const { name, type, price, count } = req.body;

    const newProduct = new productModel({

        name: name,
        type: type,
        price: price,
        count: count

    });

    newProduct.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"product added successfully",
                    data : response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding product"
            })
        })

  //  console.log("request body :",req.body);
 
});



module.exports = productRouter;