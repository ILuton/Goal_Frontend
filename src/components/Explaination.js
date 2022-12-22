import React, { useState } from 'react';

function Explanation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>What is Goal Guru?</h1>
            <p> Goal Guru is a daily goal setting app that helps users establish and track specific objectives they want to achieve on a daily basis. Once a task is marked complete a gold star is earned and saved. You are able to see your total star history on the main page. Once a goal or task is set you have 24 hours to complete it before it is deleted. Overall, Goal Guru is a valuable tool for anyone looking to increase productivity, organize their time, and achieve their personal and professional objectives.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
      {/* hide once opened */}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </div>
  );
}

export default Explanation;