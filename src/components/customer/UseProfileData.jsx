import React, { useState, useEffect } from 'react'
import UserData from '../plugin/UserData';
import { apiurl } from '../../urls/url';


function UseProfileData() {
    const [profile, setProfile] = useState([])

    const axios = apiInstance
    const userData = UserData()

    useEffect(() => {
        axios.get(`${apiurl}/user/profile/16/`).then((res) => {
            setProfile(res.data);
        })
    }, [])
    return profile
}

export default UseProfileData