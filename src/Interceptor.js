import { useEffect } from "react";
import { useAuth } from "./Authentication/Auth";
import axios from "axios";

const Interceptor = ({ children }) => {
  const { logout } = useAuth();

  useEffect(() => {
    axios.interceptors.response.use(null, error => {
      if (error.response.data.error == 50 || error.response.data.error == 51) {
        logout();
      }
    });
  }, []);
  return children;
};

export default Interceptor;
