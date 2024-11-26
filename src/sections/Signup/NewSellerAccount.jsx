import React, { useState } from "react";
import { Box, Button, Stack, TextField, styled, Typography } from "@mui/material";
import SectionTitle from "../common/Products/SectionTitle";
import { ConfirmButton, FormItem, StyledTypography, StyledTextField } from "../../components/FormElements";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import sloganImg from "../../assets/login/slogan.png";
import uploadImg from "../../assets/login/upload.png";
import userImg from "../../assets/login/user.png";

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

const inputFields = [
  { label: "الأسم الأول", name: "firstName" },
  { label: "اسم الأب", name: "fatherName" },
  { label: "اسم الجد او اللقب", name: "grandfatherName" },
  { label: "المحافظة", name: "province" },
  { label: "المدينة", name: "city" },
  { label: "اسم الشارع", name: "street" },
  { label: "رقم العقار او اسم العقار", name: "property" },
  { label: "رقم الشقة", name: "apartment" },
  { label: "رقم الهاتف", name: "phone" },
  { label: "البريد الألكتروني", name: "email" },
  { label: "كلمة المرور", name: "password", type: "password" },
  { label: "اسم البائع (المتجر)", name: "storeName", helperText: "(اسم البائع هو اسم المتجر كما سيظهر للعملاء علي الموقع من فضلك اختاره بعناية )" },
  { label: "رقم السجل التجاري (اختياري)", name: "commercialRegister" },
  { label: "رقم التسجيل الضريبى (اختياري)", name: "taxRegister" },
  { label: "الرقم القومى", name: "nationalID" },
];

const NewSellerAccount = ({ changeForm }) => {
  const [slogan, setSlogan] = useState("");

  const handleFileChange = (e) => setSlogan(e.target.value);

  const renderFormFields = () =>
    inputFields.map((field, index) => (
      <FormItem key={index}>
        <StyledTypography>{field.label}</StyledTypography>
        <StyledTextField
          type={field.type || "text"}
          helperText={field.helperText}
        />
      </FormItem>
    ));

  const renderImageUpload = (label, defaultImage, onChangeHandler) => (
    <Stack alignItems="center" sx={{ mt: "65px" }}>
      <StyledText>{label}</StyledText>
      <Box sx={{ width: "237px", height: "188px", mx: "auto", mt: "100px", mb: "48px" }}>
        <Box component="img" src={slogan.length > 1 ? slogan : defaultImage} sx={{ width: "100%", height: "100%" }} />
      </Box>
      <UploadButton component="label" variant="contained" disableElevation endIcon={<Box component="img" src={uploadImg} sx={{ width: "29px", height: "29px", mr: "10px" }} />}>
        حمل صورة
        <VisuallyHiddenInput type="file" onChange={onChangeHandler} />
      </UploadButton>
    </Stack>
  );

  return (
    <Box sx={{ mb: "100px" }}>
      <SectionTitle sectionTitle={{ main: "إنشاء حساب جديد", second: "إنشاء حساب بائع لتبيع على چوملا" }} />
      <Stack sx={{ px: { xs: "15px", sm: "45px" }, gap: "50px", width: "fit-content", mx: "auto" }}>
        {renderFormFields()}
      </Stack>

      {renderImageUpload("أضف شعار متجرك", sloganImg, handleFileChange)}

      <Stack sx={{ mt: "94px", alignItems: "center" }}>
        <StyledText sx={{ mb: "64px" }}>اكتب نبذة عن متجرك</StyledText>
        <TextField
          multiline
          maxRows={6}
          sx={{
            width: "fit-content",
            borderRadius: "15px",
            height: "178px",
            backgroundColor: "#F6F6F6",
            "& textarea": { width: "100%", height: "178px" },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": { border: "2px solid #505050", borderRadius: "15px" },
          }}
        />
      </Stack>

      {["من الوجهه", "من الخلف"].map((side, index) => (
        <Stack key={index} sx={{ mt: "138px", alignItems: "center" }}>
          <StyledText sx={{ mb: "64px" }}>صورة البطاقة الشخصية ({side})</StyledText>
          <Box sx={{ width: "446px", height: "263px", borderRadius: "15px", border: "2px solid #505050", backgroundColor: "#F6F6F6" }} />
          <UploadButton component="label" variant="contained" disableElevation endIcon={<Box component="img" src={uploadImg} sx={{ width: "29px", height: "29px", mr: "10px" }} />}>
            تحميل صورة
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </UploadButton>
        </Stack>
      ))}

      <Stack sx={{ mt: "138px", alignItems: "center" }}>
        <StyledText sx={{ mb: "64px" }}>صورة شخصية</StyledText>
        <Box sx={{ width: "336px", height: "340px", border: "2px solid #505050", backgroundColor: "#F6F6F6", borderRadius: "15px" }}>
          <Box component="img" src={userImg} sx={{ width: "150px", left: "93px" }} />
        </Box>
        <UploadButton component="label" variant="contained" disableElevation endIcon={<Box component="img" src={uploadImg} sx={{ width: "29px", height: "29px", mr: "10px" }} />}>
          تحميل صورة
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </UploadButton>
      </Stack>

      <ConfirmButton variant="contained" disableElevation sx={{ mt: "77px" }} onClick={changeForm}>
        انشاء حساب
      </ConfirmButton>
    </Box>
  );
};

export default NewSellerAccount;
