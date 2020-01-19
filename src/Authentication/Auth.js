import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "./Context";
import { useContext, useEffect } from "react";

const setSession = (token, tokenKey) => {
  if (token) {
    localStorage.setItem(tokenKey, token);
    axios.defaults.headers.common[tokenKey] = token;
  } else {
    localStorage.removeItem(tokenKey);
    delete axios.defaults.headers.common[tokenKey];
  }
};

export const useAuth = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    tokenKey,
    mainPageUrl,
    loginUrl
  } = useContext(AuthContext);
  const history = useHistory();

  function login(token) {
    setSession(token, tokenKey);
    setIsAuthenticated(true);
    history.push(mainPageUrl);
  }
  function logout() {
    setSession(null, tokenKey);
    setIsAuthenticated(false);
    history.push(loginUrl);
  }

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (token && !isAuthenticated) {
      login(token);
    }
  }, []);

  return { login, logout, isAuthenticated };
};
