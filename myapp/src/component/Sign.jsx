import React, { useState } from "react";
import './Sign.css'
import api from "./Axios.config";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

const Sign = () => {
    const [userData, setUserData] = useState({ email: "", password: "" })

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
                    <p>choose an account</p>
                </div>

                

                <form>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid gray", width: "370px", margin: "auto", marginBottom: "20px" }}>
                        <div style={{ display: "flex" }}>
                            <img style={{ width: "40px", borderRadius: "50%", border: "1px solid black", height: "40px" }} src="asset/minion.jpg" alt="" />
                            <div style={{ textAlign: "start", marginLeft: "10px", marginBottom: "15px" }}>
                                <p>san</p>
                                <input type="email" name="email" onChange={handleChange} style={{border:"none",outline:"none"}}/>
                            </div>
                        </div>

                        <div >
                            <p>Signed out</p>
                        </div>

                    </div>

                    <div style={{ width: "370px", display: "flex", margin: "auto", borderBottom: "1px solid gray", marginBottom: "20px" }}>
                        <i style={{ marginBottom: "20px" }} class="fa-regular fa-circle-user fa-xl"></i>
                        <p style={{ marginLeft: "10px", marginTop: "-10px" }}>Use another account</p>
                    </div>

                    <div style={{ width: "370px", display: "flex", margin: "auto", borderBottom: "1px solid gray" }}>
                        <i style={{ marginBottom: "20px" }} class="fa-regular fa-user"></i>
                        <p style={{ marginLeft: "10px" }}>Remove an account</p>
                    </div>
                </form>




            </div>
        </div>
    )
}

export default Sign