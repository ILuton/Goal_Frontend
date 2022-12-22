import React from "react";
import LoginForm from "../components/LoginForm";
import Explanation from "../components/Explaination";
import Title from "../components/Title";

function Frontpage() {
  return (
    <div className="frontPage">
      <Title />
      <p className="motto">Save your goals before they disapear</p>
      <h3>Login</h3>
        <LoginForm />
      <p>Create an Account</p>
      <Explanation />
    </div>
  );
}

export default Frontpage;
