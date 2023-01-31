import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
