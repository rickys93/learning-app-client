import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import './style.css'

function UserAccount() {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    
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
                        onClick={handleLogOut}
                    >
                        Log Out
                    </button>
                </>
                :
                <>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </>
            }
        </div>

    )
}

export default UserAccount