import React, { useContext, useState } from 'react'
import api from "./Axios.config";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext';

const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" })
    
    const{Login} = useContext(AuthContext)
    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendData = async (event) => {
        event.preventDefault()
        if (userData.email && userData.password) {
            try {
                const response = await api.post('/auth/login', { userData })
                if (response.data.success) {
                    localStorage.setItem("my-token",JSON.stringify(response.data.token))
                    Login(response.data.user)
                    toast.success(response.data.message)
                    setUserData({ email: "", password: "" })
                    router('/')
                }
            } catch (error) {
                toast.error(error?.response.data.message)
            }
        }
    }
    return (
        <div className="container-si">
            <div className="sign-box">
                <div className="logo-sign">
                    <img src="asset/Google.webp" alt="" />
                </div>

                <div className=" para-2">
                    <p>Sign In</p>
                </div>

                
                    <form onSubmit={sendData}>
                        <label>Email:</label><br />
                        <input type="email" name='email' onChange={handleChange} /><br />
                        <label>Password:</label><br />
                        <input type="password" name='password' onChange={handleChange}
                         /> <br />
                         <input type="submit" value="sign in" />
                    </form>
                




               




            </div>
        </div>
    )
}

export default Login