import React from "react";
const LoginInput = (props) => {
  return (
    <>
      <label style={{ float: "left", marginBottom: "0", color: "#999999" }}>
        {props.labelName}
      </label>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        style={props.style}
      />
    </>
  );
};

export default LoginInput;
