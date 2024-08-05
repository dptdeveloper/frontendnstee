import React from 'react';
import './headermain.css';

export default function Headermain() {
  return (
    <>
    <div className='home-headermain'>
        <div className='logo'>
            <img src='/assets/images/logos/logowhite.png' className='img-fluid' />
        </div>
        <div className='home-header-menu'>
            <ul>
                <li><a Link to=""> Home </a></li>
                <li><a Link to=""> Shop </a></li>
                <li><a Link to=""> Cart </a></li>
                <li><a Link to=""> Our Story </a></li>
                <li><a Link to=""> Customer Wall </a></li>
                <li><a Link to=""> Login </a></li>
            </ul>
        </div>
        <div className='home-header-toggle'>
        <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    </>
  )
}
