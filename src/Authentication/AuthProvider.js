import AuthContext from "./Context";
import { useState } from "react";
import React from "react";

const AuthProvider = ({
  children,
  tokenKey = "jwt",
  mainPageUrl = "/main",
  loginUrl = "/login"
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        tokenKey,
        mainPageUrl,
        loginUrl
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
