import { createContext, useEffect, useState } from "react";
import { checkLogin } from "../util/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    async function checkAuth() {
      const res = await checkLogin();
      setIsAuthenticated(res);
    }
    checkAuth();
  }, []);

  function contextLogin() {
    setIsAuthenticated(true);
  }
  function contextLogout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, contextLogin, contextLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
