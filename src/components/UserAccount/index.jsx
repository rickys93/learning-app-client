import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext, PopupContext } from "../../App";
import { Login, Signup } from '../index'

import './style.css'

function UserAccount() {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const { openPopup } = useContext(PopupContext)

    const handleLoginClick = () => {
        openPopup(<Login/>)
    }

    const handleSignupClick = () => {
        openPopup(<Signup/>)
    }
    
    const handleLogOut = () => {
        console.log("here")
        localStorage.clear();
        navigate("/")
        window.location.reload()
    }
    return (
        <div className="userAccount">
            {Object.keys(user).length ?
                <>
                    <h2>Welcome, {user.first_name}!</h2>
                    <button
                        onClick={handleLogOut} className="logout"
                    >
                        Log Out
                    </button>
                </>
                :
                <>
                    <button onClick={handleLoginClick}>Log In</button>
                    <button onClick={handleSignupClick}>Sign Up</button>
                </>
            }
        </div>

    )
}

export default UserAccount
