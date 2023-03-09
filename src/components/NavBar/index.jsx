import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserAccount from "../UserAccount";
import DarkMode from "../DarkMode";
import "./style.css";

export default function NavBar() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header className="main">
        <div className="navbar">
          <div className="toggle-button" onClick={() => setMobile(!mobile)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <nav className="navlinks" id={mobile ? "hidden" : ""}>
            <ul className="menu">
              <li onClick={()=>mobile? setMobile(!mobile): mobile} className="a">
                <NavLink to="/" id="logo">
                  Crammer UK.
                </NavLink>
              </li>
              <li onClick={()=>mobile? setMobile(!mobile): mobile}>
                <NavLink to="/categories" className="a">
                  Subjects
                </NavLink>
              </li>
              <DarkMode />
            </ul>
          </nav>
        </div>
        <div className="login">
          <UserAccount />
        </div>
      </header>
      <Outlet />
    </>
  );
}
