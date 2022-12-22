import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form to the server
  };

  return (
    <div >
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="loginForm label">
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className="loginForm label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </form>
      <button className="loginFormButton" type="submit">
        Continue
      </button>
    </div>
  );
}

export default LoginForm;
