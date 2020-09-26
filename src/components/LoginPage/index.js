import React, { useState } from "react";
import Input from "./Input";
import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import { useAuth } from "../../Authentication/Auth";
import { login as loginApi } from "../../API";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function loginWithApi() {
    loginApi({
      username,
      password,
    })
      .then((response) => {
        login(response.data.data);
      })
      .catch((error) => {
        alert("رمز عبور یا نام کاربری شما اشتباه است");
      });
  }

  function sumbitLogin(e) {
    e.preventDefault();
    loginWithApi();
  }
  return (
    <div className="limiter">
      <div className="container-login">
        <form onSubmit={sumbitLogin} className="login-form validate-form">
          <FormHeader />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="id"
            label="نام کاربری"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            label="رمز عبور"
          />
          <LoginButton disabled={!username || !password} />
        </form>
      </div>
    </div>
  );
};

export default Login;
