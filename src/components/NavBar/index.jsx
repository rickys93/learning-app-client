import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import UserAccount from "../UserAccount";

import "./style.css";

export default function NavBar() {

  const [mobile, setMobile] = useState(true)
  return (
    <>
      <header className="main">
        <div className="navbar">
        <div className="toggle-button" onClick={()=>setMobile(!mobile)}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <nav className="navlinks"  id={mobile? "hidden" : ""}>
          <ul>
          <li><NavLink to="/" className="a">Home</NavLink></li>
          <li><NavLink to="/categories" className="a">Categories</NavLink></li>
          <li><NavLink to="/flashcards" className="a">Memorize</NavLink></li>
          <li><NavLink to="/quiz" className="a">Quiz</NavLink></li>
          </ul>
        </nav>
        </div>
        <div className="login">
          <UserAccount/>
          </div>
      </header>
      <Outlet />
    </>
  );
}
