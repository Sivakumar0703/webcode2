
const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({


productName : {
    type:String,
    required:true
},

productId : {
    type:String,
    required:true
},

userId : {
    type:String,
    required:true
},

userName : {
    type:String,
    required:true
},

fromDate : {
    type:String,
    required:true
},

toDate : {
    type:String,
    required:true
},

totalDays : {
    type:String,
    required:true
},

totalAmount : {
    type:Number,
    required:true
},

transcationId : {
    type:String,
  //  required:true
},

createdOn: {
    type: Date,
    default: Date.now()
},

updatedOn: {
    type: Date,
    default: Date.now()
}
})

module.exports = mongoose.model('payments' , paymentSchema);