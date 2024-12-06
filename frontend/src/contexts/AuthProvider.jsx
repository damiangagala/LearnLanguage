import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
