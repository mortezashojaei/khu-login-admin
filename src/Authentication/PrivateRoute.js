import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, loginUrl } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: loginUrl,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
