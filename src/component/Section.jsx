import React from "react";
//forward props and proxy props
const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
//id example is not automatically forward to the section component
