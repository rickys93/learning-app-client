import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import UserAccount from "../UserAccount";

import './style.css'

export default function NavBar() {
  return (
    <>
      <header className="navbar">
        <nav className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/flashcards">Memorize</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
        </nav>
          <UserAccount/>
      </header>
      <Outlet />
    </>
  );
}
