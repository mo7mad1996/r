import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { CallOutlined } from "@mui/icons-material";
import SectionTitle from "../common/Products/SectionTitle";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";

const  RegisterNumber = ({ changeForm }) => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "ما هو رقم هاتفك ؟" }} />
      <Stack
        sx={{
          position: "relative",
          px: { xs: "15px", sm: "45px" },
          //   gap: { xs: "50px", sm: "52px" },
          gap: "52px",
          width: { lg: "fit-content" },
          mx: { xs: "auto" },
          //   , lg: "0"
          alignItems: { md: "center", lg: "end" },
          //   left: { xl: "50%" },
          //   transform: { xl: "translateX(-50%)" },
        }}
      >
        <FormItem>
          <StyledTextField
            disabled
            // dir="ltr"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start" sx={{ pl: "10px" }}>
                  <Box
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "22px",
                      color: "#292D32",
                    }}
                  >
                    +20 Egypt
                  </Box>
                  <CallOutlined
                    sx={{ width: "28px", height: "28px", mr: "3px" }}
                  />
                </InputAdornment>
              ),
            }}
          ></StyledTextField>
        </FormItem>
        <FormItem>
          <StyledTypography>رقم الهاتف</StyledTypography>
          <StyledTextField></StyledTextField>
        </FormItem>
      </Stack>
      <Typography
        sx={{
          color: "colors.greyLabels",
          width: { xs: "80%", md: "800px", lg: "550px", xl: "635px" },
          mt: "23px",
          mx: "auto",
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "27px",
        }}
      >
        بالضغط علي (ارسال رمز التأكيد) أدناه , سنرسل لك رسالة قصيرة لتأكيد رقم
        هاتفك في الشاشة التالية.
      </Typography>
      <Box
        sx={{
          width: "fit-content",
          mx: "auto",
          mb: "100px",
        }}
      >
        <ConfirmButton
          sx={{
            my: "52px",
          }}
          onClick={() => changeForm(2)}
        >
          إرسال رمز التأكيد
        </ConfirmButton>
      </Box>
    </>
  );
};

export default RegisterNumber;
