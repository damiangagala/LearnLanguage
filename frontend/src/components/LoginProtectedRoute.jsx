import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkLogin } from "../util/api";

function LoginProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await checkLogin();
      setIsAuthenticated(res);
    };
    checkAuth();
  }, []);

  // if (isAuthenticated === null) {
  //   return "loading...";
  // }

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  if (isAuthenticated === false) return children;
}

export default LoginProtectedRoute;
