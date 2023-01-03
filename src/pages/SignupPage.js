import React from "react";
import SignUpForm from "../components/SignUpForm";
import welcomeGilbert from "../images/welcomeGilbert.png";

function SignupPage() {
  return (
    <div className="signUpPage">
      <div className="thoughtBubble">
        <p className="thoughtBubbletext">Welcome I'm Gilbert The Ghost! If you are new you can sign up here!</p>
      </div>
      <img alt="ghost icon holding welecome sign"className="welcomeGilbert" src={welcomeGilbert}/>
      <SignUpForm></SignUpForm>
      <a href="./">Already Have An Account?</a>
      <a href="./FAQ">FAQ</a>
    </div>
  );
}

export default SignupPage;
