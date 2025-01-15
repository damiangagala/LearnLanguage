import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkLogin } from "../util/api";

function AdminProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await checkLogin();
      setIsAuthenticated(res);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return "loading";
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminProtectedRoute;
