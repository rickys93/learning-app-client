import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import './style.css'



export default function Account() {
    const {user, setUser} = useContext(UserContext)
    const [showLogin, setShowLogin] = useState(true)
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const navigate = useNavigate()

    const handleTabClick = (isLoginTab) => {
        setShowLogin(isLoginTab)
    }

    const handleSignin = async (e) => {
        // Handles the sign-in/sign-up input logic
        e.preventDefault();
        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:signInEmail,
                password:signInPassword
            })
        }
        const response = await fetch("http://localhost:3000/users/login", options)
        if (response.status === 200) {
            const data = await response.json()
            // now set user details to user and navigate to main page 
            setUser(data.user)
            console.log('user.token', user.token)
            localStorage.setItem("token", user.token)
            navigate("/")
        }
    };
    
    const handleSignup = async (e) => {
        // Handles the sign-in/sign-up input logic
        e.preventDefault();
        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name:firstName,
                last_name:lastName,
                email:signUpEmail,
                password:signUpPassword
            })
        }
        const response = await fetch("http://localhost:3000/users/register", options)
        if (response.status === 201) {
            const data = await response.json()
            // now set user details to user and navigate to main page 
            setUser(data.user)
            localStorage.setItem("token", user.token)
            navigate("/")
        }
        
    };

    return (
        <main className="login-container">
            <div className="acc-form">
                <ul className="tab-group">
                    <li>
                        <a 
                            onClick={() => handleTabClick(true)}
                            className={`tab ${showLogin ? "active" : ""}`}  
                        >
                            Sign In
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={() => handleTabClick(false)}
                            className={`tab ${showLogin ? "" : "active"}`}
                        >
                            Sign Up
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`signin ${showLogin ? "" : "display-none"}`}>
                        <form onSubmit={handleSignin}>
                            <h2>Sign In</h2>
                            <label 
                                htmlFor="sign-in-email" 
                                className="visually-hidden">
                                    Email
                            </label>
                            <input
                                type="email"
                                id="sign-in-email"
                                value={signInEmail}
                                onChange={(e) => setSignInEmail(e.target.value)}
                                placeholder={"Enter Email"}
                            />

                            <label 
                                htmlFor="sign-in-password" 
                                className="visually-hidden">
                                    Password
                            </label>
                            <input
                                id="sign-in-password" 
                                type="password"
                                value={signInPassword}
                                onChange={(e) => setSignInPassword(e.target.value)}
                                placeholder={"Enter Password"}
                            />
                            <button 
                                type="submit">
                                    Sign In
                            </button>
                        </form>
                    </div>
                    <div className={`signup ${showLogin ? "display-none" : ""}`}>
                        <h2>Sign Up</h2>
                        <form
                            onSubmit={handleSignup}
                        >
                            <div className="name-inputs">
                                <label 
                                    htmlFor="first-name" 
                                    className="visually-hidden">
                                        First Name:
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder={"Enter First Name"}
                                />
                                <label 
                                    htmlFor="last-name" 
                                    className="visually-hidden">
                                        Last Name:
                                </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder={"Enter Last Name"}
                                />
                            </div>

                            <label 
                                htmlFor="sign-up-email" 
                                className="visually-hidden">
                                    Password
                            </label>
                            <input
                                type="email"
                                id="sign-up-email"
                                value={signUpEmail}
                                onChange={(e) => setSignUpEmail(e.target.value)}
                                placeholder={"Enter Email"}
                            />
                            <label 
                                htmlFor="sign-up-password" 
                                className="visually-hidden">
                                    Password
                            </label>
                            <input
                                type="password"
                                id="sign-up-password" 
                                value={signUpPassword}
                                onChange={(e) => setSignUpPassword(e.target.value)}
                                placeholder={"Enter Password"}
                            />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
  );
}
