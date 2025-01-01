import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import SectionTitle from "../common/Products/SectionTitle";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";

const NewAccount = ({ changeForm }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Formik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      second_name: "",
      family_name: "",
      date_of_birth: "",
      governorate: "",
      city: "",
      street_name: "",
      residence_number: "",
      apartment_number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("First Name") + t("Required")),
      email: Yup.string()
        .email(t("The email is incorrect"))
        .required(t("Email") + t("Required")),
      phone: Yup.string().required(t("Phone Number") + t("Required")),
      password: Yup.string()
        .min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل")
        .required(t("Password") + t("Is Required")),
      password_confirmation: Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          t("Confirm Password") + "   غير متطابق"
        )
        .required(t("Confirm Password") + t("Is Required")),
      second_name: Yup.string().required(t("Father's Name") + t("Required")),
      family_name: Yup.string().required(
        t("Grandfather's Name or Surname") + t("Required")
      ),
      date_of_birth: Yup.date().required(t("Date of Birth") + t("Required")),
      governorate: Yup.string().required(t("Governorate") + t("Is Required")),
      city: Yup.string().required(t("City") + t("Is Required")),
      street_name: Yup.string().required(t("Street Name") + t("Required")),
      residence_number: Yup.string().required(t("Home Number") + t("Required")),
      apartment_number: Yup.string().required(
        t("Apartment Number") + t("Required")
      ),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://Joumla.store/api/v1/user/register",
          values
        );
        changeForm(1);
      } catch (error) {
        console.error(
          "خطأ أثناء التسجيل:",
          error.response?.data || error.message
        );
      }
    },
  });

  return (
    <>
      <Box sx={{ mb: "100px" }}>
        <SectionTitle sectionTitle={{ main: "Create a New Account" }} />
        <form onSubmit={formik.handleSubmit}>
          <Stack
            sx={{
              position: "relative",
              px: { xs: "15px", sm: "45px" },
              gap: { xs: "50px", sm: "104px" },
              width: { lg: "fit-content" },
              mx: { xs: "auto" },
              alignItems: { md: "center", lg: "end" },
            }}
          >
            <FormItem>
              <StyledTypography>{t("First Name")}</StyledTypography>
              <StyledTextField
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Father's Name")}</StyledTypography>
              <StyledTextField
                name="second_name"
                value={formik.values.second_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.second_name &&
                  Boolean(formik.errors.second_name)
                }
                helperText={
                  formik.touched.second_name && formik.errors.second_name
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>
                {t("Grandfather's Name or Surname")}
              </StyledTypography>
              <StyledTextField
                name="family_name"
                value={formik.values.family_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.family_name &&
                  Boolean(formik.errors.family_name)
                }
                helperText={
                  formik.touched.family_name && formik.errors.family_name
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Date of Birth")}</StyledTypography>
              <StyledTextField
                name="date_of_birth"
                type="date"
                value={formik.values.date_of_birth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.date_of_birth &&
                  Boolean(formik.errors.date_of_birth)
                }
                helperText={
                  formik.touched.date_of_birth && formik.errors.date_of_birth
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Governorate")}</StyledTypography>
              <StyledTextField
                name="governorate"
                value={formik.values.governorate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.governorate &&
                  Boolean(formik.errors.governorate)
                }
                helperText={
                  formik.touched.governorate && formik.errors.governorate
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("City")}</StyledTypography>
              <StyledTextField
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Street Name")}</StyledTypography>
              <StyledTextField
                name="street_name"
                value={formik.values.street_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.street_name &&
                  Boolean(formik.errors.street_name)
                }
                helperText={
                  formik.touched.street_name && formik.errors.street_name
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>
                {t("Building Number or Name")}
              </StyledTypography>
              <StyledTextField
                name="residence_number"
                value={formik.values.residence_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.residence_number &&
                  Boolean(formik.errors.residence_number)
                }
                helperText={
                  formik.touched.residence_number &&
                  formik.errors.residence_number
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Apartment Number")}</StyledTypography>
              <StyledTextField
                name="apartment_number"
                value={formik.values.apartment_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.apartment_number &&
                  Boolean(formik.errors.apartment_number)
                }
                helperText={
                  formik.touched.apartment_number &&
                  formik.errors.apartment_number
                }
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Phone Number")}</StyledTypography>
              <StyledTextField
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Email")}</StyledTypography>
              <StyledTextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormItem>
            <FormItem>
              <StyledTypography>{t("Password")}</StyledTypography>
              <StyledTextField
                name="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
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
            <FormItem>
              <StyledTypography>{t("Confirm Password")}</StyledTypography>
              <StyledTextField
                name="password_confirmation"
                type={showPassword ? "text" : "password"}
                value={formik.values.password_confirmation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password_confirmation &&
                  Boolean(formik.errors.password_confirmation)
                }
                helperText={
                  formik.touched.password_confirmation &&
                  formik.errors.password_confirmation
                }
              />
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
              type="submit"
            >
              {t("Sign Up")}
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
              {t(
                "By clicking Register, I confirm that I have read and agree to"
              )}
              <Link underline="none">{t("Terms and Conditions")}</Link>
              {t("Joumla")}
            </Typography>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default NewAccount;
