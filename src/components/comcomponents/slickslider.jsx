import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clientpostcard from "./clientpostcard";
import './slickslider.css'
import AOS from 'aos';
import "aos/dist/aos.css";


function CenterMode() {

    useEffect(() => {
        AOS.init();
    }, [])

    const settings = {
        centerMode: true,
        // centerPadding: '',
        slidesToShow: 3,
        speed: 800, // Increased speed for smoother transition
        cssEase: 'ease-in-out', // Smoother easing function
        arrows: false,
        dots: false,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Speed at which slides change automatically
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px'
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <h1 class="heading-text-shadow text-center py-5 text-white">Our Customer Wall</h1>
                <div className="slider-container" data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
                <div className='one-text' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000">
                    <Slider {...settings}>
                        <div className="slickslider-div">
                            <div className='clientpost-card'>
                                <img src='/assets/images/postcard/Aman.webp' className='main-image img-fluid' />
                                <div className='clientpost-card-info'>
                                    <img src='/assets/images/postcard/Aman.webp' />
                                    <h5>Aman</h5>
                                </div>
                            </div>
                        </div>
                        <div className="slickslider-div">
                            <div className='clientpost-card'>
                                <img src='/assets/images/postcard/Anish.webp' className='main-image img-fluid' />
                                <div className='clientpost-card-info'>
                                    <img src='/assets/images/postcard/Anish.webp' />
                                    <h5>Anish</h5>
                                </div>
                            </div>
                        </div>
                        <div className="slickslider-div">
                            <div className='clientpost-card'>
                                <img src='/assets/images/postcard/sarang.webp' className='main-image img-fluid' />
                                <div className='clientpost-card-info'>
                                    <img src='/assets/images/postcard/sarang.webp' />
                                    <h5>Sarang</h5>
                                </div>
                            </div>
                        </div>
                        <div className="slickslider-div">
                            <div className='clientpost-card'>
                                <img src='/assets/images/postcard/Shoaib.webp' className='main-image img-fluid' />
                                <div className='clientpost-card-info'>
                                    <img src='/assets/images/postcard/Shoaib.webp' />
                                    <h5>Shoaib</h5>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default CenterMode;
