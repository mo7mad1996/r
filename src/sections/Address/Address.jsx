import React, { useContext } from "react";
import { Box, Stack, MenuItem } from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledSelect,
  StyledTypography,
  StyledCheckbox,
} from "../../components/FormElements";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Context } from "@/components/Context/Context";
import useApi from "@/hooks/useApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Address = () => {
  const api = useApi();
  const navigate = useNavigate();
  const { address_type } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      address: "",
      governorate: "",
      city: "",
      street_name: "",
      residence_number: "",
      apartment_number: "",
      floor: "",
      type: "Home",
      default_address: true,
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
        let res = await api.post(`/user/address`, values);
        const data = res.data.message;
        toast.success(data);

        navigate("/user/address");
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || err.message);
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
          <StyledTypography>نوع المكان</StyledTypography>
          <StyledSelect
            name="type"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          >
            {address_type.map((t) => (
              <MenuItem value={t.key} key={t.key}>
                {t.value}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormItem>
        <FormItem>
          <StyledTypography>المحافظة</StyledTypography>
          <StyledTextField
            name="governorate"
            value={formik.values.governorate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.governorate && Boolean(formik.errors.governorate)
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
            error={
              formik.touched.street_name && Boolean(formik.errors.street_name)
            }
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
            helperText={
              formik.touched.residence_number && formik.errors.residence_number
            }
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
            helperText={
              formik.touched.apartment_number && formik.errors.apartment_number
            }
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

        <FormItem sx={{ width: "100% !important" }}>
          <Box
            component="label"
            htmlFor="default_address"
            sx={{
              display: "flex",
              gap: "1em",
              width: "100%",
              alignItems: "center",
            }}
          >
            <StyledCheckbox
              name="default_address"
              value={formik.values.default_address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.default_address &&
                Boolean(formik.errors.default_address)
              }
              helperText={
                formik.touched.default_address && formik.errors.default_address
              }
              id="default_address"
            />

            <StyledTypography
              sx={{
                position: "static !important",
                transform: "unset !important",
                width: "auto !important",
              }}
            >
              تعين كعنوان افتراضي
            </StyledTypography>
          </Box>
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
