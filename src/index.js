import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
// import { ThemeProvider } from '@material-tailwind/react';
import RouterList from "./routes/RouterList";
import { AuthProvider } from "./components/protected/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      {/* <ThemeProvider> */}
      <RouterList />
      {/* </ThemeProvider> */}
    </AuthProvider>
  </React.StrictMode>
);
