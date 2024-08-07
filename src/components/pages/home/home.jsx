import React, { useEffect, useState } from 'react';
import { Element, scroller, scrollSpy } from 'react-scroll';
import './home.css';
// import Slickslider from '../../comcomponents/slickslider';
import CenterMode from '../../comcomponents/slickslider';
import Subscribe from '../../comcomponents/subscribe';
import Headermain from '../../layout/header/headermain';
import Homeproductshow from './homeproductshow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import "aos/dist/aos.css";
import Hometry from './hometry';
import { Link } from 'react-router-dom';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  var settings2 = {
    slidesToShow: 1,
    speed: 1500, // Increased speed for smoother transition
    cssEase: 'ease-in-out', // Smoother easing function
    arrows: false,
    dots: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* <Headermain /> */}
      <div className='home-header'>
        <picture>
          {/* Image for medium screens */}
          <source srcSet="/assets/images/productimages/home/banner.png" media="(min-width: 600px)" />

          <img src="/assets/images/productimages/home/webside banner.webp" className='img-fluid'/>
        </picture>
        {/* <img src='/assets/images/productimages/home/banner.png' className='img-fluid' /> */}
      </div>
      {/* <Homeproductbanner /> */}
      <div className='home-product-show'>
        <h1 className='heading-text-shadow text-center py-5 mx-auto'>Crew Neck Supima</h1>
        {/* <Homeproductshow /> */}
        <div className='row secondsec-desktop'>
          <div className='col-sm-4'>
            <div className='home-productimage-div'>
              <img src='/assets/images/productimages/home/productshowone.png' />
            </div>
            <div className='home-productinfo'>
              <h2>More soft, More Comfy</h2>
              <p>A comfort that feels like home.</p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='home-productimage-div'>
              <img src='/assets/images/productimages/home/productshowtwo.png' />
            </div>
            <div className='home-productinfo'>
              <h2>Invisible Stitching</h2>
              <p>Come with fine invisible stitching to provide you with the best comfort</p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='home-productimage-div'>
              <img src='/assets/images/productimages/home/productshowthree.png' />
            </div>
            <div className='home-productinfo'>
              <h2>Durable Rib Collar</h2>
              <p>Rib Collar that never loses it's comfiness.</p>
            </div>
          </div>
        </div>

        <div className="slider-container secondsec-mobile">
          <Slider {...settings2}>
            <div>
              <div className='home-productimage-div'>
                <img src='/assets/images/productimages/home/productshowone.png' />
              </div>
              <div className='home-productinfo'>
                <h2>More Soft, More Comfy</h2>
                <p>Come with fine invisible stitching to provide you with the best comfort</p>
              </div>
            </div>
            <div>
              <div className='home-productimage-div'>
                <img src='/assets/images/productimages/home/productshowtwo.png' />
              </div>
              <div className='home-productinfo'>
                <h2>Durable Rib Collar</h2>
                <p>Come with fine invisible stitching to provide you with the best comfort</p>
              </div>
            </div>
            <div>
              <div className='home-productimage-div'>
                <img src='/assets/images/productimages/home/productshowthree.png' />
              </div>
              <div className='home-productinfo'>
                <h2>Invisible Stitching</h2>
                <p>Come with fine invisible stitching to provide you with the best comfort</p>
              </div>
            </div>
          </Slider>
        </div>

        {/* <div className='home-product-container mt-5'>
          <div class="box-container">
            <div class="box-item"
              data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="700">
              <div class="flip-box">
                <div class="flip-box-front text-center">
                  <div class="inner">
                    <img src='/assets/images/productimages/home/image3d2.png' className='img-fluid' />
                  </div>
                </div>
                <div class="flip-box-back text-center">
                  <div class="inner">
                    <h3 class="flip-box-header">Never Sleeps</h3>
                    <p>A short sentence describing this callout is.</p>
                    <button class="flip-box-button">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-item" data-aos="fade-left" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="0">
              <div class="flip-box">
                <div class="flip-box-front text-center filter-">
                  <div class="inner color-white">
                    <img src="/assets/images/productimages/home/image3d.png" alt="" class="flip-box-img imagetwo-right" />
                  </div>
                </div>
                <div class="flip-box-back text-center">
                  <div class="inner color-white">
                    <h3 class="flip-box-header">Dedicated</h3>
                    <p>A short sentence describing this callout is.</p>
                    <button class="flip-box-button">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>

      {/* <div className='home-product-banner'>
        <img src='/assets/images/productimages/home/Brown Generative 1.png' className='img-fluid' alt="Product" />
      </div> */}

      <Hometry />

      <div className='home-product-infosec'>
        <div className='row'>
          <div className='col-4'>
            <div className='animationimage-circulerthree'>
              <img src='/assets/images/productimages/home/Circle 3.png' className='img-fluid home-product-infosec-smallimagethree' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
              <div className='three' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000"></div>
            </div>
            <div className='animationimage-circuler'>
              <img src='/assets/images/productimages/home/Circle 1.png' className='img-fluid home-product-infosec-smallimageone' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
              <div className='one' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000"></div>
            </div>
          </div>
          <div className='col-4'>
            <img src='/assets/images/productimages/home/cutout image png.webp' className='img-fluid home-product-infosec-leftimage' data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="0" />
          </div>
          <div className='col-4'>
            <div className='animationimage-circulertwo'>
              <img src='/assets/images/productimages/home/Circle 2.png' className='img-fluid home-product-infosec-smallimagetwo' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
              <div className='two' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000"></div>
            </div>
          </div>
        </div>
        {/* <img src='/assets/images/productimages/home/Brown pic.png' className='img-fluid home-product-infosec-leftimage' data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="0" />
        <div className='animationimage-circuler'>
          <img src='/assets/images/productimages/home/Circle 1.png' className='img-fluid home-product-infosec-smallimageone' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
          <div className='one-text' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000">
            <p>Come with fine invisible stitching to provide you with the best comfort</p>
          </div>
          <div className='one' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000"></div>
        </div>
        <div className='animationimage-circulertwo'>
          <img src='/assets/images/productimages/home/Circle 2.png' className='img-fluid home-product-infosec-smallimagetwo' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
          <div className='two' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000"></div>
        </div>
        <div className='animationimage-circulerthree'>
          <img src='/assets/images/productimages/home/Circle 3.png' className='img-fluid home-product-infosec-smallimagethree' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000" />
          <div className='three' data-aos="zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="1000"></div>
        </div> */}
      </div>


      <div className='home-clientpost'>
        <CenterMode />
        <div className='text-center py-5'>
          {/* <Link to='/client-posts'>
            <button className='btn postyours'>Post Yours</button>
          </Link> */}
        </div>
        {/* <div className='home-about-fabric text-center'>
          <img src='/assets/images/productimages/home/tshirt.png' className='img-fluid'></img>
          <div className='text-center'>
            <button className='btn postyours'>fabric Info</button>
          </div>
          <h2 className='heading-dark py-5 m-0 text-white'>Comfort Anytime</h2>
        </div> */}
      </div>
      <div className='home-shop-know'>
        <div className='row'>
          <div className='col-6 p-0'>
            <img src='/assets/images/productimages/home/back 1.webp' />
          </div>
          <div className='col-6 p-0'>
            <img src='/assets/images/productimages/home/maroon 1.webp' />
          </div>
        </div>
        <div className='row'>
          <div className='col-6 p-0'>
            <img src='/assets/images/productimages/home/off white 1.webp' />
          </div>
          <div className='col-6 p-0'>
            <img src='/assets/images/productimages/home/green 1.webp' />
          </div>
        </div>
        <div className='shopbutton'>
          <Link to='/shop'>
            <button class="btn shopnow">Shop Now</button>
          </Link>
        </div>
      </div>


      <Subscribe />

    </>
  )
}
