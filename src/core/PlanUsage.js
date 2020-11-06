import React from "react";
const PlanUsage = (props) => {
  return (
    <div>
      <h6 style={{ fontSize: "1em", fontWeight: "bold", marginTop: "0" }}>
        {props.name}
      </h6>
      <progress
        max="100"
        value={props.progressValue}
        style={{
          width: "100%",
          margin: "0",
          color: "#fc4c4e",
        }}
      ></progress>
      <p
        style={{
          textAlign: "right",
          margin: "0",
          fontSize: ".7em",
          color: "rgba(0,0,0,0.8)",
        }}
      >
        {props.subScript}
      </p>
    </div>
  );
};

export default PlanUsage;
