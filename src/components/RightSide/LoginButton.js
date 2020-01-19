import React from "react";

const LoginButton = props => {
  return (
    <div className="container-login-form-btn">
      <button {...props} className="login-form-btn">
        ورود به حساب کاربری
      </button>
    </div>
  );
};

export default LoginButton;
