
// import React, { useState, useEffect, useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import '../cart/cart.css'
// import Loading from '../../../components/loading/loading'
// import moment from 'moment'
// import { ProductContext } from '../../../components/context/Context'



// const Cart = () => {
//   const { productId, startDate, endDate, fromTime, toTime } = useParams()

//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState();
//   // console.log(product)
//   const fromDate = moment(startDate, 'DD-MM-YYYY')
//   const toDate = moment(endDate, 'DD-MM-YYYY')

//   const [hour, setHour] = useState();
//   const [minute, setMinute] = useState();
//   const [totalDays, setTotalDays] = useState();  // total number of days
//   const [amount, setAmount] = useState(); // total amount to pay

//   // razorpay
//   const [payAmount, setPayAmount] = useState(0);
//   const [orderId, setOrderId] = useState(); // razorpay order id from backend // line 81
//   //const {contextOrderId} = useContext(ProductContext)



//   //  function priceCalc(){
//   //    var cost = pice/((h*60)/60)
//   //  }

//   useEffect(() => {

//    // calculation total number of hours | result - total minutes
//    let initial = fromTime;
//    let initialTimeParts = initial.split(":");
//    let result1 = ((+initialTimeParts[0] * (60000 * 60)) + (+initialTimeParts[1] * 60000));

//    let final = toTime;
//    let finalTimeParts = final.split(":");
//    let result2 = ((+finalTimeParts[0] * (60000 * 60)) + (+finalTimeParts[1] * 60000));

//    let result = result2 - result1; // total number of hours in milliseconds
//    // console.log(result/3600000) // conversion to hour

//    const h = Math.floor(result / 1000 / 60 / 60); // total number of hours
//    const m = Math.floor((result / 1000 / 60 / 60 - h) * 60);

//    setHour(h)
//    setMinute(m)


//    setTotalDays((moment.duration(toDate.diff(fromDate)).asDays()) + 1) // total number of days
//    let td = (moment.duration(toDate.diff(fromDate)).asDays()) + 1 // for post method





//     async function getData() {

//       try {

//         const data = (await axios.post('http://localhost:8080/products/getProductById', { productId: productId })).data // user defined variable: productId(from params)
//         setProduct(data.product)
//         setLoading(false)
//         //console.log('inside fn',data.product)

//         setAmount(Math.ceil((data?.product?.price) * (((moment.duration(toDate.diff(fromDate)).asDays()) + 1)) * (h)))
//         let amt = Math.ceil((data?.product?.price) * (((moment.duration(toDate.diff(fromDate)).asDays()) + 1)) * (h)) // for post method (line : 92)


       

//         // razor - to get order id
//     /*    await axios.post('http://localhost:8080/razor/order' , {amount:amt}).then((res) => {
//           console.log('response from backend to get order id', res, res.data , res.data.orderId)

//            setOrderId(res.data.orderId)

//         })  */

//         getOrderId(amt);

//         //console.log('total days',totalDays)


//           await axios.post('http://localhost:8080/payment/cartPayment', { // product & user detail to backend  
//           productName: data.product.name,
//           productId: data.product._id,
//           userId: JSON.parse(localStorage.getItem('user'))._id,
//           userName: JSON.parse(localStorage.getItem('user')).userName,
//           fromDate: startDate,
//           toDate: endDate,
//           totalAmount: amt,
//           totalDays: td,
//           transactionId: contextOrderId,//orderId,  // undefined
//          // transactionId:'0000000000'
//         }).then((res) => console.log('data to back end', res))  // res.data.orderId
      

//       } catch (error) {
//         console.log(error)
//         setLoading(false)
//       }

     
//     }
//     getData();



//   }, [])


//   async function getOrderId(amt){
//     try {
//       await  axios.post('http://localhost:8080/razor/order', {amount:amt}).then((res) => {
//           console.log('response from backend to get order id', res, res.data , res.data.orderId)

//            setOrderId(res.data.orderId)

//         })
      
//      } catch (error) {
//        console.log(error , 'get order id function error in cart.js')
//      }
     
//   }




//   // razorpay starts



//   // key: rzp_test_f3Zt6s7fSoiZSu
//   //secret:  ObqLEeSpRqphtxBZI88ju0E7



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (payAmount === '') {
//       alert('please enter amount');
//     } else if (amount != payAmount && payAmount != '') {
//       alert(`please enter the correct amount.You have to pay ${amount}`)
//     } else {
//       var options = {
//         key: "rzp_test_f3Zt6s7fSoiZSu",
//         secret: "ObqLEeSpRqphtxBZI88ju0E7",
//         amount: amount * 100, // amount is in paise so we multiple it with 100 | amount from backend
//         currency: "INR",
//         name: "ONLINE RENTAL", // rental company name
//         description: product.description, // product name 
//         order_id: contextOrderId,//orderId, // order id from backend 
//         handler: function (response) { // response contain Payment_ID
//           // console.log(response);
//           //  alert("Payment_ID :", response.razorpay_payment_id);
//           console.log("Payment_ID : ", response.razorpay_payment_id, '|', 'order_id : ', response.razorpay_order_id, '|', 'signature : ', response.razorpay_signature) // we are not getting the order id so we get underfined for order id and signature
//           //  alert('order_id',response.razorpay_order_id); // is from razorpay | for backend we use cart id | this order id is different one not the one is generated by backend
//           //  alert('signature',response.razorpay_signature)
//         },
//         prefill: {
//           name: JSON.parse(localStorage.getItem('user')).userName, //your customer's name
//           email: JSON.parse(localStorage.getItem('user')).email,
//           contact: JSON.parse(localStorage.getItem('user')).mobile
//         },
//         notes: {
//           address: "online rental office address" // company address
//         },
//         theme: {
//           color: "#3399cc"
//         }
//       };

//       var pay = new window.Razorpay(options); // if payment is successful
//       pay.open()
//     }
//   }









//   // razorpay ends 






// /*
//   // payment process
//   async function getProduct() {
//     // data to be sent for backend
    
//     const cartDetail = {
//       productName: product.name,
//       productId: productId,
//       userId: JSON.parse(localStorage.getItem('user'))._id,
//       fromDate: startDate,
//       toDate: endDate,
//       totalDays: totalDays,
//       totalAmount: amount,
//       transcationId: '4567'
//     }

//     try {
//       const payment = await axios.post('http://localhost:8080/payment/cartPayment', cartDetail)
//     } catch (error) {
//       console.log(error)
//     }

//   }
// */




//   return (

//     <div>



//       <h1>cart page</h1>

//       {loading ? <h1><Loading /></h1> : (<div>


//         <div className='row container cart-page'>

//           <div className='col-md-10 img-section d-flex '>


//             <div> <img src={product.image} alt={`${product.name}`} className='cart-img' /></div>

//             <div className='col-md-6 cart-detail'>

//               <h1>Cart Detail</h1>
//               <hr />
//               <h5>Name : {JSON.parse(localStorage.getItem('user')).userName} </h5>
//               <h5>Product Name : {(product.name).toUpperCase()}</h5>
//               <h5>From : {startDate} </h5>
//               <h5>To : {endDate} </h5>

//               <div className='payment-section'>

//                 <h1>Payment Section</h1> <hr />
//                 <p>Total days : {totalDays} </p>
//                 <p>Rent per hour : {product.price} </p>
//                 <p>Total hours :{hour}<span>hours</span> : {minute}<span>minutes</span> </p>
//                 {/*   <p>To Pay :{Math.ceil(Number(product?.price) * Number(totalDays) * Number(hour))}</p> */}
//                 <p>To Pay :{amount}</p>

//                 <div className='cart-pay-btn'> {/* <button className='btn btn-primary' onClick={getProduct}>Pay</button>
//                     razorpay starts */}
//                   <input type="text" placeholder='Enter Your Amount' value={payAmount} onChange={(e) => setPayAmount(e.target.value)} />
//                   <br /> <br />
//                   <button onClick={handleSubmit}>PAY NOW</button>
//                   {/* razorpay ends */}
//                 </div>




//               </div>



//             </div>

//           </div>

//         </div>

//       </div>)}

//     </div>
//   )
// }

// export default Cart

