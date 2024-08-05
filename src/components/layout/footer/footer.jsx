import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <h4>Navigate</h4>
                                <ul>
                                <a href="/">
                                    <li>Home</li>
                                </a>
                                <a href="/shop">
                                    <li>Shop</li>
                                </a>
                                    {/* <li>About Us</li> */}
                                </ul>
                            </div>
                            <div className='col-sm-4'>
                                <h4>Tracking & Support</h4>
                                <ul>
                                    <a href="/terms-&-conditions">
                                        <li>Terms & Conditions</li>
                                    </a>
                                    <a href="/return-policy">
                                        <li>Return Policy</li>
                                    </a>
                                    <a href="/privacy-policy">
                                        <li>Privacy Policy</li>
                                    </a>
                                    <a href="/shppping-policy">
                                        <li>Shipping Policy</li>
                                    </a>
                                </ul>
                            </div>
                            <div className='col-sm-4'>
                                <h4>More Info</h4>
                                <ul>
                                <a href="/login">
                                    <li>Login</li>
                                </a>
                                <a href='mailto:support@nstee.in'>
                                    <li>Contact</li>
                                </a>
                                <a href='/track-order'>
                                    <li>Track Your Order</li>
                                </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <h4>Contact</h4>
                    <p><a href='mailto:support@nstee.in'> support@nstee.in </a></p>
                    <div className='footer-socila-icons'>
                        <a href='https://x.com/NSTEE_in' target='_blank'>
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href='https://www.linkedin.com/company/nstees/' target='_blank'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://www.instagram.com/nstee.in/' target='_blank'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href='https://www.facebook.com/nstee.in' target='_blank'>
                        <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
