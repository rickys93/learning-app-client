import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h1>404: Page not found</h1>
      <Link to="/">Return Home</Link>
      <div>
        <img
          src="https://http.cat/404"
          alt="Status code 404 with a cat expression."
        />
      </div>
    </main>
  );
}
