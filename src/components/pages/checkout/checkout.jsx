import React, { useEffect, useState } from 'react';
import './checkout.css';
import axios from 'axios';
import { apiurl } from '../../../urls/url';
import { Cookies, CookiesProvider, useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Checkout() {

    const navigate = useNavigate()
    const [cartdata, setcartdata] = useState();
    const [carttotaldata, setcarttotaldata] = useState();
    const [coupon, setcoupon] = useState();
    const [checksameadd, setchecksameadd] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: 'India',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phoneNo: '',
        email: '',
    });
    // const [shippingaddress, setshippingaddress] = useState({
    //     firstName: '',
    //     lastName: '',
    //     country: 'India',
    //     address: '',
    //     city: '',
    //     state: '',
    //     pincode: '',
    //     phoneNo: '',
    //     email: '',
    // });


    const cartid = localStorage.getItem('randomString')
    const mycookies = useCookies(['access_token'])
    const userdata = jwtDecode(mycookies[0].refresh_token)
    const userid = userdata.user_id

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleBillingChange = (e) => {
    //     const { name, value } = e.target;
    //     setshippingaddress((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form Data:', formData);
    // };

    const handleCheckboxChange = (event) => {
        setchecksameadd(event.target.checked);
        console.log(checksameadd);
    };

    useEffect(() => {
        getcartdetails();
        carttotal()
    }, [])

    console.log(cartid, 'cart id checkout')

    const getcartdetails = async () => {
        axios.get(`${apiurl}/cart-list/${cartid}`)
            .then((res) => {
                console.log(res)
                setcartdata(res.data)
                carttotal()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const carttotal = () => {
        axios.get(`${apiurl}/cart-detail/${cartid}/${userid}`)
            .then((res) => {
                console.log(res)
                setcarttotaldata(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const applycoupon = async () => {
        console.log(carttotaldata, 'cart total in coupon')
        axios.post(`${apiurl}/coupon/`, {
            "sub_total": carttotaldata.sub_total,
            "shipping_amount": carttotaldata.shipping,
            "tax_fee": carttotaldata.tax,
            "service_fee": carttotaldata.service_fee,
            "total": carttotaldata.total,
            "coupons": coupon,
            "order_oid": 'iVKrTNpuOWIgbKX2wBrYvv63SDuZZF'
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                toast.error("Coupon is not valid")
            })
            setcoupon('')
    }

    const checkout = () => {
        axios.post(`${apiurl}/create-order/`, {
            "full_name": formData.firstName + formData.lastName,
            "email": formData.email,
            "mobile": formData.phoneNo,
            "billing_address": formData.address,
            "billing_city": formData.city,
            "billing_state": formData.state,
            "billing_country": formData.country,
            "shipping_address": '',
            "shipping_city": '',
            "shipping_state": '',
            "shipping_country": '',
            "cart_id": cartid,
            "user_id": '16'
        })
            .then((res) => {
                console.log(res)
                localStorage.setItem('orderid', res.data.order_oid)
                setFormData(
                    {
                        firstName: '',
                        lastName: '',
                        country: 'India',
                        address: '',
                        city: '',
                        state: '',
                        pincode: '',
                        phoneNo: '',
                        email: '',
                    }
                )
                navigate('/confirm-your-payment')
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
                getcartdetails()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const updatecart = (value, quantity) => {
        axios.put(`${apiurl}/update-cart-quantity/`, {
            "product_id": value.product.id,
            "qty": quantity,
            "cart_id": value.cart_id
        })
            .then((res) => {
                getcartdetails();
            })
            .catch((err) => {
                console.log(err);
            });
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

    // console.log(formData, 'form data console')
    // console.log(carttotaldata, 'cart total data')
    console.log(coupon, 'coupon data is here')


    return (
        <>
            <div className='checkout-main'>
                <h4 className='heading-dark text-center text-white mt-3 mb-5'>CheckOut <img src='/assets/images/icons/Cart2.png' className='img-fluid heading-icon' alt='checkout-icon'/></h4>
                <div className='row'>
                    <div className='checkout-form col-sm-7 px-5'>
                        <h4 className='text-white'>Billing Address</h4>
                        <div className='row'>
                            <div className='col-6'>
                                <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange}></input>
                            </div>
                            <div className='col-6'>
                                <input type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange}></input>
                            </div>
                        </div>
                        <select name='country' value={formData.country} onChange={handleChange}>
                            <option value="United States">United States</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo">Congo, the Democratic Republic of the</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia (Hrvatska)</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="France Metropolitan">France, Metropolitan</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                            <option value="Holy See">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India" selected>India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran (Islamic Republic of)</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">Micronesia, Federated States of</option>
                            <option value="Moldova">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint LUCIA</option>
                            <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia (Slovak Republic)</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                            <option value="Span">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="St. Helena">St. Helena</option>
                            <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan, Province of China</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Viet Nam</option>
                            <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                            <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                            <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        <input type='text' placeholder='Address' name='address' value={formData.address} onChange={handleChange} />
                        <div className='row'>
                            <div className='col-4'>
                                <input type='text' placeholder='City' name='city' value={formData.city} onChange={handleChange} />
                            </div>
                            <div className='col-4'>
                                <input type='text' placeholder='State' name='state' value={formData.state} onChange={handleChange} />
                            </div>
                            <div className='col-4'>
                                <input type='text' placeholder='Pincode' name='pincode' value={formData.pincode} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <input type='text' placeholder='Phone No *' name='phoneNo' value={formData.phoneNo} onChange={handleChange} />
                            </div>
                            <div className='col-6'>
                                <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <h4 className='text-white'>Shipping <img src='/assets/images/icons/truck.png' className='img-fluid heading-icon' /> :</h4>
                        <div className='shipping-type'>
                            <div className='standard'>
                                <input type='radio' name='shippingvalue'></input>
                                <label for="standard shipping">Fast shipping</label>
                            </div>
                            <div className='fast'>
                                <input type='radio' name='shippingvalue'></input>
                                <label for="Fast shipping">COD (Cash On Delivery)</label>
                            </div>
                            <input type='button' className='checkout' value='Confirm Order' onClick={checkout} />
                        </div>
                        {/* <div className='billing-checkdiv'>
                            <input type='checkbox' checked={checksameadd} onChange={handleCheckboxChange} />
                            <label for="blling">Billing Address is Same as Shipping Address</label>
                        </div> */}
                        {/* <div className='shipping-info'>
                            <h4>Shipping Address</h4>
                            <div className='row'>
                                <div className='col-6'>
                                    <input type='text' placeholder='First Name'></input>
                                </div>
                                <div className='col-6'>
                                    <input type='text' placeholder='Last Name'></input>
                                </div>
                            </div>
                            <select>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="GA">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="GA">Goa</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>
                            </select>
                            <input type='text' placeholder='Address' />
                            <div className='row'>
                                <div className='col-4'>
                                    <input type='text' placeholder='City' />
                                </div>
                                <div className='col-4'>
                                    <input type='text' placeholder='State' />
                                </div>
                                <div className='col-4'>
                                    <input type='text' placeholder='Pincode' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <input type='text' placeholder='Phone No *' />
                                </div>
                                <div className='col-6'>
                                    <input type='text' placeholder='Email' />
                                </div>
                                <input type='button' value='submit' onClick={handleSubmit} />
                            </div>
                        </div> */}
                    </div>
                    <div className='col-sm-5 px-5'>
                        <div className='order-info'>
                            <h5>Your Selection:</h5>

                            {
                                cartdata?.map((value, index) => {
                                    return (
                                        <div className='orderinfo-main' key={index}>
                                            <div className='order-info-image'>
                                                <img src={value.product.image} className='img-fluid' />
                                            </div>
                                            <div className='orderinfo-detail'>
                                                <div className='text-end'>
                                                    <i class="fa-solid fa-trash" onClick={() => cartdelete(value.cart_id, value.id)}></i>
                                                </div>
                                                <p>{value.product.description}</p>
                                                <div className='quantity'>
                                                    <span onClick={() => handleDecrease(value)}>-</span>
                                                    <input type='number' value={quantities[value.id] || value.qty} onChange={(e) => handleQuantityChange(value.id, parseInt(e.target.value, 10))}></input>
                                                    <span onClick={() => handleIncrease(value)}>+</span>
                                                </div>
                                                <h6>Quantity : <span>{value.qty}</span></h6>
                                                <h6>Size : <span>{value.size}</span></h6>
                                                <div className="order-info-price">
                                                    <h6>Total: </h6> <h6>₹7,996/-</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* <div className='have-coupon'>
                                <h5 className='my-3'>Have a Discount Coupon?</h5>
                                <div className='maincoupondiv'>
                                    <input type='text' value={coupon} onChange={(e) => setcoupon(e.target.value)} placeholder='Add Discount Coupon' />
                                    <input type='button' value='Add Coupon' onClick={applycoupon} />
                                    <ToastContainer />
                                </div>
                            </div> */}

                        </div>
                        <div className='carttotal-price'>
                            <div>
                                <h5>Sub Total:</h5> <h5>₹ {carttotaldata?.sub_total}/-</h5>
                            </div>
                            <div>
                                <h6>Shipping</h6> <h6>₹ {carttotaldata?.shipping}/-</h6>
                            </div>
                            <div>
                                <h6>Discount Applied</h6> <h6> ₹ 1,199/-</h6>
                            </div>
                            <div className='carttotal'>
                                <h5>Total:</h5> <h5>₹ {carttotaldata?.total}/-</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
