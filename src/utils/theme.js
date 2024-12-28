import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
