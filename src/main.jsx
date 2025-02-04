import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "~/utils/theme";

// css
import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "swiper/css";
import "swiper/css/navigation";

// css
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

// components
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
