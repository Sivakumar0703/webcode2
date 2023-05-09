import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
    const {productId} = useParams()

    const [loading, setLoading] = useState(true);
    const[product,setProduct] = useState();

    useEffect(() => {

      async function getData() {
        try {
          const data = (await axios.post('https://webcodetwo.onrender.com/products/getProductById',{productId : productId})).data
          setProduct(data.products)
          setLoading(false)
  
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      getData();
  
    }, [])


   
  return (
    <div>

<h1>product id :{productId}</h1>




    </div>
  )
}

export default Cart