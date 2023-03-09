import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import "./DarkMode.css";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <DarkModeSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      className="theme"
    />
  );
}
