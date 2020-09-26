import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication/Auth";

export default function AuthenticatedHeader() {
  const { logout, isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="dis-flex p-t-12 p-b-32">
      <button className="crud-button crud-button--negative m-r-12" onClick={logout}>
        خروج
      </button>
      <Link className="m-r-12" to="/sections">
        <button className="crud-button crud-button--primary ">
          مدیریت بخش ها
        </button>
      </Link>
      <Link className="m-r-12" to="/main">
        <button className="crud-button crud-button--primary ">
          مدیریت محتوا
        </button>
      </Link>
      <Link className="m-r-12" to="/active-sections">
        <button className="crud-button crud-button--primary ">
          مدیریت بخش های فعال
        </button>
      </Link>
    </div>
  ) : null;
}
