import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./routes/Welcome.jsx";
import Home from "./routes/Home.jsx";
import Error from "./components/Error.jsx";
import { mainLoader } from "./util/api.js";
import Login from "./routes/Login.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import Admin from "./routes/Admin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminProvider from "./contexts/AdminProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: ":language/:type",
    element: <Home />,
    loader: mainLoader,
    errorElement: <Error />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute>
        <AdminProvider>
          <Admin />
        </AdminProvider>
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
