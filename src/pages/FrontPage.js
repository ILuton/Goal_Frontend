import React from "react";
import LoginForm from "../components/LoginForm";
import Title from "../components/Title";

function Frontpage() {
  return (
    <div className="frontPage">
      <Title />
      <LoginForm />
      <a href="./signup">Create an Account</a>
      <a href="./FAQ">FAQ</a>
    </div>
  );
}

export default Frontpage;
