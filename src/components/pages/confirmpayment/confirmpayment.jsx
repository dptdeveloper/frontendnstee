import React from 'react';
import './confirmpayment.css';
import axios from 'axios';
import { apiurl } from '../../../urls/url';
import { useNavigate } from 'react-router-dom';

export default function Confirmpayment() {

  const orderid = localStorage.getItem('orderid');
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // Create order on the backend
      const response = await axios.get(`${apiurl}/razorpay-checkout/${orderid}`);
      const order = response.data;

      console.log(order, 'data response is here')

      const options = {
        key: order.key, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: 'NSTEE',
        description: 'Test Transaction',
        order_id: order.razorpay_order_id,
        handler: async function (response) {
          console.log(response, 'checkout data console is here')

          try {
            // Verify payment on the backend
            const verifyResponse = await axios.post(`${apiurl}/payment-success/`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });
            const verifyResult = verifyResponse.data;
            alert(verifyResult.message);
            navigate('/')
          } catch (error) {
            console.error('Payment verification failed', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Hello World',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error fetching checkout data', error);
      alert('Error fetching checkout data');
    }
  };

  return (
    <div className='payment-main'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-7'>
            <h2>Confirm Your Payment</h2>
            <button onClick={handlePayment}>Pay Now</button>
          </div>
          <div className='col-sm-5'>

          </div>
        </div>
      </div>
    </div>
  );
}
