import React from "react";
import { Link } from "react-router-dom";
import homePagePhoto from "../homePagePhoto.png";
import ConnectPhotos from "./ConnectPhotos";
import Features from "./Features";
import LoginInput from "./LoginInput";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-md-5">
          <h3 style={{ fontWeight: "bold" }}>
            Rep
            <span style={{ color: "#0f52ba" }}>suite</span>.
          </h3>

          <div
            className="text-center"
            style={{ padding: "20px", maxWidth: "70%", margin: "10px auto" }}
          >
            <h1
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "10px",
                fontSize: "2.5em",
              }}
            >
              Hey there 👋
            </h1>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "1em",
                marginBottom: "50px",
              }}
            >
              Welcome back to <span style={{ fontWeight: "bold" }}>Rep</span>
              <span style={{ color: "#0f52ba" }}>suite</span>.
            </h6>

            <LoginInput
              labelName="Email"
              inputType="email"
              placeholder="Enter Email..."
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#dfebee",
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                borderStyle: "none",
                marginBottom: "20px",
              }}
            />
            <LoginInput
              labelName="Password"
              inputType="password"
              placeholder="Enter Password..."
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#dfebee",
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                borderStyle: "none",
              }}
            />
            <p
              style={{ color: "#999999", fontSize: ".7em", textAlign: "left" }}
            >
              Use 8 or more characters to make a strong Password.
            </p>
            <Link
              to="/user/dashboard"
              style={{
                borderRadius: "12px",
                backgroundColor: "#fa002f",
                width: "55%",
                color: "#dfebee",
                margin: "10px 0",
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.4)",
                fontWeight: "500",
              }}
              className="btn"
            >
              Sign In
            </Link>
            <h6>
              <Link
                to="/singup"
                style={{
                  textDecoration: "none",
                  color: "#999999",
                  fontSize: ".9em",
                }}
              >
                New User? <span style={{ color: "blue" }}>Signup instead</span>
              </Link>
            </h6>

            {/* <hr style={{ width: "30%", float: "left" }} /> */}
            <p
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontWeight: "400",
                marginTop: "20px",
              }}
            >
              Or continue with
            </p>
            {/* <hr style={{ width: "30%" }} /> */}

            <ConnectPhotos imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX////qQzU0qFNChfT7vAUxffTQ4PI4gPSdu/j7ugCxyPrqQDH7uAD/vQAwp1DpOSkaokPpLhr86ejpMyHqPS4ho0fpNyZDg/zpLBb8wgAcokT4yMX7393zoJo9gvQzqkPy+fT97+7xjYbymZPrSDr3vrvsWk/tYVf+6sFSsmrW69vm8+l8woyf0arI5M6t2Lf1tbH0qKPrUUXucmr50c/whH38yVHpNzf81X+50fD80XFRkuj92oxBhvD//PPm7/ZNju2Qy55tvIC838RFrmDO6NTtaWDwhn/94Jv4pw3uZjn95a/yhzT3piftXDvxfjf1lzH+9uHxgDj5sx78xkD926L7wShsn+2tyfGPsvX+8tWVuex0perk15b8zWOMsDxTq03S3vyZuPjOtyepszZ1rkbjuhu5tTFsrkqztTSLsUM/jNk8lbU4nok1pWM+kcY6m5s2o3A7mKg3oH1Ai9w8k7s5nY4txSLFAAAK70lEQVR4nO2b+XfbxhGAIYiyIoMEAQFgKR4SKFKSSYoiKUq5bNniIcmNm+ZqZDt10yRt0jttev39xcGb2MXuAnvA5fdTXt6zgc8zOzO7WErSmjVr1qxZs2ZNTFRKxaNOt3roUi13u0fFi9JuhfdbxULpqHx5cp7VdcPI5bITcjnDMPRc7aRXPirxfkViKhfdy1peN7KmomwEoyhm1tDztctO4jQrxcNzJ2gmSG1J1MzpuZPyBe+3RqZUPs4bWTS5Oc2sYfQ6CViaF9UNHdtugpkzTrq7vBVglKo1cr1xKHP5W1EjWemeR9WbSOo9Addk6dLIxaHnY+rnXd5GixSP82Zseh5Oth6Kk6ydcyO+8M3IGndiVJ1OjYqf55i/5O94RCd+U0edc65eHFP18x3L/PwqlzptP5dcrchJsGtkGfg5KHqPR6penBts/FzMPPv2WM2zSNAZxjHbDVaplmPq56AwDWOZSYVZxjhhtRp3TxiuwHlM/YiJYDEX8wiKgX7IQLCc5+bnkDumPsb1OGXoBNOg2/4r54yaPIR8h6JgieMSnKHfURMscmkSKyh5Wmuxw7XGTFEUWoJdQQSztATLOm83D8WkJVhdCzKBnuBbn6JdQQSpFZkjQaootTZxIUgEc7QEdwWJILU1KNXEGNWorUHplv9uYoNqBKuc94M+FAWLQixCioKVGA8NFcU0x9dpTMRLGvQFpeNYdrz+rZmN28u7arXcLVcP7y5Pcv5NG6Q/Tq/ISIcxhNCRq/XKxZWXrJSK3d6GHn5qQDOCkVu9ktXNw1W5OUqdXsjdG3qN3gFvtayQ1Y/LKB8bLg4VAxhJmhGU7qJ0QsXIVdHfrdjLBweS5hqULiI0ClM/xjyAr5SVgM/JVCMYYVoz9VuSGz+djeXpgmoEpTJpHVXI/Fw62YWFQVdwl7SORvvqXp07kqWbotItWa9X8hFvTpSOJ6lKN4JSkSyERgyfhrp+GClHUDonKTORA+hTOs+53YauYIdkz5StxXWZwFmNlCMobRCE0OjF9/wjyhGUugSdIp4MZQXBVd88m0sEMfH85zVMP0UX8NoyhFQq9dF7WIJGsn4R8iKdSu39AkMxaYLS/Y4TxL2P0TM1aYKPnBC6iulfIoYxn6w1KEnv7qR89j5BUkxWFXX4LJ2asPcxgqJR5f3GuDzZSc0UvwjN1GyMkwwjUguEZapS4/2+2DxKLyl+ClXMJ6yMOny9k1pS/KIGdjQSNYx6PF0WTMEGHPOE9/vi8yIdYAgccKhdMKPISpKO20bggJNLXo5KT4NCCMrUBNbR1UoKzVSd1491ovB+YJIGZ6p5y/ttSUiBDVdGcT15rXBhJg10/HxO0UzeuObwJdzQGXDmOkUSQwjoFfOK01FcSWCzl5an7mDH8ShO+WcPlAhZhpNM9RSzvF+WiMCRLSBTnbaRTeA4I0G74SIfvacncCJ1+BWq4d6nyawzElKS+nxJ/JBnD+jyDPJspELjk/6M2PDhFl0eQ54NHruX2UkRC0oPtzepsg959nN0w/fFNdyCpOmHqIUmlX4ksOEH4Gcjl9JU+qm4htvvgJ8N2zotJuk9uSD9dfgS+OjAY7Zgww8FNty8Bj4avVmkn4tsuAV89Ffohl8JbQgspujtMEK/Z2H4LejRaDsLzzCCIH3D7VegRyM3/CgTDQvDX4Me/QS5WbwrtuFr0KORd4c7XwttCG6IyENbpHbIwBC4u0A3fCK24fXbbrh59f9riF5pBDfcjG4YYf+7NoyDGLJU7G4BNnyCPLUJ3vGvQY9Gn0vFntrAhsh7i0iHGDxnGozjUrENgXMpxg44wlEbA8M3oEe/LacY4N0T+LbQimGEA2GeO2CM08QoYxvHUwyME+Eo7YL+SRT4WB/5VD/SQQ19wwfAZ4feNZkS5TiR43kp+lFUKv1CZEPws9EPTKPM3tQNgYM3TkOMMtVQ//YE+cyN3hCj9HzqhsCRRsJoF6n0b4Q13H4IeThqMc1kfjsiN9zaJmEf1RD2lRt1h5i5/0bWmqSG3373DgmvURVhNxUQdxeZ38myrPZJDQn5YAvV0Ib8LSilxslQ2cVipTbmNeLyBe/wPe5DF2Im9UfZNxyyMZtwjRjCfeDeySP0uC3zgzxGJa81JDxDTVLIzsIlbCFmfi9P0W4YyXm8Qu0xkLnbBb4QM6nvZ4KyWmck5/EStZTCrrW5wDZQswxlH0TkJIXNbB6Q7UXmD4uCTIOInKTgI4wxwOE7k/mzvIzGrpxeI/d7+DKUgL9HyPzwzYqgrMos5FweoCYpvN97BPcLb4xZxWI12KDXmbBlGNwvJmPMKuTTKRbIdQa+sRgTIHgfkKFMi80b9I0FbOwes5KmgAwd52mLvh/GKoSdYExZqqaZ+TEmKE8b1AWlx8ghhN0PnrEwfU8HbWCeyjZlP/R9E0qvcJnfBi+PMUGKA8qCNrIfWpIuzKaZP4UK0m8ZL9HPddCSdHZzKJP5PtzPXYptmoIYOYqYpNNag5ChE8UzeoLorXATdod9CW+DsTJowxTpFVTkgXQTrd37OHNN0KDNQxFjEaLMpFPuIWMMU8U3ODkKPexe4gVsjAEo0liL3+EIItcZD6eRYyvGX1FfYwmGHCMuMSxgG8pa3H3xJZYg/DR/lRF+EGUr3unmMZ4g4jwzhSSITmrHV2+eXWF+ogo5J12lThBEWdXi2ky9wgzgJvjaLIgbjcDQydR6LLt+zCVIEkJJGpAEMZ4wDq9+hh1BzFXo0iRZiV4Y5WiHjI26Jv8FV3ELP4SS1LIIFdVCnfw0vHmqqbJ68FdMRYIQSmQdY+yo1clGHM/P5eBv+xgjN24vnNAgKzZjxxF+rt4MtOk/qvXjNXoYIT9uhtMnzVPP0bL6OO2x2ZIL80mjHvwdWRHlDDEYgvF0QVIbtdCaR7NV16zlhx38A1FxK+xrDJgoeeo7Wpp1OoRbNtqn1qqep/jTFdJiJCszPsT1dNFSHrTOmvbyX243b9r9uhps5/9RpLaBtWtagWh4W31TZ1FqmlUfnPb7rVar3z8d1Efu/7FU+N+P0jbA17qRsGMI4pyoq2q5XmqI2pSDf22GZGqUHHU5i7oUo2L9+G9oGKPlqEuklhEH8LYR+lUbgQFvRbdtgDIV7+gCBPn0FhfWT9eA/fA+ca+fxwaXc1aoanDbiL4IfRqkG6kYOfhngCLRnikQ7gVVDmwbWxhHwGEMBVC0RkttYzv83gUGbQEU1YP/zCvGU0ZntARQlA/+O7vuvX8VSxkVTdHZF0/aRjx9QjxF1RoPONvxCwqiOG4b2zE1wiVEKDfuvnhzm0KK+pxp3Kcb2RtwaAk60w3/Ac69Q0/zvqAtwBhO+7Yg781UgfYdLGdLzLXexP6lOYgzfotRZXS13K5zylSLao1ZoM+lbWinrPwcGjLzMLLK0Cmsw1gY2GwFnTCOGIZRpXvFE0SLVRhVjX0AfZoDJo6WTPECaxg39QJtx/gu6RAypLscVe3U5ivo0FapDTmOH7MeD6UtU8lVYfxchqO4a45qaX1x/Fwap1aMyaoWRi2bt9IKdjumQDrhG3DsD1AafTXqinT06m2btwiMG0eSOF1VqzBqi7X6Aml4939wLR07a5AEPR972B85b4yoqTqpqdZbDH7KGC/2TWsg+5dmQKKqf9NmFHZvSmTsxrDlXw8qWJO7NP5/FJxMHtVPW8PEhS4Q227eDNvudSiXVqs9PLtp2jbv11qzZs2aNWvWvDX8D7tUr2lS+uu6AAAAAElFTkSuQmCC" />
            <ConnectPhotos imageUrl="data:image/png;base64,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" />
          </div>
        </div>
        <div className="col-md-7" style={{ backgroundColor: "#0f52ba" }}>
          <div className="text-center">
            <img src={homePagePhoto} style={{ marginTop: "100px" }} />
            <Features
              iconName="fa fa-comment"
              feature="Fully Automated Comment Moderation"
            />

            <Features
              iconName="fa fa-refresh"
              feature="Take a backseat while we automate your repo"
            />
            <Features
              iconName="fa fa-dollar"
              feature="Start with a free trial"
            />
            <Features
              iconName="fa fa-thumbs-up"
              feature="Best SAAS in the industry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
