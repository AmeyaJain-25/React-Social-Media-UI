import React from "react";
const ConnectPhotos = (props) => {
  return (
    <img
      style={{
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: "10px",
        padding: "10px 20px",
        marginRight: "30px",
        marginBottom: "10px",
      }}
      src={props.imageUrl}
      width="70px"
      height="50px"
    />
  );
};

export default ConnectPhotos;
