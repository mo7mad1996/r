import React, { useContext } from "react";
import { Box, Stack } from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Context } from "../../components/Context/Context";

const Address = () => {
  let { baseUrl } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      type: "Home",
      address: "",
      governorate: "",
      city: "",
      street_name: "",
      residence_number: "",
      apartment_number: "",
      floor: "",
      // default_address: false, // يمكن إضافته عند الحاجة
    },
    validationSchema: Yup.object({
      address: Yup.string().required("العنوان مطلوب"),
      governorate: Yup.string().required("المحافظة مطلوبة"),
      city: Yup.string().required("المدينة مطلوبة"),
      street_name: Yup.string().required("اسم الشارع مطلوب"),
      residence_number: Yup.string().required("رقم السكن مطلوب"),
      apartment_number: Yup.string(), 
      floor: Yup.string(), 
    }),
    onSubmit: async (values) => {
      try {
        let res = await axios.post(
          `${baseUrl}/user/address`,
          values,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
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
          <StyledTypography>العنوان</StyledTypography>
          <StyledTextField
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>المحافظة</StyledTypography>
          <StyledTextField
            name="governorate"
            value={formik.values.governorate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.governorate &&
              Boolean(formik.errors.governorate)
            }
            helperText={formik.touched.governorate && formik.errors.governorate}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>المدينة</StyledTypography>
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
          <StyledTypography>اسم الشارع</StyledTypography>
          <StyledTextField
            name="street_name"
            value={formik.values.street_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.street_name && Boolean(formik.errors.street_name)}
            helperText={formik.touched.street_name && formik.errors.street_name}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>رقم السكن</StyledTypography>
          <StyledTextField
            name="residence_number"
            value={formik.values.residence_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.residence_number &&
              Boolean(formik.errors.residence_number)
            }
            helperText={formik.touched.residence_number && formik.errors.residence_number}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>رقم الشقة</StyledTypography>
          <StyledTextField
            name="apartment_number"
            value={formik.values.apartment_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.apartment_number &&
              Boolean(formik.errors.apartment_number)
            }
            helperText={formik.touched.apartment_number && formik.errors.apartment_number}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>الدور</StyledTypography>
          <StyledTextField
            name="floor"
            value={formik.values.floor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.floor && Boolean(formik.errors.floor)}
            helperText={formik.touched.floor && formik.errors.floor}
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
            mt: "70px",
          }}
          type="submit"
        >
          تسجيل
        </ConfirmButton>
      </Box>
    </form>
  );
};

export default Address;
