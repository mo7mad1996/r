import React from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import SectionTitle from "../common/Products/SectionTitle";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";

// الحقول المخصصة
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
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    digit1: Yup.string()
      .required(t("Required"))
      .matches(/^\d$/, "يجب أن يكون رقم"),
    digit2: Yup.string()
      .required(t("Required"))
      .matches(/^\d$/, "يجب أن يكون رقم"),
    digit3: Yup.string()
      .required(t("Required"))
      .matches(/^\d$/, "يجب أن يكون رقم"),
    digit4: Yup.string()
      .required(t("Required"))
      .matches(/^\d$/, "يجب أن يكون رقم"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const username = Object.values(values).join(""); // دمج الأرقام
    try {
      const response = await axios.post("https://api.example.com/verify", {
        username,
      });
      // التعامل مع الاستجابة
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

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
        }}
      >
        <Typography>لقد أرسلنا رمز من اربع عناصر الي </Typography>
        <Typography>xxxxxxxxxxx</Typography>
      </Box>
      <Formik
        initialValues={{ digit1: "", digit2: "", digit3: "", digit4: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", sm: "25px", md: "72px" },
                justifyContent: "center",
                mt: "77px",
              }}
            >
              {["digit1", "digit2", "digit3", "digit4"].map((field, index) => (
                <Field
                  key={index}
                  name={field}
                  as={StyledTextField}
                  type="text"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]",
                    maxLength: 1,
                  }}
                  error={touched[field] && Boolean(errors[field])}
                  helperText={touched[field] && errors[field]}
                />
              ))}
            </Box>
            <Button
              type="submit"
              variant="text"
              disableRipple
              disabled={isSubmitting}
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
              اعادة ارسال الرمز خلال 20 ثانية
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default VerifyNumber;
