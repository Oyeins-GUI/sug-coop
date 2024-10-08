import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import ContactUs from "./pages/Contact/index.jsx";
import RegCertificate from "./components/RegCertificate/index.jsx";

const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "/about", element: <About /> },
   { path: "/contact-us", element: <ContactUs /> },
   { path: "/registration", element: <RegCertificate /> },
]);

createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />
);
