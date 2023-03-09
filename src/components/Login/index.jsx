import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext, PopupContext } from "../../App";

import { Signup } from "..";

import './style.css'

export default function Login() {
    const {user, setUser} = useContext(UserContext)
    const { setPopupContent, closePopup } = useContext(PopupContext)
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    const navigate = useNavigate()

    const switchToSignup = () => {
        setPopupContent(<Signup/>)
    }

    const handlelogin = async (e) => {
        // Handles the sign-in/sign-up input logic
        e.preventDefault();
        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:loginEmail,
                password:loginPassword
            })
        }
        const response = await fetch("http://localhost:3000/users/login", options)
        if (response.status === 200) {
            const data = await response.json()
            // now set user details to user and navigate to main page 
            setUser(data.user)
            console.log('user.token', data.user.token)
            localStorage.setItem("token", data.user.token)
            closePopup()
            navigate("/")
        }
    };
    
    return (
            <div className="acc-form">
                <div className="tab-content">
                    <div className="log-pop">
                        <form onSubmit={handlelogin}>
                            <h2>Log In</h2>
                            <label 
                                htmlFor="sign-in-email" 
                                className="visually-hidden">
                                    Email
                            </label>
                            <input
                                type="email"
                                id="sign-in-email"
                                value={loginEmail}
                                onChange={(e) => setloginEmail(e.target.value)}
                                placeholder={"Enter Email"}
                                required
                            />

                            <label 
                                htmlFor="sign-in-password" 
                                className="visually-hidden">
                                    Password
                            </label>
                            <input
                                id="sign-in-password" 
                                type="password"
                                value={loginPassword}
                                onChange={(e) => setloginPassword(e.target.value)}
                                placeholder={"Enter Password"}
                                required
                            />
                            <button className="login-btn"
                                type="submit">
                                    Log In
                            </button>
                        </form>
                        <div className="is-new"><h2>New? </h2><button className="d" onClick={switchToSignup}>Sign up here!</button></div>
                    </div>
                </div>
            </div>
  );
}
