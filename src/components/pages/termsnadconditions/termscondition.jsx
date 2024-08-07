import React from 'react';
import './termscondition.css';
import { Link } from 'react-router-dom';

export default function Termscondition() {
    return (
        <>
            <div className='termscondition-main'>
                <div className='container'>
                    <div className='termscondition'>
                        <h2>Terms and Conditions</h2>
                        <p>Welcome to NSTEE! These Terms and Conditions outline the rules and
                            regulations for the use of our website and services. By accessing or using our
                            website, you agree to comply with and be bound by these Terms. If you do not
                            agree with any part of these Terms, please refrain from using our website.</p>
                        <h3>1. Definitions</h3>
                        <p>"Website" refers to NSTEE's official website accessible at <Link to="/"> https://nstee.in. </Link></p>
                        <p>&quot;User,&quot; &quot;You,&quot; and &quot;Your&quot; refer to any person accessing or using the website.</p>
                        <p>&quot;We,&quot; &quot;us,&quot; &quot;our,&quot; and &quot;NSTEE &quot; refer to the company operating the website.</p>
                        <h3>2. Use of Website</h3>
                        <ol>
                            <li>You must be at least 18 years old to use this website. By using this website, you confirm that you are at least 18 years of age.</li>
                            <li>You agree to provide accurate, current, and complete information during registration or when making a purchase.</li>
                            <li>You agree not to use this website for any unlawful purpose or in a way that may impair its functionality.</li>
                            <li>We reserve the right to suspend or terminate your access to the website at our sole discretion, without prior notice.</li>
                        </ol>
                        <h3>3. Intellectual Property</h3>
                        <ol>
                            <li>The content and materials on this website, including but not limited to text, images, logos, trademarks, and graphics, are the property of NSTEE and are protected by intellectual property laws.</li>
                            <li>You may not reproduce, distribute, modify, or otherwise use any content from this website without our prior written consent.</li>
                        </ol>
                        <h3>4. Product Information and Pricing</h3>
                        <ol>
                            <li>We strive to provide accurate product information, including descriptions, images, and prices. However, we do not warrant the accuracy, completeness, or reliability of such information.</li>
                            <li>Product prices are subject to change without notice. All prices are listed in Rupee and are inclusive of applicable taxes.</li>
                        </ol>
                        <h3>5. Orders and Payments</h3>
                        <ol>
                            <li>Placing an order constitutes an offer to purchase our products. All orders are subject to acceptance by us.</li>
                            <li>We accept payments through Cash On Delivery, PayTm,Razor Pay, UPI, Credit Cards and Debit Cards. You agree to provide accurate payment information and authorize the payment for your order.</li>
                            <li>Orders may be subject to verification and review for security purposes. We reserve the right to refuse, cancel, or limit any order at our discretion.</li>
                        </ol>
                        <h3>6. Shipping and Returns</h3>
                        <ol>
                            <li>Shipping times and costs may vary based on your location and the shipping method you choose during checkout.</li>
                            <li>For information on our return and exchange policy, please refer to our separate Returns and Exchanges policy.</li>
                        </ol>
                        <h3>7. Privacy</h3>
                        <p>Your privacy is important to us. We collect and process your personal information in accordance with our Privacy Policy.</p>
                        <h3>8. Limitation of Liability</h3>
                        <ol>
                            <li>To the fullest extent permitted by law, NSTEE shall not be liable for any indirect, consequential, incidental, punitive, or special damages arising from your use of this website or products purchased from it.</li>
                            <li>Our total liability for any claim related to our products or services shall not exceed the amount paid by you for the product or service in question.</li>
                        </ol>
                        <h3>9. Governing Law</h3>
                        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
                        <h3>10. Changes to Terms and Conditions</h3>
                        <ol>
                            <li>We reserve the right to modify or update these Terms and Conditions at any time. Changes will be effective upon posting to the website. It is your responsibility to review these Terms periodically.</li>
                        </ol>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}
