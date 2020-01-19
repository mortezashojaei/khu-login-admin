import React, { useState } from "react";
import Input from "./Input";
import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import axios from "axios";
import {useAuth} from "../../Authentication/Auth";
const RightSide = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth()

  async function loginWithApi() {
    axios
      .post("http://localhost:3000/api/v1/user/auth/admin", {
        username,
        password
      })
      .then(response => {
        login(response.data.data);
      })
      .catch(error => {
        alert("رمز عبور یا نام کاربری شما اشتباه است");
      });
  }

  function sumbitLogin(e) {
    e.preventDefault();
    loginWithApi();
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
      <LoginButton disabled={!username || !password} />
    </form>
  );
};

export default RightSide;
