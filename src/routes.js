import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Main } from "./components/Main";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/dishes" exact>
          <Main />
        </Route>
        <Redirect to="/dishes" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};
