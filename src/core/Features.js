import React from "react";
const Features = (props) => {
  return (
    <div style={{ color: "white", marginBottom: "10px" }}>
      <i
        className={props.iconName}
        aria-hidden="true"
        style={{ marginRight: "5px" }}
      ></i>
      {props.feature}
    </div>
  );
};

export default Features;
