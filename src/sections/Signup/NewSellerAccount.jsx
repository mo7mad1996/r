import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  styled,
  Typography,
} from "@mui/material";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import SectionTitle from "../common/Products/SectionTitle";
import {
  ConfirmButton,
  FormItem,
  StyledTypography,
  StyledTextField,
} from "~/components/FormElements";
import sloganImg from "~/assets/login/slogan.png";
import uploadImg from "~/assets/login/upload.png";
import userImg from "~/assets/login/user.png";
import axios from "axios";
import { Context } from "~/components/Context/Context";
import { useTranslation } from "react-i18next";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
});

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center",
  color: "#000",
}));

const UploadButton = styled(Button)(({ theme }) => ({
  width: "416px",
  height: "60px",
  color: "colors.wi8",
  fontSize: "28px",
  fontWeight: "800",
  backgroundColor: theme.palette.colors.website,
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
  },
}));

const NewSellerAccount = ({ changeForm }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: "",
    father_name: "",
    grandfather_name: "",
    governorate: "",
    city: "",
    street_name: "",
    residence_number: "",
    apartment_number: "",
    phone: "",
    email: "",
    password: "",
    vendor_name: "",
    trade_register_num: "",
    tax_register_num: "",
    national_id: "",
    slogan: "",
    ID_card_photo: null,
    personal_photo: null,
  });

  const inputFields = [
    { label: "First Name", name: "first_name" },
    { label: "Father's Name", name: "second name" },
    { label: "Grandfather's Name or Surname", name: "grandfather_name" },
    { label: "Governorate", name: "governorate" },
    { label: "City", name: "city" },
    { label: "Street Name", name: "street_name" },
    { label: "Building Number or Name", name: "residence_number" },
    { label: "Apartment Number", name: "apartment_number" },
    { label: "Phone Number", name: "phone" },
    { label: "Email", name: "email" },
    { label: "Password", name: "password", type: "password" },
    {
      label: `${t("Seller Name")} (${t("store")})`,
      name: "vendor_name",
      helperText: `(${t("Seller helper text")})`,
    },
    {
      label: `${t("Commercial Registration Number")} (${t("Optional")})`,
      name: "trade_register_num",
    },
    {
      label: `${t("Tax Registration Number")} (${t("Optional")})`,
      name: "tax_register_num",
    },
    { label: "National ID Number", name: "national_id" },
  ];

  const handleFileChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let { baseUrl } = useContext(Context);

  const handleSubmit = async () => {
    const form = new FormData();

    // إضافة الحقول وفقًا للأسماء المتوافقة مع الـ backend
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${baseUrl}/vendor/register`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      changeForm(); // تابع العملية بعد النجاح
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const renderFormFields = () =>
    inputFields.map((field, index) => (
      <FormItem key={index}>
        <StyledTypography>{t(field.label)}</StyledTypography>
        <StyledTextField
          type={field.type || "text"}
          name={field.name}
          value={formData[field.name]}
          helperText={field.helperText}
          onChange={handleInputChange}
        />
      </FormItem>
    ));

  const renderImageUpload = (label, defaultImage, fieldName) => (
    <Stack alignItems="center" sx={{ mt: "65px" }}>
      <StyledText>{label}</StyledText>
      <Box
        sx={{
          width: "237px",
          height: "188px",
          mx: "auto",
          mt: "100px",
          mb: "48px",
        }}
      >
        <Box
          component="img"
          src={
            formData[fieldName]?.name
              ? URL.createObjectURL(formData[fieldName])
              : defaultImage
          }
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
      <UploadButton
        component="label"
        variant="contained"
        disableElevation
        endIcon={
          <Box
            component="img"
            src={uploadImg}
            sx={{ width: "29px", height: "29px", mr: "10px" }}
          />
        }
      >
        {t("Upload Photos")}
        <VisuallyHiddenInput
          type="file"
          onChange={(e) => handleFileChange(e, fieldName)}
        />
      </UploadButton>
    </Stack>
  );

  return (
    <Box sx={{ mb: "100px" }}>
      <SectionTitle
        sectionTitle={{
          main: "Create a New Account",
          second: "Create a Seller Account to Sell on Joumla",
        }}
      />
      <Stack
        sx={{
          px: { xs: "15px", sm: "45px" },
          gap: "50px",
          width: "fit-content",
          mx: "auto",
        }}
      >
        {renderFormFields()}
      </Stack>

      {renderImageUpload(t("Add Your Store Logo"), sloganImg, "slogan")}

      <Stack sx={{ mt: "94px", alignItems: "center" }}>
        <StyledText sx={{ mb: "64px" }}>
          {t("Write a brief description of your store")}
        </StyledText>
        <Box
          component="textarea"
          name="description"
          rows={6}
          sx={{
            width: "min(300px,100%)",
            // height: "178px",
            backgroundColor: "#F6F6F6",
            border: "2px solid #505050",
            borderRadius: "15px",
          }}
          value={formData.description}
          onChange={handleInputChange}
        />
      </Stack>

      {[t("From the front"), t("From the back")].map((side, index) => (
        <Stack key={index} sx={{ mt: "138px", alignItems: "center" }}>
          <StyledText sx={{ mb: "64px" }}>
            {t("ID Card Image")}({side})
          </StyledText>
          <Box
            sx={{
              width: "446px",
              height: "263px",
              borderRadius: "15px",
              border: "2px solid #505050",
              backgroundColor: "#F6F6F6",
            }}
          />
          <UploadButton
            component="label"
            variant="contained"
            disableElevation
            endIcon={
              <Box
                component="img"
                src={uploadImg}
                sx={{ width: "29px", height: "29px", mr: "10px" }}
              />
            }
          >
            {t("Upload Photos")}

            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "ID_card_photo")}
            />
          </UploadButton>
        </Stack>
      ))}

      <Stack sx={{ mt: "138px", alignItems: "center" }}>
        <StyledText sx={{ mb: "64px" }}>{t("Profile Picture")}</StyledText>
        <Box
          sx={{
            width: "336px",
            height: "340px",
            border: "2px solid #505050",
            backgroundColor: "#F6F6F6",
            borderRadius: "15px",
          }}
        >
          <Box
            component="img"
            src={userImg}
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <UploadButton
          component="label"
          variant="contained"
          disableElevation
          endIcon={
            <Box
              component="img"
              src={uploadImg}
              sx={{ width: "29px", mr: "10px" }}
            />
          }
        >
          {t("Upload Photos")}
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => handleFileChange(e, "personal_photo")}
          />
        </UploadButton>
      </Stack>

      <ConfirmButton
        variant="contained"
        disableElevation
        sx={{ mt: "77px", mx: "auto", display: "block" }}
        onClick={handleSubmit}
      >
        {t("Create Account")}
      </ConfirmButton>
    </Box>
  );
};

export default NewSellerAccount;
