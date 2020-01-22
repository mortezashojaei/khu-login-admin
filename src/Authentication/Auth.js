import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
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
  const location = useLocation();

  function login(token) {
    setSession(token, tokenKey);
    setIsAuthenticated(true);
    let { from } = location.state || { from: { pathname: mainPageUrl } };
    history.replace(from);
  }
  function logout() {
    setSession(null, tokenKey);
    setIsAuthenticated(false);
    history.push(loginUrl);
  }

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      logout();
    }
  }, []);

  return { login, logout, isAuthenticated };
};
