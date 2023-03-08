import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext, PopupContext } from "../../App";
import { Login, Signup } from "../index";
import { Link } from "react-router-dom";

import "./style.css";

function UserAccount() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { openPopup } = useContext(PopupContext);

  const handleLoginClick = () => {
    openPopup(<Login />);
  };

  const handleSignupClick = () => {
    openPopup(<Signup />);
  };

  const handleLogOut = () => {
    console.log("here");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="userAccount">
      {Object.keys(user).length ? (
        <>
          <h2>Welcome, {user.first_name}!</h2>
          <button onClick={handleLogOut} className="logout">
            Log Out
          </button>
        </>
      ) : (
        <>
          <ul className="menu">
            <li>
              <Link onClick={handleLoginClick}>Log In</Link>
            </li>
            <li>
              <Link onClick={handleSignupClick}>Sign Up</Link>
            </li>
          </ul>
          {/* <button onClick={handleLoginClick}>Log In</button>
          <button onClick={handleSignupClick}>Sign Up</button> */}
        </>
      )}
    </div>
  );
}

export default UserAccount;
