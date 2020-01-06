import React, { useState } from "react";
import Input from "./Input";
import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";

const RightSide = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function sumbitLogin(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={sumbitLogin} className="login-form validate-form">
      <FormHeader />
      <Input
        onChange={e => setUsername(e.target.value)}
        type="text"
        name="id"
        label="نام کاربری"
      />
      <Input
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
        label="رمز عبور"
      />
      <LoginButton />
    </form>
  );
};

export default RightSide;
