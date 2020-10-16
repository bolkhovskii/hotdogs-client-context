import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./controllers/auth/auth";
import { AuthContext } from "./context/AuthContext";
import { useRoutes } from "./routes";
import { Navbar } from "./components/Navbar";

function App() {
  const { login, logout, token } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
