// rfce to create component easier
import React, { useState } from "react";

function GoalForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    props.onSubmit({
      id: Math.floor(Math.random() *10000),
      text: input,
    })


  };

  return (
    <form className="goalForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Goal"
        value={input}
        name="text"
        className="goalInput"
        onChange={handleChange}
      ></input>
      <button className="goalButton">Add Goal</button>
    </form>
  );
}

export default GoalForm;
