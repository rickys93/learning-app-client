import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/account">Account</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
