import React, { useState } from "react";

export default function Account() {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="acc-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label>
          Email:
          <input
            type="email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            placeholder={"Enter Email"}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            placeholder={"Enter Password"}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
        <h2>Sign Up</h2>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={"Enter Full Name"}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            placeholder={"Enter Email"}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            placeholder={"Enter Password"}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder={"Enter Password"}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
