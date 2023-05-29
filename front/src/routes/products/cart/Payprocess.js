import React, { useState, useEffect }  from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import '../cart/cart.css'
import Loading from '../../../components/loading/loading'
import moment from 'moment'
import $ from "jquery";




const New = () => {
  const { productId, startDate, endDate, fromTime, toTime } = useParams()

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const fromDate = moment(startDate, 'DD-MM-YYYY')
  const toDate = moment(endDate, 'DD-MM-YYYY')

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [totalDays, setTotalDays] = useState();  // total number of days
  const [amount, setAmount] = useState(); // total amount to pay
  //let amount = Math.ceil((data?.product?.price) * (((moment.duration(toDate.diff(fromDate)).asDays()) + 1)) * (h));




  // razorpay
  const [payAmount, setPayAmount] = useState(0);
 // const [orderId, setOrderId] = useState(''); // razorpay order id from backend // line 81



  // calculation total number of hours | result - total minutes
  let initial = fromTime;
  let initialTimeParts = initial.split(":");
  let result1 = ((+initialTimeParts[0] * (60000 * 60)) + (+initialTimeParts[1] * 60000));

  let final = toTime;
  let finalTimeParts = final.split(":");
  let result2 = ((+finalTimeParts[0] * (60000 * 60)) + (+finalTimeParts[1] * 60000));

  let result = result2 - result1; // total number of hours in milliseconds
  // console.log(result/3600000) // conversion to hour

  const h = Math.floor(result / 1000 / 60 / 60); // total number of hours
  const m = Math.floor((result / 1000 / 60 / 60 - h) * 60);

  let td = (moment.duration(toDate.diff(fromDate)).asDays()) + 1 // for post method


  useEffect(() => {

    setHour(h)
    setMinute(m)

    setTotalDays((moment.duration(toDate.diff(fromDate)).asDays()) + 1) // total number of days

    async function getData() {

      try {

        const data = (await axios.post('http://localhost:8080/products/getProductById', { productId: productId })).data // user defined variable: productId(from params)
        setProduct(data.product)
        setLoading(false)
        //console.log('inside fn',data.product)

        setAmount(Math.ceil((data?.product?.price) * (((moment.duration(toDate.diff(fromDate)).asDays()) + 1)) * (h)))
        let amt = Math.ceil((data?.product?.price) * (((moment.duration(toDate.diff(fromDate)).asDays()) + 1)) * (h)) // for post method (line : 92)

        // razor - to get order id
       // getOrderId(amt, data);
        console.log('effect')

      } catch (error) {
        console.log(error)
        setLoading(false)
      }

    }
    getData();
  }, [])


  // razorpay starts

  var orderId;
$(document).ready(function(){
    var settings = {
  "url": "/create/orderId",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "amount": amount
  }),
};
$.ajax(settings).done(function (response) {

    orderId=response.orderId;
    console.log(orderId);
    $("button").show();
  });
  });
///////////////////////////////////////////////////

const handleSubmit = (e) => {
    e.preventDefault();

    if (payAmount === '') {
      alert('please enter amount');
    } else if (amount != payAmount && payAmount != '') {
      alert(`please enter the correct amount.You have to pay ${amount}`)
    } else {
      var options = {
        key: "rzp_test_f3Zt6s7fSoiZSu",
        secret: "ObqLEeSpRqphtxBZI88ju0E7",
        amount: amount * 100,
        currency: "INR",
        name: "ONLINE RENTAL",
        description: product.description,
        order_id: orderId,
        handler: function (response) {

          console.log("Payment_ID : ", response.razorpay_payment_id, '|', 'order_id : ', response.razorpay_order_id, '|', 'signature : ', response.razorpay_signature);
    

        },
        
        prefill: {
          name: JSON.parse(localStorage.getItem('user')).userName, //your customer's name
          email: JSON.parse(localStorage.getItem('user')).email,
          contact: JSON.parse(localStorage.getItem('user')).mobile
        },
        notes: {
          address: "online rental office address" // company address
        },
        theme: {
          color: "#3399cc"
        }
      };


      var pay = new window.Razorpay(options); // if payment is successful
      pay.open()
    }
  } 



  // key: rzp_test_f3Zt6s7fSoiZSu
  //secret:  ObqLEeSpRqphtxBZI88ju0E7





  // razorpay ends 

  return (

    <div>



      <h1>cart page</h1>

      {loading ? <h1><Loading /></h1> : (<div>


        <div className='row container cart-page'>

          <div className='col-md-10 img-section d-flex '>


            <div> <img src={product.image} alt={`${product.name}`} className='cart-img' /></div>

            <div className='col-md-6 cart-detail'>

              <h1>Cart Detail</h1>
              <hr />
              <h5>Name : {JSON.parse(localStorage.getItem('user')).userName} </h5>
              <h5>Product Name : {(product.name).toUpperCase()}</h5>
              <h5>From : {startDate} </h5>
              <h5>To : {endDate} </h5>

              <div className='payment-section'>

                <h1>Payment Section</h1> <hr />
                <p>Total days : {totalDays} </p>
                <p>Rent per hour : {product.price} </p>
                <p>Total hours :{hour}<span>hours</span> : {minute}<span>minutes</span> </p>
                {/*   <p>To Pay :{Math.ceil(Number(product?.price) * Number(totalDays) * Number(hour))}</p> */}
                <p>To Pay :{amount}</p>

                <div className='cart-pay-btn'> {/* <button className='btn btn-primary' onClick={getProduct}>Pay</button>
                    razorpay starts */}
                  <input type="text" placeholder='Enter Your Amount' value={payAmount} onChange={(e) => setPayAmount(e.target.value)} />
                  <br /> <br />
                  <button onClick={handleSubmit}>PAY NOW</button>
                  {/* razorpay ends */}
                </div>




              </div>



            </div>

          </div>

        </div>

      </div>)}

    </div>
  )
}

export default New