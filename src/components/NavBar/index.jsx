import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserAccount from "../UserAccount";
import DarkMode from "../DarkMode";
import "./style.css";

export default function NavBar() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="main">
        <div className="navbar">
          <div className="toggle-button" onClick={() => setMobile(!mobile)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="navlinks" id={mobile ? "hidden" : ""}>
            <ul>
              <li onClick={() => (mobile ? setMobile(!mobile) : mobile)}>
                <NavLink to="/" className="a-c">
                  Crammer UK
                </NavLink>
              </li>
              <li onClick={() => (mobile ? setMobile(!mobile) : mobile)}>
                <NavLink to="/categories" className="a">
                  Learn
                </NavLink>
              </li>
              <DarkMode />
            </ul>
          </div>
        </div>
        <div className="login">
          <UserAccount />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
