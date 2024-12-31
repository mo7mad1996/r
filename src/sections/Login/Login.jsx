import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import {
  ConfirmButton,
  FormItem,
  StyledTextField,
} from "../../components/FormElements";

import SectionTitle from "../common/Products/SectionTitle";

import faceImage from "../../assets/login/face.png";
import googleImage from "../../assets/login/google.png";
import { Context } from "../../components/Context/Context";
import { useTranslation } from "react-i18next";

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
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  let { setUser, baseUrl } = useContext(Context);
  const [error, setError] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle Google OAuth login
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/auth/google`);
      // window.location.href = response.data.url; // Redirect to Google login page
    } catch (error) {
      console.error("Error during Google login request:", error);
    }
  };

  // Handle Facebook OAuth login
  const handleFacebookLogin = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/auth/google`);
      // window.location.href = response.data.url; // Redirect to Facebook login page
    } catch (error) {
      console.error("Error during Facebook login request:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(t("Email Address or Phone Number") + t("Required"))
        .matches(/^(\d{10}|\S+@\S+\.\S+)$/, t("valid username")),
      password: Yup.string()
        .min(8, t("valid password"))
        .required(t("Password") + t("Is Required")),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseUrl}/user/login`, values);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setUser(response?.data?.user);
        navigate("/");
      } catch (error) {
        console.error(
          t("login error"),
          error.response?.data?.message || error.message
        );
        setError(error.response?.data?.message || error.message);
      }
    },
  });

  return (
    <>
      <SectionTitle sectionTitle={{ main: "login" }} />
      <Stack gap="31px" alignItems={"center"} mt={"-75px"}>
        <StyledBox onClick={handleGoogleLogin}>
          <Box component="img" src={googleImage} />
          <StyledTypography>{t("login via")} Google</StyledTypography>
        </StyledBox>
        <StyledBox onClick={handleFacebookLogin}>
          <Box component="img" src={faceImage} />
          <StyledTypography>{t("login via")} Facebook</StyledTypography>
        </StyledBox>
      </Stack>
      <Box sx={{ color: "red", textAlign: "center", fontSize: 30, m: 4 }}>
        {error}
      </Box>
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
        {t("login by email")}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          sx={{
            position: "relative",
            px: { xs: "15px", sm: "45px" },
            gap: { xs: "50px", sm: "61px" },
            width: { lg: "fit-content" },
            mx: { xs: "auto" },
            alignItems: { md: "center", lg: "end" },
          }}
        >
          <FormItem sx={{ gap: { lg: "54px" } }}>
            <StyledTypography>
              {t("Email Address or Phone Number")}
            </StyledTypography>
            <StyledTextField
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </FormItem>
          <FormItem sx={{ gap: { lg: "54px" } }}>
            <StyledTypography>{t("Password")}</StyledTypography>
            <StyledTextField
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
            />
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
            {t("Forgot Password")}
          </StyledLink>
        </Stack>
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            mb: "100px",
          }}
        >
          <ConfirmButton sx={{ mt: "71px" }} type="submit">
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
            {t("I don't have an account")}{" "}
            {!seller && (
              <StyledLink to={"/signup"}>
                {t("Create a New Account")}
              </StyledLink>
            )}
            {seller && (
              <StyledLink to={"/signup-seller"}>
                إنشاء حساب بائع جديد{" "}
              </StyledLink>
            )}
          </Typography>
        </Box>
      </form>
    </>
  );
};

export default Login;
