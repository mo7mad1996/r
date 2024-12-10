import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  direction: "rtl",
  palette: {
    colors: {
      mainGreen: "#008C5D",
      website: "#007A4A",
      darkIcons: "#232222",
      greyLabels: "#656667",
      iconsBlack: "#3B3A3A",
      mainRed: "#D60101",
      mainBlack: "#000000",
      greyStrock: "#505050",
      wi8: "#FFFFFF",
      liteGrey: "#F8F9FB",
    },
  },
  typography: {
    fontFamily: ["Almarai", "Poppins", "Roboto", "sans-serif"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
