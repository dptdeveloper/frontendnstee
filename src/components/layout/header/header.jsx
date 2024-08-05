import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Cart from '../../pages/cart/cart';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let headerClasses = ['navbar', 'navbar-expand-lg', 'fixed-top'];
    if (scrolled) {
        headerClasses.push('scrolled');
    }

    const headerRef = useRef(null);
    const headeroverlayRef = useRef(null)

    const hidemenu = () => {
        // console.log(headeroverlayRef.current.classList)
        // if(headeroverlayRef.current.classList.contains('header-overlay')) {
        //     headeroverlayRef.current.classList.remove('header-overlay')
        //     headeroverlayRef.current.classList.add('header-overlay-hide')
        // }else {
        //     headeroverlayRef.current.classList.add('header-overlay')
        //     headeroverlayRef.current.classList.remove('header-overlay-hide')
        // }

        if(headerRef.current.classList.contains('sidemenu-header-hide')) {
            headerRef.current.classList.remove('sidemenu-header-hide')
        }else{
            headerRef.current.classList.add('sidemenu-header-hide')
        }

        if(headeroverlayRef.current.classList.contains('header-overlay-hide')) {
            headeroverlayRef.current.classList.remove('header-overlay-hide')
        }else{
            headeroverlayRef.current.classList.add('header-overlay-hide')
        }
    }
    

    return (
        <>
            <nav className={headerClasses.join(' ')}>
                <div className='div d-flex'>
                    <div onClick={hidemenu} className={scrolled ? 'text-dark empty' : 'text-white empty'}>
                        <i class="fa-solid fa-bars" ></i>
                    </div>
                    <a className={scrolled ? 'text-dark text-decoration-none': 'text-white text-decoration-none'}  href="/shop">
                        Shop
                    </a>
                </div>
                <div className="headerlogo-div">
                    <a href='/'>
                        <img src={scrolled ? '/assets/images/logos/logoblack.png' : '/assets/images/logos/logowhite.png'} alt="Logo" className="logo" />
                    </a>
                </div>
                <div className='headercart-div'>
                    <Cart scroll={scrolled} />
                </div>
                <div className='sidemenu-header sidemenu-header-hide' ref={headerRef}>
                    <div className='text-start'>
                    <i class="fa-solid fa-xmark" onClick={hidemenu}></i>
                    </div>
                    <ul>
                            <li>
                                <a href='/'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='/shop'>Shop</a>
                            </li>
                            <li>
                                <a href='/login'>Login</a>
                            </li>
                            <li>
                                <a href='/track-order'>Track Your Order</a>
                            </li>
                    </ul>
                </div>
                <div className='header-overlay header-overlay-hide' onClick={hidemenu} ref={headeroverlayRef}>

                </div>
            </nav>
        </>
    )
}
