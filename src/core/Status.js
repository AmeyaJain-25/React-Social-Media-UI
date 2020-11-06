import React from "react";
const Status = (props) => {
  const checkIcon = props.checkStatus
    ? "fa fa-check-circle"
    : "fa fa-circle-thin";
  const checkStyle = props.checkStatus ? "#00ab66" : "rgba(0,0,0,0.6)";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        padding: "0 15px",
      }}
    >
      <i
        className={checkIcon}
        aria-hidden="true"
        style={{
          color: checkStyle,
          float: "left",
          fontSize: "1.3em",
          paddingTop: "2px",
          marginRight: "8px",
          marginTop: "0",
        }}
      ></i>
      <h3
        style={{
          float: "left",
          fontSize: ".9em",
          marginTop: "0",
        }}
      >
        {props.name}
      </h3>
    </div>
  );
};

export default Status;
