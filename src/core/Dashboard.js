import React from "react";
import instagram from "../instagram.png";
import fb from "../fb.png";
import youtube from "../youtube.png";
import PagesAndChannels from "./PagesAndChannels";
import Status from "./Status";
import PlanUsage from "./PlanUsage";
import Post from "./Post";
import PostCountBox from "./PostCountBox";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ paddingTop: "5px" }}>
        <div className="col-sm-3">
          <h3 style={{ fontWeight: "bold" }}>
            Rep
            <span style={{ color: "#0f52ba" }}>suite</span>.
          </h3>
        </div>
        <div className="col-sm-5"></div>
        <div
          className="col-sm-2"
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginBottom: "10px",
            padding: "0 15px",
          }}
        >
          <i
            className="fa fa-address-book-o"
            aria-hidden="true"
            style={{
              color: "#0f52ba",
              fontSize: "1.5em",
              borderRadius: "200px",
              padding: "6px 8px",
              marginRight: "10px",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          ></i>
          <i
            className="fa fa-cog"
            aria-hidden="true"
            style={{
              color: "#0f52ba",
              fontSize: "1.5em",
              borderRadius: "200px",
              padding: "6px 8px",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          ></i>
        </div>
        <div className="col-sm-2" style={{ paddingLeft: "15px" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA0qxFQtZdfcfi9AasqcWO1YadB3wPXpowiQ&usqp=CAU"
            width="40px"
            height="40px"
            style={{
              borderRadius: "200px",
              marginRight: "5px",
              float: "left",
            }}
          />
          <div>
            <h6 style={{ color: "#999999", marginBottom: "0", float: "left" }}>
              Profile
            </h6>
            <i
              className="fa fa-angle-down"
              aria-hidden="true"
              style={{ marginLeft: "30px" }}
            ></i>
            <h4 style={{ fontWeight: "bold", fontSize: "1em", marginTop: "0" }}>
              Rachana Ranade
            </h4>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#dfebee",
          minHeight: "100vh",
        }}
      >
        <div
          className="col-md-3"
          style={{
            padding: "10px 30px",
          }}
        >
          <div
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              padding: "20px 30px 20px 15px",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                marginBottom: "20px",
              }}
            >
              Pages and Channels
            </h1>
            <div>
              <PagesAndChannels
                checkStatus={true}
                name="Rachana Ranade"
                image={youtube}
              />
              <PagesAndChannels
                checkStatus={true}
                name="Rachana.ranade3"
                image={instagram}
              />
              <PagesAndChannels
                checkStatus={false}
                name="Rachana Ranade"
                image={fb}
              />
              <PagesAndChannels
                checkStatus={true}
                name="Rachana Ranade"
                image={instagram}
              />
            </div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                margin: "30px 0 10px 0",
              }}
            >
              Status
            </h1>
            <div>
              <div style={{ marginBottom: "10px" }}>
                <Status checkStatus={true} name="Requires Manual Action" />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <Status checkStatus={true} name="Marked as safe by:" />
                <ul>
                  <li style={{ listStyle: "none", marginTop: "0" }}>
                    <Status checkStatus={true} name="Manual Action" />
                  </li>

                  <li
                    style={{
                      listStyle: "none",
                      marginTop: "0",
                    }}
                  >
                    <Status checkStatus={true} name="AI" />
                  </li>
                </ul>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Status checkStatus={true} name="Hidden by" />
                <ul>
                  <li style={{ listStyle: "none", marginTop: "0" }}>
                    <Status checkStatus={false} name="Manual Action" />
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      marginTop: "0",
                    }}
                  >
                    <Status checkStatus={true} name="AI" />
                  </li>
                  <li style={{ listStyle: "none", marginTop: "0" }}>
                    <Status checkStatus={false} name="Keywords" />
                  </li>
                </ul>
              </div>
            </div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                marginBottom: "15px",
              }}
            >
              Plan Usage
            </h1>
            <PlanUsage
              name="Accounts Connected"
              progressValue="63"
              subScript="2 of 3"
            />
            <PlanUsage
              name="Comments Processed"
              progressValue="50"
              subScript="5,000 of 10,000"
            />
          </div>
        </div>
        <div className="col-md-6" style={{ padding: "10px 30px 10px 10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "1em",
                margin: "0",
              }}
            >
              Date&nbsp;Range:
            </h1>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "5px",
                display: "flex",
                justifyContent: "left",
                margin: "0 15px 0 5px",
                width: "10%",
              }}
            >
              <h6 style={{ fontSize: ".8em" }}>
                Last 7 Days
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </h6>
            </div>
            <PostCountBox
              name="Require manual Action"
              count="34"
              iconName="fa fa-exclamation-circle"
              iconColor="#fa002f"
            />
            <PostCountBox
              name="Marked as Safe"
              count="128"
              iconName="fa fa-shield"
              iconColor="#29b6f6"
            />
            <PostCountBox
              name="Require manual Action"
              count="34"
              iconName="fa fa-eye-slash"
              iconColor="#f9a602"
            />
          </div>
          <p
            style={{
              color: "rgba(0,0,0,0.5)",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            Showing 36 comments
          </p>
          <Post
            imageUrl="data:image/jpeg;base64,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"
            name="Prayag Mukhi"
            time="2:03 PM, Today"
            content="Content is the information and experiences that are directed toward an
          end-user or audience. Content is something that is to be expressed
          through something."
            SMImage={instagram}
            SMId="Rachana.ranade3"
          />
          <Post
            imageUrl="data:image/jpeg;base64,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"
            name="Prayag Mukhi"
            time="2:03 PM, Today"
            content="Content is the information and experiences that are directed toward an
          end-user or audience. Content is something that is to be expressed
          through something."
            SMImage={instagram}
            SMId="Rachana.ranade3"
          />
          <Post
            imageUrl="data:image/jpeg;base64,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"
            name="Prayag Mukhi"
            time="2:03 PM, Today"
            content="Content is the information and experiences that are directed toward an
          end-user or audience. Content is something that is to be expressed
          through something."
            SMImage={instagram}
            SMId="Rachana.ranade3"
          />
          <Post
            imageUrl="data:image/jpeg;base64,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"
            name="Prayag Mukhi"
            time="2:03 PM, Today"
            content="Content is the information and experiences that are directed toward an
          end-user or audience. Content is something that is to be expressed
          through something."
            SMImage={instagram}
            SMId="Rachana.ranade3"
          />
          <Post
            imageUrl="data:image/jpeg;base64,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"
            name="Prayag Mukhi"
            time="2:03 PM, Today"
            content="Content is the information and experiences that are directed toward an
          end-user or audience. Content is something that is to be expressed
          through something."
            SMImage={instagram}
            SMId="Rachana.ranade3"
          />
          <Post
            imageUrl="data:image/jpeg;base64,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"
            name="Prayag Mukhi"
            time="2:03 PM, Today"
            content="Content is the information and experiences that are directed toward an
          end-user or audience. Content is something that is to be expressed
          through something."
            SMImage={instagram}
            SMId="Rachana.ranade3"
          />
        </div>
        <div className="col-md-3">
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              padding: "10px 15px",
              margin: "10px 0 0 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA0qxFQtZdfcfi9AasqcWO1YadB3wPXpowiQ&usqp=CAU"
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
                  Rachana Ranade
                </h4>

                <h6
                  style={{
                    fontSize: ".7em",
                    fontWeight: "bold",
                    marginTop: "0",
                    color: "rgba(0,0,0,0.3)",
                  }}
                >
                  2:30 PM Today
                </h6>
              </div>
            </div>
            <div>
              <h5
                style={{
                  marginTop: "5px",
                  fontSize: ".9em",
                  fontWeight: "500",
                  color: "rgba(0,0,0,0.7)",
                  float: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec tincidunt lorem. Suspendisse lobortis a vestibulum.
              </h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRVcSPEjImCIk2T-tKRYHyre650ASIR0TmGw&usqp=CAU"
                width="100%"
                height="180px"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                position: "relative",
                marginTop: "10px",
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                width="40px"
                height="40px"
                style={{
                  borderRadius: "200px",
                  marginRight: "5px",
                  float: "left",
                }}
              />
              <div>
                <h4
                  style={{
                    color: "black",
                    fontSize: ".8em",
                    fontWeight: "bold",
                    marginBottom: "0",
                    float: "left",
                  }}
                >
                  Prayag Mukhi
                </h4>

                <h6
                  style={{
                    fontSize: ".6em",
                    fontWeight: "bold",
                    marginTop: "0",
                    color: "rgba(0,0,0,0.3)",
                  }}
                >
                  2:30 PM, Today
                </h6>
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
                  className="fa fa-check"
                  aria-hidden="true"
                  style={{
                    color: "#00ab66",
                    fontSize: "1em",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    padding: "2px 2px",
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                ></i>
                <i
                  className="fa fa-shield"
                  aria-hidden="true"
                  style={{
                    color: "#29b6f6",
                    fontSize: "1em",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    padding: "3px 4px",
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                ></i>
                <i
                  className="fa fa-eye-slash"
                  aria-hidden="true"
                  style={{
                    color: "#f9a602",
                    fontSize: "1em",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    padding: "2px 2px",
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                ></i>
              </div>
            </div>
            <div>
              <h5
                style={{
                  marginTop: "5px",
                  fontSize: ".9em",
                  fontWeight: "500",
                  color: "rgba(0,0,0,0.7)",
                  float: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec tincidunt lorem. Suspendisse lobortis lectus a accumsan
                vestibulum.
              </h5>
            </div>
            <div>
              <input
                type="text"
                placeholder="Write a reply..."
                style={{
                  width: "100%",
                  position: "relative",
                  borderRadius: "4px",
                  borderStyle: "none",
                  fontSize: ".8em",
                  padding: "2px 5px",
                  border: "1px solid rgba(0,0,0,0.4)",
                }}
              />
              <i
                className="fa fa-smile-o"
                aria-hidden="true"
                style={{
                  fontSize: "1em",
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: "30px",
                  marginTop: "5px",
                }}
              ></i>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                padding: "0 3px",
                position: "relative",
                opacity: "0.5",
              }}
            >
              <div
                style={{
                  float: "left",
                  marginRight: "5px",
                  borderRadius: "8px",
                  backgroundColor: "#e9e9e9",
                  padding: "0 5px",
                }}
              >
                <h3
                  style={{
                    fontSize: ".9em",
                    margin: "3px 5px 0 0",
                    color: "blue",
                    float: "left",
                  }}
                >
                  Like
                </h3>
                <i
                  className="fa fa-thumbs-up"
                  aria-hidden="true"
                  style={{
                    fontSize: ".8em",
                    color: "blue",
                    marginTop: "8px",
                  }}
                ></i>
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#e9e9e9",
                  padding: "0 5px",
                }}
              >
                <h3
                  style={{
                    fontSize: ".9em",
                    margin: "3px 5px 0 0",
                    color: "red",
                    float: "left",
                  }}
                >
                  Ban
                </h3>
                <i
                  className="fa fa-ban"
                  aria-hidden="true"
                  style={{
                    fontSize: ".8em",
                    color: "red",
                    marginTop: "8px",
                  }}
                ></i>
              </div>
              <button
                className="btn btn-success"
                style={{
                  width: "20%",
                  height: "auto",
                  padding: "0",
                  margin: "0",
                  fontSize: ".8em",
                  position: "absolute",
                  right: "0",
                }}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
