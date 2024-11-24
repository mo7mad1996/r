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
  const [showPassword, setShowPassword] = useState(false);
  let { userName, setUserName ,baseUrl} = useContext(Context);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle OAuth login
 
  

  

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("البريد الإلكتروني أو رقم الهاتف مطلوب")
        .matches(
          /^(\d{10}|\S+@\S+\.\S+)$/,
          "أدخل رقم هاتف صحيح أو بريد إلكتروني صالح"
        ),
      password: Yup.string()
        .min(8, "يجب أن تكون كلمة المرور مكونة من 8 أحرف على الأقل")
        .required("كلمة المرور مطلوبة"),
    }),
    onSubmit: async (values) => {
      console.log(values.username);
      console.log(values.password);
      try {
        const response = await axios.post(
          "https://joumla.store/api/v1/user/login",
          {
            username: values.username,
            password: values.password,
          }
        );
        console.log("تم تسجيل الدخول بنجاح:", response.data);
        console.log(response?.data?.user?.name);
        console.log(response?.data?.user.id);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("userId", response.data.user.id);

        setUserName(response?.data?.user?.name);

        navigate("/");
      } catch (error) {
        console.error(
          "حدث خطأ أثناء تسجيل الدخول:",
          error.response?.data || error.message
        );
      }
    },
  });



  const handleOAuthLogin = async (provider) => {
    try {
      // إرسال الطلب إلى API لتسجيل الدخول عبر OAuth
      const response = await axios.get(
        `${baseUrl}/auth/${provider}`,
       
      );
  
      console.log("OAuth response:", response.data);
  
  
      navigate("/dashboard"); 
    } catch (error) {
      console.error("خطأ أثناء تسجيل الدخول عبر OAuth:", error.response?.data || error.message);
  
      if (error.response) {
        console.error("حالة الخطأ:", error.response.status);
        console.error("تفاصيل الخطأ:", error.response.data);
      }
    }
  };
  return (
    <>
      <SectionTitle sectionTitle={{ main: "تسجيل دخول" }} />
      <Stack gap="31px" alignItems={"center"} mt={"-75px"}>
        <StyledBox onClick={() => handleOAuthLogin("google")}>
          <Box component="img" src={googleImage} />
          <StyledTypography>تسجيل الدخول بواسطة Google</StyledTypography>
        </StyledBox>
        <StyledBox onClick={() => handleOAuthLogin("facebook")}>
          <Box component="img" src={faceImage} />
          <StyledTypography>تسجيل الدخول بواسطة Facebook</StyledTypography>
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
            <StyledTypography>البريد الألكترونى أو رقم الهاتف</StyledTypography>
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
            <StyledTypography>كلمة المرور</StyledTypography>
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
            ليس لدى حساب
            {!seller && (
              <StyledLink to={"/signup"}>إنشاء حساب جديد </StyledLink>
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
