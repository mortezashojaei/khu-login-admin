import React from "react";
import RightSide from "./RightSide/index";

const Main = () => {
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <RightSide />
          <div className="login-more"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
