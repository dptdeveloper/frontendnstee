import React from 'react';
import './subscribe.css';

export default function Subscribe() {
    return (
        <>
            <div className='subscribeus'>
                <h1>SIGN UP FOR DAILY DISCOUNTS AND OFFERS</h1>
                <p>Signup with your email for Daily updates about our Discounts,<br /> Sales, and Offers. Get a wide variety of coupon codes on your Mail </p>
                <input type='email' placeholder='Your Email'></input>
                <input type="button" value='Subscribe' />
            </div>
        </>
    )
}
