import React from 'react';
import './pagenotfound.css'
import { Link } from 'react-router-dom';

export default function Pagenotfound() {
    return (
        <>
            <div className='pagenotfound-main text-center'>
                <div className='container'>
                    <img src='/assets/images/error.png' className='img-fluid w-90 d-block mx-auto' />
                    <Link to='/'>
                        <button className='backto-home'>Back to Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
