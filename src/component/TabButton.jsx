import React from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <>
      <li>
        <button className={isSelected ? "active" : ""} onClick={onSelect}>
          {children}
        </button>
        {/* here we us ed the function handleClick as the value of onClick  */}
      </li>
    </>
  );
};

export default TabButton;
