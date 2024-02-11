import React, { useState } from 'react'
// import api from './Axios.config'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendData = async (event) => {
        event.preventDefault()
        if (userData.name  && userData.email && userData.password){
            try{
                 const response = await axios.post('http://localhost:8002/api/v1/auth/register',{userData})
                  if(response.data.success){
                    // console.log(response.data,"data here")
                    toast.success(response.data.messsage)
                    setUserData({name: "", email: "", password: "" })
                    router('/login')
                  }
            }catch(error){
                toast.error(error?.message)
            }
        }else{
            alert("all data is mandotory")
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={sendData}>
                <label>Name:</label><br />
                <input type="text" name='name' onChange={handleChange} /><br />
                {/* <label>BirthDate:</label><br />
                <input type="date" name='birthdate' placeholder='dd/mm/yy' onChange={handleChange} /><br /> */}
                <label>Email:</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>password</label><br />
                <input type="password" name='password' onChange={handleChange} /><br />
                <input type="submit" value='submit' />
            </form>
        </div>
    )
}

export default Register