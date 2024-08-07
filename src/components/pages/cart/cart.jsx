import React, { useEffect, useRef, useState } from 'react';
import './cart.css';
import { Cookies, CookiesProvider, useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../../store/cartSlice';
import axios from 'axios';
import { apiurl } from '../../../urls/url';
import { Link } from 'react-router-dom';

export default function Cart(scroll) {

  const scrolled = scroll.scroll
  const [cartdata, setcartdata] = useState();
  const [total, settotal] = useState();
  const cartid = localStorage.getItem('randomString')
  const mycookies = useCookies(['access_token'])
  const [quantity, setQuantity] = useState(0);
  const userid = localStorage.getItem('token')
  let id;

  if(userid) {
    id = jwtDecode(userid)
  }
  // const userdata = jwtDecode(mycookies[0].refresh_token)
  // const userid = userdata.user_id

  console.log(scroll, 'scroll is worling')
  console.log('consile is is here', id)

  const getcartdata = async () => {
    gettotal()
    axios.get(`${apiurl}/cart-list/${cartid}`)
      .then((res) => {
        console.log(res);
        setcartdata(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const cartdelete = (cartid, itemid) => {
    console.log('cart and item id is here', cartid, itemid)
    axios.delete(`${apiurl}/cart-delete/${cartid}/${itemid}`)
      .then((res) => {
        console.log(res)
        getcartdata()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const gettotal = async () => {
    if (!userid) {
      // window.alert('login is required')
    } else {
      axios.get(`${apiurl}/cart-detail/${cartid}/${id.user_id}`)
        .then((res) => {
          console.log(res, 'cart total values are here');
          settotal(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const updatecart = (value, quantity) => {
    axios.put(`${apiurl}/update-cart-quantity/`, {
      "product_id": value.product.id,
      "qty": quantity,
      "cart_id": value.cart_id
    })
      .then((res) => {
        getcartdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleIncrease = (value) => {
  //     setQuantity(prevQuantity => prevQuantity + 1);
  //     updatecart(value)
  // };

  // // Handler to decrease the quantity
  // const handleDecrease = (value) => {
  //     setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  //     updatecart(value)
  // };


  const overlayRef = useRef(null);
  const cartRef = useRef(null);

  const handleClick = () => {
    getcartdata()
    // console.log(cartRef.current.classList)
    if (overlayRef.current.classList.contains('cart-overlay')) {
      overlayRef.current.classList.remove('cart-overlay');
      overlayRef.current.classList.add('removeoverlay');
    } else {
      overlayRef.current.classList.add('cart-overlay');
      overlayRef.current.classList.remove('removeoverlay');
    }

    if (!cartRef.current.classList.contains('hidecart')) {
      cartRef.current.classList.add('hidecart');
    } else {
      cartRef.current.classList.remove('hidecart');
    }
  };

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (cartdata) {
      const initialQuantities = cartdata.reduce((acc, item) => {
        acc[item.id] = item.qty;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [cartdata]);

  const handleDecrease = (value) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[value.id] > 1) {
        newQuantities[value.id] -= 1;
        updatecart(value, newQuantities[value.id]);
      }
      return newQuantities;
    });
  };

  const handleIncrease = (value) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[value.id] += 1;
      updatecart(value, newQuantities[value.id]);
      return newQuantities;
    });
  };

  const handleQuantityChange = (id, value) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setQuantities((prevQuantities) => {
        const newQuantities = { ...prevQuantities, [id]: parsedValue };
        const item = cartdata.find(item => item.id === id);
        if (item) {
          updatecart(item, parsedValue);
        }
        return newQuantities;
      });
    }
  };

  console.log(quantity)


  return (
    <>
      <button className='cart-button' onClick={handleClick}>
        <img src={scrolled ? '/assets/images/icons/cartone.png' : '/assets/images/icons/carttwo.png'} />
        {console.log(scrolled, 'scrolled is here')}
      </button>
      <div className='cart-main hidecart' ref={cartRef}>
        {/* <div className='row'> */}
        {/* <div className='col-5 pe-0'>
            <div className='complete-collection-main'>
              <h5 className='text-center pt-4'>Complete The Collection:</h5>
            </div>
          </div> */}
        <div className='col-12 cart-right ps-0'>
          <div className='cart-container px-3 pt-4'>
            <div className='clodseicon'>
              <i class="fa-regular fa-circle-xmark" onClick={handleClick}></i>
            </div>
            <h3 className='mb-4'>Your Cart</h3>

            {cartdata?.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cartdata?.map((value, index) =>
                (
                  <div className='row mb-3' key={index}>
                    <div className='col-sm-3 p-0 text-center'>
                      <img src={`${value.product.image}`} className='img-fluid' />
                    </div>
                    <div className='col-sm-5'>
                      <h5>{value.product.title}</h5>
                      <p>{value.product.description}</p>
                      <div className='cartdisplaymobile col-sm-3 text-star'>
                        <h4>₹ {value.total}</h4>
                      </div>
                      <div className='quantity'>
                        <span onClick={() => handleDecrease(value)}>-</span>
                        <input type='number' value={quantities[value.id] || value.qty} onChange={(e) => handleQuantityChange(value.id, parseInt(e.target.value, 10))}></input>
                        <span onClick={() => handleIncrease(value)}>+</span>
                      </div>
                    </div>
                    <div className='cartdisplaydesktop col-sm-3 text-center'>
                      <h4>₹ {value.total}</h4>
                    </div>
                    <div className='col-sm-1 text-center'>
                      <i class="fa-solid fa-trash" onClick={() => cartdelete(value.cart_id, value.id)}></i>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className='cart-last p-3'>
            <h4>Total <span>₹ {total?.total}</span></h4>
          </div>
          <div className='checkout-btn-div p-3'>
            <a href="/check-out">
              <button className='checkout-btn'>Check Out</button>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className='removeoverlay' ref={overlayRef} onClick={handleClick}>

      </div>
    </>
  )
}
