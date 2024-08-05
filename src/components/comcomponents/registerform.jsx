import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registerform.css';
import axios from 'axios';
import { apiurl } from '../../urls/url';
import { useNavigate } from 'react-router-dom';

export default function Registerform() {

  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [checked1, setchecked1] = useState(false)
  const [checked2, setchecked2] = useState(false)

  const checkHandler = () => {
    setchecked1(!checked1)
  }
  const checkHandler2 = () => {
    setchecked2(!checked2)
  }

  const initialValues = {
    full_name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  };

  const [forvalues, setforvalues] = useState(initialValues);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setforvalues({
      ...forvalues,
      [name]: value,
    });
  };

  const login = async () => {
    // console.log('data call is here', forvalues)
    if (checked1 == true && checked2 == true) {
      axios.post(`${apiurl}/user/register/`, forvalues)
        .then((res) => {
          console.log(res);
          // toast.success('User REgistered Successfully');
          setforvalues({
            full_name: "",
            email: "",
            phone: "",
            password: "",
            password2: "",
          })
          navigate("/")
          setchecked1(false)
          setchecked2(false)
        })
        .catch((err) => {
          console.log(err.response.data)
          if (err.response.data.password) {
            toast.error(`Password - ${err.response.data.password[0]}`)
          } else if (err.response.data.phone) {
            toast.error(`Phone - ${err.response.data.phone[0]}`)
          } else if (err.response.data.email) {
            toast.error(`Email - ${err.response.data.email[0]}`)
          }
          console.log(err.response.data)
          // toast.error(err.response.data.email[0])
        })
    } else {
      toast.error('please check the policies')
    }
  }


  // console.log('form data is here', forvalues)
  console.log(checked1)
  console.log(checked2)

  return (
    <div className='registration-form'>
      <div className='registration-form-main'>
        <h2 className='text-center mb-3'>New To NSTEE?</h2>
        <div className='row'>
          <div className='col-sm-7 position-relative'>
            <img src='/assets/images/transparenrt.png' className='img-fluid form-floteimage' />
          </div>
          <div className='col-sm-5 formmain-registration'>
            <h4 className='mb-4 text-center'>Register Today!</h4>
            <form>
              <input type="text" placeholder='Full Name' name='full_name' value={forvalues.full_name} onChange={handleInputChange} />
              <input type="number" placeholder='Mobile No.' name='phone' value={forvalues.phone} onChange={handleInputChange} />
              <input type="email" placeholder='Email' name='email' value={forvalues.email} onChange={handleInputChange} />
              <div className='passwordinput-div'>
                <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Password' name='password' value={forvalues.password} onChange={handleInputChange} />
                <button
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        <i className={`fas ${isPasswordVisible  ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
              </div>
              <div className='passwordinput-div'>
                <input type={isConfirmPasswordVisible ? 'text' : 'password'} placeholder='Re-Enter Password' name='password2' value={forvalues.password2} onChange={handleInputChange} />
                <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        <i className={`fas ${isConfirmPasswordVisible  ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
              </div>
              <div className='check-boxes'>
                <div>
                  <input type="checkbox" onChange={checkHandler} checked={checked1} />
                  <p>By Clicking This Check you're confirming to submit your information</p>
                </div>
                <div>
                  <input type="checkbox" onChange={checkHandler2} checked={checked2} />
                  <p>Join Our Mailing list for Cool offers and Discounts.</p>
                </div>
              </div>
              <div className='text-center'>
                <input className='submitbutton' type="button" value='Submit' onClick={login} />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
