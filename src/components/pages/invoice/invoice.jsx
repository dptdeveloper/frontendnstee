import React, { useEffect } from 'react';
import './invoice.css';
import axios from 'axios';
import { apiurl } from '../../../urls/url';

export default function Invoice() {

    const orderid = localStorage.getItem('orderid')

    useEffect(() => {
        allinvoices()
    },[])

    const allinvoices = async () => {
        axios.get(`${apiurl}/customer/order/detail/16/${orderid}`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='invoice-main'>
                <div className='help-div'>
                    <div className='invoice-info'>
                        <h6>Invoice #</h6>
                        <div className='invoice-number'>
                            <h6>1</h6>
                        </div>
                        <div className='invoice-start-date'>
                            <h6>Invoice Date: 22 May 2024</h6>
                        </div>
                        <div className='invoice-end-date'>
                            <h6>Invoice Date: 22 May 2024</h6>
                        </div>
                        <div className='print-invoice'>
                            <i class="fa-solid fa-print"></i>
                        </div>
                        <div className="delete-invoice">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    <div className='info-details'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <h5>Invoice</h5>
                                <h5>From:</h5>
                                <h6>NSTEE</h6>
                                <h6>42, Second Floor, Krishna Market Kalkaji, New Delhi 110019</h6>
                                <h5>To:</h5>
                                <h6>Saksham Singh</h6>
                                <h6>RZ 4/34, New Homes Apartment, Vasant Kunj, New Delhi 110070</h6>
                                <h6>Send a copy to:</h6>
                                <div className='send-invoiceto'>
                                    <input type='email' placeholder='Your Email' />
                                    <button> Send Invoice <img src='/assets/images/icons/send.png'></img> </button>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='info-details-right'>
                                    <table>
                                        <tr>
                                            <td><span>Item Description</span></td>
                                            <td><span>Qty</span></td>
                                            <td><span>Rate</span></td>
                                            <td><spna>Amount</spna></td>
                                        </tr>
                                        <tr>
                                            <td><spna>Gentleman Gray 100% upima Cotton T-Shirts with Invisible Stitching</spna></td>
                                            <td><spna>2</spna></td>
                                            <td><span>₹1,999</span></td>
                                            <td><span>₹3,998</span></td>
                                        </tr>
                                    </table>
                                    <div className='invoice-total'>
                                        <table>
                                            <tr>
                                                <td>Sub Total <spna>₹3,998</spna></td>
                                                <td className='text-end'>GST (18%) <spna>₹719</spna></td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td className='text-end'>₹4,717</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
