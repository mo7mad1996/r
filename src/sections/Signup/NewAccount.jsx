import React, { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import SectionTitle from "../common/Products/SectionTitle";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const NewAccount = ({ changeForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ mb: "100px" }}>
        <SectionTitle sectionTitle={{ main: "إنشاء حساب جديد" }} />
        <Stack
          sx={{
            position: "relative",
            px: { xs: "15px", sm: "45px" },
            gap: { xs: "50px", sm: "104px" },
            width: { lg: "fit-content" },
            mx: { xs: "auto" },
            //   , lg: "0"
            alignItems: { md: "center", lg: "end" },
            //   left: { xl: "50%" },
            //   transform: { xl: "translateX(-50%)" },
          }}
        >
          <FormItem>
            <StyledTypography>الأسم الأول</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>اسم الأب</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>اسم الجد او اللقب</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>المحافظة</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>المدينة</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>اسم الشارع</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>رقم العقار او اسم العقار</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>رقم الشقة</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>رقم الهاتف</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>البريد الألكتروني</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
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
          <FormItem>
            <StyledTypography>تعليمات خاصة بالعنوان (أختيارى)</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
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
            تسجيل
          </ConfirmButton>
          <Typography
            sx={{
              width: { xs: "340px", sm: "410px" },
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "27px",
              color: "#000000",
              my: "21px",
            }}
          >
            مع الضغط علي تسجيل أؤكد اني قرأت واوافق علي{" "}
            <Link underline="none">شروط وأحكام </Link>
            جوملا
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NewAccount;
