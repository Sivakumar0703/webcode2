import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/admin navbar/Navbar'
import Layout from '../../components/layout/layout'

const Adminproduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {

        async function getData() {
            try {
                const data = (await axios.get('http://localhost:8080/products')).data

                console.log(data.products[1].name)
                setProduct(data.products)
                

            } catch (error) {
                console.log(error)
                
            }
        }
        getData();

    }, [])







    return (
        <div> <Layout>
            <h1>PRODUCTS</h1>

         <Navbar />

            {product?.map((data) => {

                return (
                    <div className="card bs product-con today " key={data._id}>
                    <img src={data.image} className="card-img-top card-img" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      </div>
                      </div>

)
            }
            )}



</Layout> </div>
    )
}

export default Adminproduct