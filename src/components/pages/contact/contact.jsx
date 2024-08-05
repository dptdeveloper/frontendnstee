import React from 'react';
import './contact.css'

export default function Contact() {
  return (
    <>
      <div className='contact-main'>
        <div className='container'>
          <div className='contactform'>
            <h1 className='text-dark'>Contact Us</h1>
            <input type='text' placeholder='Enter Your Name' />
            <input type="email" placeholder='Enter a Valid Email address' />
            <textarea placeholder='Enter Your message' />
            <button className='btn btn-dark w-100'>Submit</button>
          </div>
          <div className='contact-info'>
            <div>
            <div className='text-center'>
              <h5>Thank You for reaching out to us!</h5>
              <p>Please fill up the form and send us your query.</p>
              <p>Our team will connect with you as soon as possible.</p>
              <h6><i class="fa-solid fa-envelope"></i> Contact US</h6>
              <p><a href='mailto:support@nstee.in'> support@nstee.in </a></p>
            </div>
            <div className='social-icons-contact'>
              <div>
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div>
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* <div className='contact-googlemap'>
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=digital%20promotion%20team%20dpt%20kalkaji,%20krishna%20market+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
        </div> */}
      </div>
    </>
  )
}
