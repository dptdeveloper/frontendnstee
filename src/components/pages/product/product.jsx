import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './product.css'
import Carousel from 'react-bootstrap/Carousel';
import Subscribe from '../../comcomponents/subscribe';
import Headermain from '../../layout/header/headermain';
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate, useParams } from 'react-router-dom';
import { setSelectedProduct } from '../../../store/selectproductslicer';
import { addToCart, incrementQuantity, decrementQuantity } from '../../../store/cartSlice';
import GetCurrentAddress from '../../comcomponents/UserCountry';
import { Cookies, CookiesProvider, useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import CartID from '../../comcomponents/cartID';
import axios from 'axios';
import { apiurl } from '../../../urls/url';
import { fetchProducts } from '../../../store/productslice';

export default function Product() {

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [products, setproducts] = useState()
    const product = useSelector((state) => state.selectedProduct);
    const cart = useSelector((state) => state.cart || []); // Add fallback to an empty array
    const cartItem = cart.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
    const location = JSON.parse(localStorage.getItem('location'))
    const cart_id = localStorage.getItem('randomString')
    const mycookies = useCookies(['access_token'])
    const access_token = mycookies[0].access_token
    const refresh_token = mycookies[0].refresh_token
    const [cartquan, setcartquan] = useState(1)
    const [selectedcolor, setselectedcolor] = useState()
    const [selectedsize, setselectedsize] = useState()

    const handleSizeClick = (size) => {
        setselectedsize(size);
    };

    // const [formdata, setformdata] = useState({
    //     product_id: "",
    //     user_id: "",
    //     quantity: "",
    //     price: "",
    //     shipping_amount: "",
    //     country: "",
    //     size: "",
    //     color: "",
    //     cart_id: ""
    // })
    var user_id

    console.log(access_token, refresh_token, 'cookies are here')

    console.log(location, 'location data console')

    function UserData() {

        if (access_token && refresh_token) {

            const token = refresh_token;
            const decoded = jwtDecode(token);

            // Extract the user's unique identifier (user_id) from the decoded token
            user_id = decoded.user_id;

            // Return the decoded user data, which may include user information
            console.log(user_id, 'user_id, user id is here')
        } else {
            // window.alert('login is required for add to cart')
        }
    }

    UserData()

    // console.log(access_token, refresh_token, 'cookies data is here')

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                const data = await response.json();
                console.log('Fetched product data:', data); // Log the data to check its structure
                dispatch(setSelectedProduct(data));
            } catch (error) {
                console.error('Failed to fetch product', error);
            }
        };

        if (!product || product.id !== parseInt(id)) {
            fetchProduct();
        }
    }, [id, dispatch, product]);

    if (!product) {
        return <div>Loading...</div>;
    }

    // console.log(product, 'my console is here')


    // const handleAddToCart = () => {
    //     dispatch(addToCart({ ...product, quantity }));
    //   };

    //   const handleIncrement = () => {
    //     setQuantity(quantity + 1);
    //   };

    //   const handleDecrement = () => {
    //     setQuantity(Math.max(1, quantity - 1));
    //   };

    //   console.log(cart, 'cart console is here')
    //   console.log(quantity, 'quantity is cosole here')

    const handleIncrease = () => {
        setcartquan(cartquan + 1);
    };

    const handleDecrease = () => {
        if (cartquan > 1) {
            setcartquan(cartquan - 1);
        } else {
            window.alert('atleaset one product is rquired')
        }
    };

    // console.log(location.country, 'location is here')


    const getpdata = (product) => {
        console.log(product.product_color, selectedsize, 'selected color and selected size')
        if (!selectedsize) {
            toast.error('please select a color to add product into cart');
        } else {
            if (!user_id) {
                window.alert("Login for product to add cart")
                navigate('/login')
            }else {
                axios.post(`${apiurl}/cart-view/`, {
                    "product": product.id,
                    "user": user_id,
                    "qty": cartquan,
                    "price": product.price,
                    "shipping_amount": product.shipping_amount,
                    "country": location.country,
                    "size": product.product_color,
                    "color": selectedsize,
                    "cart_id": cart_id
                })
                    .then(response => {
                        console.log('product created succes fully', response.data);
                        toast.success('Added to Cart Successfully');
                    })
                    .catch(error => {
                        console.error('There was an error submitting the form:', error);
                    });
            }
        }
        // console.log(formdata)
    }

    const selectocolorhandle = async (name) => {
        console.log(name)
        axios.get(`${apiurl}/products`)
            .then((res) => {
                console.log(res.data, 'products data is here')
                setproducts(res.data); // Directly set res.data without JSON.parse
                console.log(Array.isArray(res.data));
                const filtdproduct = res.data.filter(product => product.product_color == name); // Use res.data instead of products to filter
                console.log(filtdproduct, 'filtered product is here')
                dispatch(setSelectedProduct(filtdproduct[0]));
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(selectedsize, 'selected size console')

    const style = {
        backgroundColor: product.OutdoorColor[0].color_code,
        boxShadow: `${product.OutdoorColor[0].color_code} 0px -12px 12px 5px`
    }

    var showprice = product.price * 12/100

    return (
        <>
            <GetCurrentAddress />
            <CartID />
            {/* <Headermain /> */}
            <div className='prouct-main-div'>
                <div className='productheader'>
                    <Carousel className='desktop-productheader'>
                        {
                            product.gallery?.map((value, index) => {
                                console.log(product, 'product data is here')
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={`${value.image}`} />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <Carousel className='mobile-productheader'>
                        {
                            product.mobile_images?.map((value, index) => {
                                console.log(product, 'product data is here')
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={`${value.image}`} />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <style>
                        {
                            `
                                .carousel-indicators button:nth-child(1) {
                                background-image: url(${product.gallery[0]?.image});
                                    background-position: center;
                                    background-size: cover;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                                .carousel-indicators button:nth-child(2) {
                                background-image: url(${product.gallery[1]?.image});
                                    background-position: center;
                                    background-size: cover;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                                .carousel-indicators button:nth-child(3) {
                                background-image: url(${product.gallery[2]?.image});
                                    background-position: center;
                                    background-size: cover;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                            `}
                    </style>
                    <style>
                        {
                            `
                                .mobile-productheader .carousel-indicators button:nth-child(1) {
                                background-image: url(${product.mobile_images[0]?.image});
                                    background-position: center;
                                    background-size: cover;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                                .mobile-productheader .carousel-indicators button:nth-child(2) {
                                background-image: url(${product.mobile_images[1]?.image});
                                    background-position: center;
                                    background-size: cover;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                                .mobile-productheader .carousel-indicators button:nth-child(3) {
                                background-image: url(${product.mobile_images[2]?.image});
                                    background-position: center;
                                    background-size: cover;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                            `}
                    </style>
                </div>
                <div className='product-details'>
                    <h3 className='heading'>{product.description}</h3>
                    <div className='row px-5 pt-3'>
                        <div className='col-sm-6'>
                            {/* <div className='rating'>
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <p>38 reviews</p>
                            </div> */}
                            <div className='colors mt-3'>
                                {/* <h6>color : {product.product_color}</h6> */}
                                <div className='colors-main'>
                                    {
                                        product.color?.map((value, index) => {
                                            return (
                                                <div className='colors-div' onClick={() => selectocolorhandle(value.name)} style={{ backgroundColor: `${value.color_code}` }}>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='sizes'>
                                <h6>Size</h6>
                                <div className='sizes-main mt-3 mb-4'>
                                    {
                                        product.size?.map((value, index) => {
                                            return (
                                                <div key={index} className={`sizes-div ${selectedsize == value.name ? 'selected' : ''}`} onClick={() => handleSizeClick(value.name)}>
                                                    <p>{value.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='divsizespdf'>
                                <a href='/assets/Model Size.pdf' target='_blank'>
                                    <h6>Size Guide <i class="fa-solid fa-ruler"></i></h6>
                                </a>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='product-price'>
                                <h1>₹{Math.ceil(showprice + Number(product.price))} <span className='lastprice'>₹{product.old_price}</span></h1>
                            </div>
                            <div className='product-info'>
                                <ul>
                                    <li className='instock'><i class="fa-solid fa-circle"></i>In Stock</li>
                                    <li><i class="fa-solid fa-circle"></i>Ships in 24hrs</li>
                                    <li className='ps-2'><i class="fa-solid fa-circle"></i>14 Days Return</li>
                                </ul>
                            </div>
                            {/* <div className='quantity'>
                                <h3 className='p-0'>Quantity</h3>
                                <div className='quantity-div'>
                                    <span onClick={handleDecrease} disabled={cartquan <= 1}>-</span>
                                    <input type='number' value={cartquan} />
                                    <spna onClick={handleIncrease}>+</spna>
                                </div>
                            </div> */}
                            <div className='mobileaddtocart'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <button className='add-to-cart' onClick={() => getpdata(product)} >Add to Cart</button>
                                        <ToastContainer />
                                    </div>
                                    <div className='col-6'>
                                        <button className='buy-it-now'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='outdore-images'>
                    <h2 className='text-center'>Super Comfy, Super Light </h2>
                    <div className='outdore-images-main'
                        style={style}
                    >
                        <div className='text-center'>
                            <img src={product.OutdoorImage[0].image} className='img-fluid rounded my-5 w-100 bigimage' />
                        </div>
                        <div className='row'>
                            <div className='col-sm-6 text-center pe-5'>
                                <img src={product.OutdoorImage[1].image} className='img-fluid rounded my-5 w-100' />
                            </div>
                            <div className='col-sm-6 text-center ps-5'>
                                <img src={product.OutdoorImage[2].image} className='img-fluid rounded my-5 w-100' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='forever-ocation'>
                    <div className='row'>
                        <div className='col-6 p-0'>
                            <img src='/assets/images/productimages/home/back 1.webp' className='img-fluid'/>
                        </div>
                        <div className='col-6 p-0'>
                            <img src='/assets/images/productimages/home/maroon 1.webp' className='img-fluid'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 p-0'>
                            <img src='/assets/images/productimages/home/off white 1.webp' className='img-fluid'/>
                        </div>
                        <div className='col-6 p-0'>
                            <img src='/assets/images/productimages/home/green 1.webp' className='img-fluid'/>
                        </div>
                    </div>
                </div>
                <Subscribe />
            </div>
        </>
    )
}
