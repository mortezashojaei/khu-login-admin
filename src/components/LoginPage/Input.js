import React from "react";

const Input = props => {
  return (
    <div className="wrap-input validate-input">
      <input className="input" {...props} />
      <span className="focus-input"></span>
      <span className="label-input">{props.label}</span>
    </div>
  );
};

export default Input;
