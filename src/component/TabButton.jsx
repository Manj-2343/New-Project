import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <>
      <li>
        <button className={isSelected ? "active" : ""} {...props}>
          {children}
        </button>
        {/* here we us ed the function handleClick as the value of onClick  */}
      </li>
    </>
  );
};

export default TabButton;
