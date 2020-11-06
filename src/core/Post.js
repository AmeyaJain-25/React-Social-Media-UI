import React from "react";

const Post = (props) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "10px 15px",
        margin: "0 0 10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          position: "relative",
        }}
      >
        <img
          src={props.imageUrl}
          width="50px"
          height="50px"
          style={{
            borderRadius: "200px",
            marginRight: "5px",
            float: "left",
          }}
        />
        <div>
          <h4
            style={{
              color: "darkblue",
              fontSize: "1.2em",
              fontWeight: "bold",
              marginBottom: "0",
              float: "left",
            }}
          >
            {props.name}
          </h4>

          <h6
            style={{
              fontSize: ".7em",
              fontWeight: "bold",
              marginTop: "0",
              color: "rgba(0,0,0,0.3)",
            }}
          >
            {props.time}
          </h6>
        </div>
        <i
          className="fa fa-exclamation-circle"
          aria-hidden="true"
          style={{
            padding: "4px 4px",
            color: "#fa002f",
            position: "absolute",
            right: "5px",
            fontSize: "1.5em",
          }}
        ></i>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          position: "relative",
        }}
      >
        <h5
          style={{
            marginTop: "5px",
            fontSize: "1em",
            fontWeight: "500",
            color: "rgba(0,0,0,0.7)",
            paddingRight: "20px",
            float: "left",
          }}
        >
          {props.content}
        </h5>
        <i
          className="fa fa-angle-right"
          aria-hidden="true"
          style={{
            padding: "4px 4px",
            color: "rgba(0,0,0,0.5)",
            position: "absolute",
            right: "5px",
            fontSize: "1.5em",
          }}
        ></i>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          position: "relative",
          margin: "15px 8px 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            borderRadius: "15px",
            backgroundColor: "#e9e9e9",
            padding: "0 3px",
          }}
        >
          <img
            src={props.SMImage}
            style={{
              padding: "4px 4px",
            }}
            width="40px"
            height="40px"
          />
          <h3
            style={{
              fontSize: "1em",
              margin: "8px 5px 0 0",
            }}
          >
            {props.SMId}
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            position: "absolute",
            right: "0",
          }}
        >
          <i
            className="fa fa-shield"
            aria-hidden="true"
            style={{
              color: "#29b6f6",
              fontSize: "1.4em",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginRight: "10px",
              padding: "9px 11px",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          ></i>
          <i
            className="fa fa-eye-slash"
            aria-hidden="true"
            style={{
              color: "#f9a602",
              fontSize: "1.4em",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: "9px 11px",
              marginRight: "10px",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          ></i>
          <i
            className="fa fa-check"
            aria-hidden="true"
            style={{
              color: "#00ab66",
              fontSize: "1.4em",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginRight: "10px",
              padding: "9px 11px",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Post;
