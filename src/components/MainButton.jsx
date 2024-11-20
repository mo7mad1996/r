import { Button } from "@mui/material";
import React from "react";

const MainButton = ({ content, onClick }) => {
  return (
    <Button
      variant="contained"
      disableRipple
      sx={{
        backgroundColor: "colors.website",
        width: "212px",
        height: "60px",
        // display: "flex",

        color: "colors.wi8",
        fontSize: "20px",
        fontWeight: "800",
        lineHeight: "22px",
        textAlign: "right",
        p: "0",
        "&:hover": {
          backgroundColor: "#007a49b6",
        },
      }}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default MainButton;
