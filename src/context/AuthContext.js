import { createContext } from "react";

function oops() {}

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  login: oops,
  logout: oops,
});
