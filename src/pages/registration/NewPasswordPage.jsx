import React, { useState } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import {
  Stack,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Typo = styled(StyledTypography)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    position: "relative",
    width: "355px",
    textAlign: "start",
    top: "0",
    transform: "translateY(0)",
    right: "0",
    maxWidth: "500px",
    // marginBottom: "52px",
  },
}));
const NewPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <SectionTitle sectionTitle={{ main: "تسجيل كلمة مرور جديدة" }} />
      <Stack
        sx={{
          position: "relative",
          px: { xs: "15px", sm: "45px" },
          gap: { xs: "50px", sm: "61px" },
          mx: { xs: "auto" },
          alignItems: { md: "center" },
        }}
      >
        <FormItem sx={{ justifyContent: "space-between", gap: { lg: "54px" } }}>
          <Typo>{t("Email Address or Phone Number")}</Typo>
          <StyledTextField></StyledTextField>
        </FormItem>
        <FormItem sx={{ justifyContent: "space-between", gap: { lg: "54px" } }}>
          <Typo>ادخل كلمة المرور الجديدة</Typo>
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
        <FormItem sx={{ justifyContent: "space-between", gap: { lg: "54px" } }}>
          <Typo>{t("Confirm Password")}</Typo>
          <StyledTextField
            type={showPasswordConfirm ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></StyledTextField>
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
        >
          {t("login")}
        </ConfirmButton>
      </Box>
    </>
  );
};

export default NewPasswordPage;
