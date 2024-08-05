import React, { useState } from 'react';
import './ordertrack.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Ordertrack() {

  const [trackorderinfo, settrackorderinfo] = useState()
  const [awbnumber, setawbnumber] = useState()
  const navigate = useNavigate();

  const getordertrack = async () => {
    axios.get(`https://apiv2.shiprocket.in/v1/external/courier/track/awb/${awbnumber}`)
    .then((res) => {
      console.log(res)
      settrackorderinfo(res)
      navigate('/track-order-info')
    })
    .catch((err) => {
      console.log(err)
      toast.error(err.response.data.message)
    })
  }

  return (
    <>
        <div className='track-order-main'>
            <div className="track-order">
                <h5 className='text-white text-start'>Enter Your AWB Number to proceed <img src='/assets/images/icons/truck.png' className='img-fluid'></img></h5>
                <input type='text' value={awbnumber} onChange={(e) => setawbnumber(e.target.value)} placeholder='AWB No.'></input>
                <input type='submit' value='Submit' onClick={getordertrack}/>
                <ToastContainer />
            </div>
        </div>
    </>
  )
}
