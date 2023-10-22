import React from "react";
import { useState } from "react";

function Dropdown({ options }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex-container">
      <div className="faq-container">
        <div className="qn" onClick={handleClick}>
          <h2>{options.qn}</h2>
          <span className={isActive ? "active" : ""}>
            <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
          </span>
        </div>
        <div className={isActive ? "ans" : "hide"} onClick={handleClick}>
          <h4>{options.ans}</h4>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
