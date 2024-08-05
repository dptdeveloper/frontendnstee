import React, { useEffect, useState } from 'react';
import './registerform.css';
import axios from 'axios';

export default function Confirmpasswordform() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prevState => !prevState);
    };

    //   const url = 'http://127.0.0.1:8000/api/v1/user/register/'

    //   const initialValues = {
    //     full_name: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     password2: "",
    //   };

    //   const [forvalues, setforvalues] = useState(initialValues);

    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setforvalues({
    //       ...forvalues,
    //       [name]: value,
    //     });
    //   };

    //   const login = async() => {
    //     console.log('data call is here', forvalues)
    //     axios.post('http://127.0.0.1:8000/api/v1/user/register/', forvalues)
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .then((data) => {
    //       console.log(data)
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data)
    //     })
    //   }

    //   console.log('form data is here', forvalues)

    return (
        <div className='registration-form '>
            <h4 className='mb-4 text-center'>Confirm Your Password</h4>
            <form>
                <div className='passwordinput-div'>
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    // style={{ paddingRight: '2rem' }}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        <i className={`fas ${isPasswordVisible  ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                </div>
                <div className='passwordinput-div'>
                    <input
                        type={isConfirmPasswordVisible ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirm your password"
                    // style={{ paddingRight: '2rem' }}
                    />
                    <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        <i className={`fas ${isConfirmPasswordVisible  ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                </div>
                <div className='text-center'>
                    <input className='submitbutton' type="button" value='Verify' />
                </div>
            </form>
        </div>
    )
}
