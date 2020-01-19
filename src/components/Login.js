import React from "react";
import RightSide from "./RightSide/index";

const Login = (props) => {
  return (
    <div className="limiter">
      <div className="container-login">
          <RightSide {...props} />
        </div>
    </div>
  );
};

export default Login;
