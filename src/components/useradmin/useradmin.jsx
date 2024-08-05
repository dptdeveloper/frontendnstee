import React, { useState } from 'react';
import './useradmin.css';
import { Tabs, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Useradmin() {

    const [key, setKey] = useState('Orders');
    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
    }

    return (
        <>
            <div className="useradmin">
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-4 mb-3">
                            <div className='userprofile-left'>
                                <div className='userprofile p-2'>
                                    <h6>My profile</h6>
                                    <div className='userprofile-main'>
                                        <h2>Fazil Noor</h2>
                                    </div>
                                </div>
                                <Tabs
                                    id="vertical-tabs"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="flex-column"
                                >
                                    <Tab eventKey="Orders" title={<><i className="fa-solid fa-box"></i> My Orders </>}>
                                    </Tab>
                                    <Tab eventKey="address" title={<><i class="fa-solid fa-map-location"></i> My address </>}>
                                    </Tab>
                                    <Tab eventKey="Wishlist" title={<><i class="fa-solid fa-hand-holding-heart"></i> Wishlist </>}>
                                    </Tab>
                                    <Tab eventKey="profile" title={<><i class="fa-solid fa-user"></i> My profile </>}>
                                    </Tab>
                                    <Tab eventKey="Logout" onChange={logout} title={<><i class="fa-solid fa-right-from-bracket"></i> Logout </>}>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        <div className="col-sm-8 mb-4">
                            <div className='user-orderinfo-main'>
                                {key === 'Orders' && (
                                    <div className='user-orderinfo'>
                                        <h6>ALL ORDERS</h6>
                                        <table>
                                            <tr>
                                                <th>#</th>
                                                <th>Photos</th>
                                                <th>Product</th>
                                                <th>QTY</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                        </table>
                                    </div>
                                )}
                                {key === 'address' && (
                                    <div className='user-addressinfo'>
                                        <button className='btn btn-success'><i class="fa-solid fa-plus"></i> Add Address</button>
                                        <div className='user-addres-main'>
                                            <div className='user-address'>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <i class="fa-solid fa-house me-2"></i>
                                                            Default Address
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p>+91 9876543210</p>
                                                            <p>3-15/10/403 Newark, Street no 5, Next To Pizza Hut, Bangalore, Karnataka, 560003, India.</p>
                                                            <p>fazilnoor@gmail.com</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='user-editinfo'>
                                                            <button className='btn btn-edit'>
                                                                <i class="fa-solid fa-pen-to-square"></i>
                                                            </button>
                                                            <button className='btn btn-delete'>
                                                                <i class="fa-solid fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className='user-address'>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <i class="fa-solid fa-house me-2"></i>
                                                            Default Address
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p>+91 9876543210</p>
                                                            <p>3-15/10/403 Newark, Street no 5, Next To Pizza Hut, Bangalore, Karnataka, 560003, India.</p>
                                                            <p>fazilnoor@gmail.com</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='user-editinfo'>
                                                            <button className='btn btn-edit'>
                                                                <i class="fa-solid fa-pen-to-square"></i>
                                                            </button>
                                                            <button className='btn btn-delete'>
                                                                <i class="fa-solid fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {key === 'Wishlist' && (
                                    <div className='user-orderinfo'>
                                        <h6>Wishlist</h6>
                                        <table>
                                            <tr>
                                                <th>#</th>
                                                <th>Photos</th>
                                                <th>Product</th>
                                                <th>QTY</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td><img src='/assets/images/productimages/brown/square size-min.png' className='img-fluid' /></td>
                                                <td className='productdisc'>Off White 100% Supima Cotton T-Shirts with Invisible Stitching</td>
                                                <td>1</td>
                                                <td>1999</td>
                                                <td>1999</td>
                                            </tr>
                                        </table>
                                    </div>
                                )}
                                {key === 'profile' && (
                                    <div className='user-profile-main'>
                                        <h6>Edit Profile</h6>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <input type='text' placeholder='Name' />
                                            </div>
                                            <div className='col-6'>
                                                <input type='email' placeholder='E-mail' />
                                            </div>
                                        </div>
                                        <input type='number' placeholder='Phone no.' />
                                        <input type='submit' value='Submit'/>
                                    </div>
                                )}
                                {key === 'Logout' && (
                                    <div>
                                        <h1>Logout</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}