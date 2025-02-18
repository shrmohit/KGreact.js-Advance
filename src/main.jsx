import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Createpost from "./components/Createpost.jsx";

//router
// createBrowserRouterit is to create router
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/createpost",
    element: <Createpost />,
  },
]); // this is default path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> // Rp is import as a components and pass
    router to routing
  </StrictMode>
);
