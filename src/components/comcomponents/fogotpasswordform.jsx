import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registerform.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiurl } from '../../urls/url';

export default function Forgotpasswordform() {

    const [email, setemail] = useState();
    const navigate = useNavigate();

    const login = async () => {
        console.log('data call is here', email)
        axios.get(`${apiurl}/user/password-reset/${email}/`)
            .then((res) => {
                console.log(res);
                toast.success('Email send');
                setemail('')
                setTimeout(() => {
                    navigate("/confirmpassword")
                }, 2000);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    return (
        <div className='registration-form '>
            <h4 className='mb-4 text-center'>Forgot Password ?</h4>
            <form>
                <input type="email" placeholder='Email or Username' value={email} name='full_name' onChange={(e) => setemail(e.target.value)}/>
                <div className='text-center'>
                    <input className='submitbutton' type="button" value='Verify' onClick={login}/>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}
