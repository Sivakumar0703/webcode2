import axios from 'axios';
import React, { useEffect, useState } from 'react'




export  function Mycart(){
  const [cart , setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect( ()=> {
    async function cart(){
      try {
         const cart = await axios.post('http://localhost:8080/payment/getCartItem' , {userId : user._id})
         console.log('user cart items',cart.data.item)
         setCart(cart.data.item)
       } catch (error) {
         console.log(error , 'from profile.js')
       }
    }
    cart();

  },[])

  return(

    <>
    {cart.map(item => {
       return (
        <div key={item._id} className='bs mr-2 p-2'> 
        <h1>{(item.productName).toUpperCase()}</h1>
        <p>Order ID : {item._id}</p>
        <p><span>From : {item.fromDate}</span> <span>To : {item.toDate}</span></p>
        <p>Total Days : {item.totalDays}</p>
        <p>Amount Paid : {item.totalAmount}</p>
          </div>
      )
    })}
     
    
    
    </>




  )

}

const Profile = () => {



  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)

 

    return (
        <div>

         <div className='profile'>
          <h1>ACCOUNT DETAILS</h1>
          <p>USER NAME : {user.userName}</p>
          <p>EMAIL : {user.email}</p>
          <p>MOBILE : {user.mobile}</p> <br /> <br /> <hr/>

         </div>


         <div className='cartDetails'>
            <h1>RENTAL PRODUCTS DETAILS</h1>
            <Mycart />
         </div>

         
         
        


        </div>
    )
}

export default Profile