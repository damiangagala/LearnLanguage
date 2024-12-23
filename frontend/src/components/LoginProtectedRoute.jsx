import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

function LoginProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

export default LoginProtectedRoute;
