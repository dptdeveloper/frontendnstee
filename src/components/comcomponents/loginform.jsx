import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registerform.css';
import axios from 'axios';
import { apiurl } from '../../urls/url';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

export default function Loginform() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [check, setcheck] = useState(false)
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])

    const checkHandler = () => {
        setcheck(!check)
    }

    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
      };

    const [forvalues, setforvalues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setforvalues({
            ...forvalues,
            [name]: value,
        });
    };

    const login = async () => {
        console.log('data call is here', forvalues)
            axios.post(`${apiurl}/user/token/`, forvalues)
                .then((res) => {
                    console.log(res);
                    setCookie('access_token', res.data.access, { path: '/' }, { expires: 1 })
                    setCookie('refresh_token', res.data.refresh, { path: '/' }, { expires: 1 })
                    localStorage.setItem('token', JSON.stringify(res.data.access))
                    // toast.success('Logedin Successfully');
                    setforvalues(
                        {
                            email: "",
                            password: "",
                        })
                        navigate("/")

                    setcheck(false)
                    // setTimeout(() => {
                    //     navigate("/")
                    // }, 2000);
                    // setTimeout(navigate("/"), 3000)
                })
                .catch((err) => {
                    console.log(err.response.data);
                    if (err.response.data.detail) {
                        toast.error(err.response.data.detail)
                    }
                    else if (err.response.data.email) {
                        toast.error(`Email - ${err.response.data.email[0]}`)
                    } else if (err.response.data.password) {
                        toast.error(`Password - ${err.response.data.password[0]}`)
                    }
                })
    }

    // console.log('form data is here', forvalues)

    return (
        <div className='registration-form '>
            <div className='row'>
                <div className='col-sm-7 position-relative'>
                    <img src='/assets/images/transparenrt.png' className='img-fluid form-floteimage' />
                </div>
                <div className='col-sm-5 formmain-registration'>
                    <h4 className='mb-4 text-center'>Login to your account</h4>
                    <form>
                        <input type="text" placeholder='Email or Username' name='email' value={forvalues.email} onChange={handleInputChange} />
                        <div className='passwordinput-div'>
                            <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Password' name='password' value={forvalues.password} onChange={handleInputChange} />
                            <button
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        <i className={`fas ${isPasswordVisible  ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                        </div>
                        <div className='check-boxes'>
                            <div>
                                <input type="checkbox" onChange={checkHandler} checked={check} />
                                <p>Remember Me</p>
                            </div>
                        </div>
                        <div className='loginlinks text-center'>
                            <h6><Link to='/forgotpassword'>Forgot your Password</Link></h6>
                            <h6>Not a User? <Link to='/register'>Register</Link></h6>
                            {/* <h6>Login Other Ways</h6> */}
                        </div>
                        {/* <div className='login-with-social'>
                    <img src='/assets/images/icons/google.png'></img>
                    <img src='/assets/images/icons/facebook.png'></img>
                </div> */}
                        <div className='text-center'>
                            <input className='submitbutton' type="button" value='Login' onClick={login} />
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
