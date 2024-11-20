import React from "react";
import { Box, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const spin = keyframes`
      0% {
        opacity: 0;
        transform : rotate(0deg);
      }
      100% {
        opacity: 1;
        transform: rotate(360deg);
      }
    `;
const SpinnerBox = styled(Box)(({ theme }) => ({
  /*   for centering div */
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  /*   spinner div css */
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  border: "10px solid #ccc",
  borderTopColor: theme.palette.colors.website,
  animation: `${spin} 1s linear infinite`,
}));
const Spinner = () => {
  return (
    <Box sx={{ position: "relative", height: "50vh" }}>
      <SpinnerBox />
    </Box>
  );
};

export default Spinner;
