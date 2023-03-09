import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserAccount from "../UserAccount";
import DarkMode from "../DarkMode";
import AboutPage1 from "../AboutPage1";
import { AboutPage } from "../../pages";
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
              <li>
                <NavLink to="/" id="logo">
                  Crammer UK.
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className="a">
                  Categories
                </NavLink>
              </li>
              <li>
                <button to={<AboutPage1 />}>AboutPage</button>
                {/* <AboutPage /> */}
                {/* <NavLink className="a">About us</NavLink> */}
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
