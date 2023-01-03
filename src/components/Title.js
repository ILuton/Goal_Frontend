import React from "react";
import Gilbert from "../images/gilbert.png";

function Title() {
  return (
    <div className="titleContainer">
      <h1 className="topTitle">Fading</h1>
      <img alt="ghost icon holding stopwatch" className="gilbert" src={Gilbert} />
      <h1 className="title">Focus</h1>
    </div>
  );
}

export default Title;
