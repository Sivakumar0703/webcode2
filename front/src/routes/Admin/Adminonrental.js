
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Navbar from '../../components/admin navbar/Navbar';
import Layout from '../../components/layout/layout';
import axios from 'axios';

const Adminonrental = () => {

const[data , setData] = useState();




    useEffect(() => {

        async function getpayment() {
            try {
                const paymentData = await axios.get("http://localhost:8080/payment").then((res) => res.data.payment)
                setData(paymentData);
              
            } catch (error) {
                console.log(error, 'error in getting all payments data')
            }

        }
        getpayment();

    }, [])


    return (
        <div> <Layout>
            <Navbar />

            <Table striped>
                <thead>
                    <tr>
                        <th>SI.NO</th>
                        <th>User Name</th>
                        <th>Product Name</th>
                        <th>Order ID</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount Paid</th>
                    </tr>
                </thead>
                <tbody>{ data && data.map((item , index) => {
                    return(
                        <tr key={item.orderId}>
                        <td> {index + 1}</td>
                        <td>{item.userName}</td>
                        <td>{item.productName}</td>
                        <td>{item.orderId}</td>
                        <td>{item.fromDate}</td>
                        <td>{item.toDate}</td>
                        <td>{item.totalAmount}</td>
                    </tr>
                    )
                })}
                   
                   
                </tbody>
            </Table>

        </Layout>  </div>
    )
}

export default Adminonrental