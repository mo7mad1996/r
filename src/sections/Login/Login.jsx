import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  ConfirmButton,
  FormItem,
  StyledTextField,
} from "../../components/FormElements";

import SectionTitle from "../common/Products/SectionTitle";

import faceImage from "../../assets/login/face.png";
import googleImage from "../../assets/login/google.png";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F6F6F6",
  width: "658px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
  borderRadius: "15px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    height: "100px",
  },
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "31px",
  color: "#292D32",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.colors.mainGreen,
}));
const Login = ({ seller = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <SectionTitle sectionTitle={{ main: "تسجيل دخول" }} />
      <Stack gap="31px" alignItems={"center"} mt={"-75px"}>
        <StyledBox>
          <Box component="img" src={googleImage} />
          <StyledTypography sx={{}}>
            تسجيل الدخول بواسطة Google
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <Box component="img" src={faceImage} />
          <StyledTypography sx={{}}>
            تسجيل الدخول بواسطة Facebook
          </StyledTypography>
        </StyledBox>
      </Stack>
      <Typography
        sx={{
          fontSize: { xs: "32px", sm: "40px" },
          fontWeight: "800",
          lineHeight: "45px",
          color: "colors.mainGreen",
          my: "74px",
          textAlign: "center",
        }}
      >
        تسجيل دخول عبر البريد الألكتروني
      </Typography>
      <Stack
        sx={{
          position: "relative",
          px: { xs: "15px", sm: "45px" },
          gap: { xs: "50px", sm: "61px" },
          width: { lg: "fit-content" },
          mx: { xs: "auto" },
          //   , lg: "0"
          alignItems: { md: "center", lg: "end" },
          //   left: { xl: "50%" },
          //   transform: { xl: "translateX(-50%)" },
        }}
      >
        <FormItem sx={{ gap: { lg: "54px" } }}>
          <StyledTypography>البريد الألكترونى أو رقم الهاتف</StyledTypography>
          <StyledTextField></StyledTextField>
        </FormItem>
        <FormItem sx={{ gap: { lg: "54px" } }}>
          <StyledTypography>كلمة المرور</StyledTypography>
          <StyledTextField
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></StyledTextField>
        </FormItem>
        <StyledLink
          to={"/password-restore"}
          sx={{
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "25px",
            mt: "-39px",
            color: "colors.darkIcons",
          }}
        >
          نسيت كلمة المرور
        </StyledLink>
      </Stack>
      <Box
        sx={{
          width: "fit-content",
          mx: "auto",
          mb: "100px",
        }}
      >
        <ConfirmButton
          sx={{
            mt: "71px",
          }}
          onClick={() => changeForm(1)}
        >
          استمرار
        </ConfirmButton>
        <Typography
          sx={{
            width: { xs: "340px", sm: "410px" },
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "24.55px",
            color: "colors.darkIcons",
            my: "21px",
            display: "flex",
            gap: "5px",
          }}
        >
          ليس لدى حساب
          {!seller && <StyledLink to={"/signup"}>إنشاء حساب جديد </StyledLink>}
          {seller && (
            <StyledLink to={"/signup-seller"}>إنشاء حساب بائع جديد </StyledLink>
          )}
        </Typography>
      </Box>
    </>
  );
};

export default Login;
