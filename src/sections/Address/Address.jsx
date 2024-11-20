import React from "react";
import { Box, Stack } from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";

const Address = () => {
  return (
    <>
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
          <StyledTypography>الدور</StyledTypography>
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
            mt: "70px",
          }}
        >
          تسجيل
        </ConfirmButton>
      </Box>
    </>
  );
};

export default Address;
