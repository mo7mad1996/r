import { Box, styled } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const StyledCheckbox = styled(Box)(({ theme, isProduct, single }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "45px",
  height: "45px",
  borderRadius: "5px",
  border: `${isProduct && !single ? "2" : "1"}px solid`,
  borderColor: theme.palette.colors.mainGreen,
  cursor: "pointer",
  "& svg": {
    color: theme.palette.colors.mainGreen,
    width: "55px",
    height: "55px",
  },
  zIndex: 1,
}));
const CustomCheckbox = ({ selected = false, single = false }) => {
  const { pathname } = useLocation();
  const isProduct = pathname.includes("-product");
  return (
    <StyledCheckbox isProduct={isProduct} single={single}>
      {selected && <CheckRounded />}
    </StyledCheckbox>
  );
};

export default CustomCheckbox;
