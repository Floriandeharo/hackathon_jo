import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

import App from "./routes/root";
import ErrorPage from "./error-page";
import Data from "./routes/data";
import Analysis from "./routes/analysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jeux-olympiques-donnees",
    element: <Data />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jeux-olympiques-analyses",
    element: <Analysis />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
