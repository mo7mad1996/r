import React, { useState } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const UserProfilePage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowNewPasswordConfirm = () =>
    setShowNewPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <SectionTitle sectionTitle={{ main: "الملف الشخصى" }} />
      <Box sx={{ mb: "85px", mx: "auto", width: "fit-content", px: "15px" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "31px",
            color: "colors.website",
            mb: "23px",
          }}
        >
          تفاصيلك{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "26.78px",
            color: "colors.greyLabels",
          }}
        >
          من هنا يمكنك تعديل بياناتك الشخصية عندما تنتهي اضغط علي حفظ .{" "}
        </Typography>
      </Box>
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
          <StyledTypography>رقم الهاتف</StyledTypography>
          <StyledTextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isVerified && (
                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "700",
                        lineHeight: "24.55px",
                        letterSpacing: "0em",
                      }}
                    >
                      تم التحقق
                    </Typography>
                  )}
                </InputAdornment>
              ),
            }}
          ></StyledTextField>
        </FormItem>
        <FormItem>
          <StyledTypography>البريد الألكتروني</StyledTypography>
          <StyledTextField></StyledTextField>
        </FormItem>
      </Stack>
      <Stack
        sx={{
          position: "relative",
          px: { xs: "15px", sm: "45px" },
          gap: { xs: "50px", sm: "64px" },
          width: { lg: "fit-content" },
          mx: { xs: "auto" },
          //   , lg: "0"
          alignItems: { md: "center", lg: "end" },
          //   left: { xl: "50%" },
          //   transform: { xl: "translateX(-50%)" },
        }}
      >
        <Typography
          sx={{
            width: "100%",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "31px",
            textAlign: "center",
            marginTop: "58px",
            /* text-align: right; */
          }}
        >
          تغيير كلمة المرور
        </Typography>

        <FormItem>
          <StyledTypography> كلمة المرور الحالية</StyledTypography>
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
          <StyledTypography> كلمة المرور الجديدة</StyledTypography>
          <StyledTextField
            type={showNewPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></StyledTextField>
        </FormItem>
        <FormItem>
          <StyledTypography>تأكيد كلمة المرور الجديدة </StyledTypography>
          <StyledTextField
            type={showNewPasswordConfirm ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPasswordConfirm}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showNewPasswordConfirm ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
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
            mt: "168px",
          }}
          onClick={() => changeForm(1)}
        >
          حفظ
        </ConfirmButton>
      </Box>
    </>
  );
};

export default UserProfilePage;
