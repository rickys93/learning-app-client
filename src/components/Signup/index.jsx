import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext, PopupContext } from "../../App";

import { FormComplete, Login } from "..";


export default function Account() {
    const {user, setUser} = useContext(UserContext)
    const { setPopupContent, closePopup } = useContext(PopupContext)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const navigate = useNavigate()

    const switchToLogin = () => {
        setPopupContent(<Login/>)
    }
   
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
            closePopup()
            openPopup(<FormComplete message={"Registration successful!"}/>)
            // navigate("/")

        } else {

        }
        
    };

    return (
        <main className="login-container">
            <div className="acc-form">
                <div className="tab-content">
                    <div className={`signup-form`}>
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
                                    placeholder={"First Name"}
                                    required
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
                                    placeholder={"Last Name"}
                                    required
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
                                required
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
                                required
                            />
                            <button type="submit" className="d">Sign Up</button>
                        </form>
                        <div><h4>Already have an account? </h4><button className="login-btn" onClick={switchToLogin}>Log in here!</button></div>
                    </div>
                </div>
            </div>
        </main>
  );
}
