const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    price:{
       type:Number,
       required:true
    },
    count:{
        type:Number
    },
    createdOn:{
        type:Date,
        default:Date.now()
    },
    updatedOn:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('products',productSchema);