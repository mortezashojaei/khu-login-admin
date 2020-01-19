import React from "react";
import { useAuth } from "../Authentication/Auth";

export default function AuthenticatedHeader() {
  const { logout, isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="welcome">
      <div className="welcome-message">
        <div>به پنل مدیریتی خوش آمدید</div>
        <div className="dis-flex">
          <button
            className="m-l-r-auto crud-button crud-button--negative"
            onClick={logout}
          >
            خروج
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
