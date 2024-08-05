import React from 'react';
import './ordertrackinfo.css';

export default function Ordertrackinfo() {
    return (
        <>
            <div className="order-track-details">
                <div className='help-div'>
                    <div className='order-track-details-main'>
                        <div className='order-track-userinfo'>
                            <h4>Order No. BZKL3442</h4>
                            <div>
                                <h6>Estimate Delivery Date: 25-05-24</h6>
                                <h6>AWB: 78599604</h6>
                            </div>
                        </div>
                        <div className="order-track-show">
                            <div className='box'>
                                <i class="fa-solid fa-check"></i>
                                <div>
                                    <h6>19-05-24</h6>
                                    <h6>Order Placed</h6>
                                </div>
                            </div>
                            <div className='box-big'>

                            </div>
                            <div className='box'>
                                <i class="fa-solid fa-check"></i>
                                <div>
                                    <h6>19-05-24</h6>
                                    <h6>Order Placed</h6>
                                </div>
                            </div>
                            <div className='box-big'>

                            </div>
                            <div className='box'>
                                <div>
                                    <h6>19-05-24</h6>
                                    <h6>Order Placed</h6>
                                </div>
                            </div>
                            <div className='box-big'>

                            </div>
                            <div className='box'>
                                <div>
                                    <h6>19-05-24</h6>
                                    <h6>Order Placed</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='join-throughmail'>
                        <h5 className='text-white'>Join Our mailing list for Cool offers & Discounts</h5>
                        <input type='email' placeholder='Your Mail' />
                        <input type='button' value='Submit' />
                    </div>
                </div>
            </div>
        </>
    )
}
