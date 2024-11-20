import React from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import SectionTitle from "../common/Products/SectionTitle";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input": {
    width: "131.23px",
    height: "113px",
    borderRadius: "15px",
    backgroundColor: "#F6F6F6",
    fontSize: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    "& input": {
      width: "100px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& input": {
      width: "50px",
      height: "80px",
      fontSize: "30px",
    },
  },
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "141px",
  height: "57.43px",
  // padding: "25px 94px",
  borderRadius: "15px",
  backgroundColor: theme.palette.colors.mainGreen,
  fontSize: "24px",
  fontWeight: "800",
  lineHeight: "27px",
  "&:hover": {
    backgroundColor: theme.palette.colors.mainGreen,
  },
}));
const VerifyNumber = ({ changeForm }) => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "أدخل الرمز" }} />
      <Box
        sx={{
          maxWidth: "577px",
          mx: "auto",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "300",
          lineHeight: "28px",
          mt: "-90px",
        }}
      >
        <Typography>لقد أرسلنا رمز من اربع عناصر الي </Typography>
        <Typography>xxxxxxxxxxx</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "10px", sm: "25px", md: "72px" },
          justifyContent: "center",
          mt: "77px",
        }}
      >
        <StyledTextField
          type="text"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]", // Restrict input to a single digit
            maxLength: 1, // Limit input length to 1 character
          }}
        ></StyledTextField>
        <StyledTextField
          type="text"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]", // Restrict input to a single digit
            maxLength: 1, // Limit input length to 1 character
          }}
        ></StyledTextField>
        <StyledTextField
          type="text"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]", // Restrict input to a single digit
            maxLength: 1, // Limit input length to 1 character
          }}
        ></StyledTextField>
        <StyledTextField
          type="text"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]", // Restrict input to a single digit
            maxLength: 1, // Limit input length to 1 character
          }}
        ></StyledTextField>
      </Box>
      <Button
        variant="text"
        disableRipple
        sx={{
          display: "block",
          color: "#000000",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "33px",
          textAlign: "center",
          width: "fit-content",
          mx: "auto",
          my: "89px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        اعادة ارسال الرمز خلال 20 ثانية{" "}
      </Button>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "40px", sm: "60px" },
          justifyContent: "center",
          mb: "100px",
        }}
      >
        <StyledButton
          variant="contained"
          disableElevation
          sx={{ textTransform: "lowercase" }}
        >
          sms
        </StyledButton>
        <StyledButton variant="contained" disableElevation>
          واتس اب
        </StyledButton>
      </Box>
    </>
  );
};

export default VerifyNumber;
