import React from "react";
const PagesAndChannels = (props) => {
  const checkIcon = props.checkStatus ? "fa fa-check-circle" : "fa fa-circle";
  const checkStyle = props.checkStatus ? "#00ab66" : "white";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        borderRadius: "12px",
        backgroundColor: "#e9e9e9",
        padding: "5px 15px",
        marginBottom: "10px",
        position: "relative",
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
          marginTop: "6px",
        }}
      ></i>
      <h3
        style={{
          float: "left",
          fontSize: "1em",
          marginTop: "5px",
        }}
      >
        {props.name}
      </h3>
      <img
        src={props.image}
        style={{
          padding: "4px 4px",
          position: "absolute",
          right: "5px",
        }}
        width="40px"
        height="40px"
      />
    </div>
  );
};

export default PagesAndChannels;
