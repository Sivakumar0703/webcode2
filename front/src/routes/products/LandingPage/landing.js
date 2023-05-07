
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout/layout';
import axios from 'axios';

const Landing = () => {

  const[product,setProduct] = useState(5);

  useEffect( ()=>{
   
      const data =  fetch('https://webcodetwo.onrender.com/products').then((res) => res).then((result)=>result);
     
      
      console.log(data)
   
   
  },[])


  return (
    <div>


<Layout>


<p>there are ${product} products</p>


</Layout>
    </div>
  )
}

export default Landing 

