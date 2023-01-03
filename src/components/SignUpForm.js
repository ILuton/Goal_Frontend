import React from "react";
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "name") {
      setName(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form to the server
  };

  return (
    <div>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <label className="signUpForm label">
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className="signUpForm label">
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className="signUpForm label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </form>
      <button className="signUpFormButton" type="submit">
        Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;
