import { createBrowserRouter } from "react-router";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  // Public pages
  {
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },

  // Auth pages
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // Dashboard / Protected pages
  
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
]);
