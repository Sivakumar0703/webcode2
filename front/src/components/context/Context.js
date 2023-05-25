 import React ,{createContext,useState,useEffect} from 'react'
 import axios from 'axios'


  export const ProductContext = createContext();

  const MyContext = ({children}) =>  {

  const [orderId, setOrderId] = useState('context order');
 

  useEffect(() => {


    async function getOrderId(){

       try {
        await  axios.post('http://localhost:8080/razor/order').then((res) => {
            console.log('response from backend to get order id context.js', res, res.data , res.data.orderId)
  
             setOrderId(res.data.orderId)
  
          })
        
       } catch (error) {
         console.log(error , 'context error')
       }

    }
    getOrderId();
    

   }, [])



   return (
  
     <ProductContext.Provider value = {{orderId}} >
        
         {children}

     </ProductContext.Provider>

   )
 }

 export default MyContext
