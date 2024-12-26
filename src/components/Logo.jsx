import { Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoBox = styled(Typography)(({ theme, secondary }) => ({
  fontSize: "2em",
  fontWeight: 800,
  lineHeight: secondary ? "39px" : "1",
  letterSpacing: "0em",
  textAlign: "right",
  color: "#292D32",
  cursor: "pointer",
}));
const LogoSpan = styled("span")(({ theme }) => ({
  color: theme.palette.colors.mainGreen,
}));

const Logo = ({ secondary }) => {
  const navigate = useNavigate();

  return (
    <LogoBox onClick={() => navigate("/")} secondary={secondary}>
      <LogoSpan>چ</LogoSpan>وملا
    </LogoBox>
  );
};

export default Logo;
