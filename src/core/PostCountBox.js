import React from "react";
const PostCountBox = (props) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "5px 10px",
        display: "flex",
        justifyContent: "left",
        marginRight: "10px",
        width: "150px",
        boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ float: "left" }}>
        <h4 style={{ fontSize: ".6em", paddingRight: "5px", margin: "0" }}>
          {props.name}
        </h4>
        <h2 style={{ fontSize: "1.3em", fontWeight: "bold", margin: "0" }}>
          {props.count}
        </h2>
      </div>
      <i
        className={props.iconName}
        aria-hidden="true"
        style={{
          color: props.iconColor,
          fontSize: "2em",
          margin: "10px 2px 0 0",
        }}
      ></i>
    </div>
  );
};

export default PostCountBox;
