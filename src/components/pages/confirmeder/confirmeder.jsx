import React from 'react';
import './confirmeder.css';

export default function Confirmeder() {
    return (
        <>
            <div className='confirmeorder-main'>
                <div className='row help-div'>
                    <div className='col-sm-8'>
                        <div className='confirmeorder-product-info'>
                            <h3 className='text-center mb-3'>Thank Your for your purchase!</h3>
                            <h4> <span>Order Number: AZKHL567</span> <span>Date: 23-05-24</span> </h4>
                            <h5>Order Details:</h5>
                            <table>
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>Size</td>
                                    <td>Quantity</td>
                                    <td>Amount</td>
                                </tr>
                                <tr>
                                    <td>Gentleman Gray 100% <span> Supima Cotton T-Shirts with Invisible Stitching </span></td>
                                    <td>XL</td>
                                    <td>2 Units</td>
                                    <td>₹4,717</td>
                                </tr>
                            </table>
                            <div className='confirm-userinfo'>
                                <h6>User Details:</h6>
                                <h6>Name: <span> Saksham Singh </span></h6>
                                <h6>Phone No: <span>87965 85498 Saksham Singh</span></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='confirmation-billing-address mb-4'>
                            <h5>Billing Address:</h5>
                            <h6>Saksham Singh</h6>
                            <h6>RZ 4/34, New Homes Apartment, Vasant Kunj, New Delhi 110070</h6>
                        </div>
                        <div className='confirmation-shipping-address mt-4'>
                            <h5>Billing Address:</h5>
                            <h6>Saksham Singh</h6>
                            <h6>RZ 4/34, New Homes Apartment, Vasant Kunj, New Delhi 110070</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
