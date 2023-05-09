import React, { useState, useEffect } from 'react'
import '../home/homePage.css'
import Layout from '../../../components/layout/layout'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//today
import axios from 'axios';




const HomePage = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //today

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getData() {
      try {
        const data = (await axios.get('https://webcodetwo.onrender.com/products')).data

        // console.log(data.products[1].name)
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

    <Layout>


      <h1>homepage </h1>
      {/* today */}
      {loading ? <h1>loading</h1> : (product.map((data) => {

        return (

          <div className="card bs product-con today " key={data._id}>
            <img src={data.image} className="card-img-top card-img" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <Link to={`/cart/${data._id}`}><button className="btn btn-primary cart-btn "><AddShoppingCartIcon /></button></Link>
              <button className="btn btn-primary cart-btn " onClick={handleShow} ><VisibilityIcon /></button>


              <Modal show={show} onHide={handleClose} className='modal'>
                <Modal.Header >
                  <Modal.Title>{data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={data.image} className='modal-img' alt='product img' /></Modal.Body>
                <Modal.Body><b><p>DESCRIPTION</p></b>{data.description}</Modal.Body>
                <Modal.Body><b><p>PRICE/hr</p></b><span>₹</span>{data.price}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>

                </Modal.Footer>
              </Modal>
            </div>

          </div>)

      }))}


    </Layout>
  )
}

export default HomePage