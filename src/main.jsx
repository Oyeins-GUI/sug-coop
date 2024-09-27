import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import ContactUs from "./pages/Contact/index.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   { path: "/about", element: <About /> },
   { path: "/contact-us", element: <ContactUs /> },
]);

createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />
);
