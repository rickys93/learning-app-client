import React, { useState } from "react";

import './style.css'

export default function Account() {
    const [showLogin, setShowLogin] = useState(true)
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleTabClick = (isLoginTab) => {
        setShowLogin(isLoginTab)
    }

    const handleSubmit = (e) => {
        // Handles the sign-in/sign-up input logic
        e.preventDefault();
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
                        <form onSubmit={handleSubmit}>
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
                        <form>
                            <label 
                                htmlFor="full-name" 
                                className="visually-hidden">
                                    Full Name:
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder={"Enter Full Name"}
                            />

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
