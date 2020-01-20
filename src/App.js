import React from "react";
import "./App.css";
import "./utils/utils.css";
import Login from "./components/LoginPage";
import MainPage from "./components/MainPage";
import SectionCrud from "./components/SectionCrud/SectionCrud"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Authentication/PrivateRoute";
import AuthenticatedHeader from "./components/AuthenticatedHeader";
import AuthProvider from "./Authentication/AuthProvider";
import Interceptor from "./Interceptor";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Interceptor>
          <AuthenticatedHeader />
          <Switch>
            <PrivateRoute path="/main">
              <MainPage />
            </PrivateRoute>
            <PrivateRoute path="/sections">
              <SectionCrud />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Login />
            </Route>
          </Switch>
        </Interceptor>
      </AuthProvider>
    </Router>
  );
}
