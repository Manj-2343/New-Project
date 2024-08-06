import React from "react";

const TabButton = ({ children, onSelect }) => {
  return (
    <>
      <li>
        <button onClick={onSelect}>{children}</button>
        {/* here we us ed the function handleClick as the value of onClick  */}
      </li>
    </>
  );
};

export default TabButton;
