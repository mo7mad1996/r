import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import SectionTitle from "../common/Products/SectionTitle";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import sloganImg from "../../assets/login/slogan.png";
import uploadImg from "../../assets/login/upload.png";
import userImg from "../../assets/login/user.png";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
  fontWeight: "700",
  lineHeight: "31px",
  letterSpacing: "0em",
  textAlign: "center",
  color: "#000000",
}));

const UploadButton = styled(Button)(({ theme }) => ({
  width: "416px",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    fontSize: "25px",
  },
  height: "60px",
  color: "colors.wi8",
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "31.25px",
  backgroundColor: theme.palette.colors.website,
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
  },
}));
const NewSellerAccount = ({ changeForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [slogan, setSlogan] = useState("");
  console.log(slogan);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ mb: "100px" }}>
        <SectionTitle
          sectionTitle={{
            main: "إنشاء حساب جديد",
            second: "إنشاء حساب بائع لتبيع على چوملا",
          }}
        />
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
            <StyledTypography>رقم الهاتف</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>البريد الألكتروني</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>كلمة المرور</StyledTypography>
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
            <StyledTypography>اسم البائع (المتجر)</StyledTypography>
            <StyledTextField
              sx={{
                "& .MuiFormHelperText-root": {
                  position: "absolute",
                  top: "100%",
                  fontFamily: "Almarai",
                  fontSize: { xs: "15px", sm: "20px" },
                  fontWeight: " 700",
                  lineHeight: "22px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  marginTop: { xs: "2px", sm: "18px" },
                },
              }}
              helperText="(اسم البائع هو اسم المتجر كما سيظهر للعملاء علي الموقع من فضلك اختاره بعناية )"
            ></StyledTextField>
          </FormItem>
          {/* <Typography>(اسم البائع هو اسم المتجر كما سيظهر للعملاء علي الموقع من فضلك اختاره بعناية )</Typography> */}
          <FormItem>
            <StyledTypography>رقم السجل التجاري (اختياري)</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>رقم التسجيل الضريبى (اختياري)</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
          <FormItem>
            <StyledTypography>الرقم القومى</StyledTypography>
            <StyledTextField></StyledTextField>
          </FormItem>
        </Stack>
        {/* add slogan  */}
        <Stack alignItems={"center"}>
          <StyledText
            sx={{
              mt: "65px",
            }}
          >
            أضف شعار متجرك
          </StyledText>
          <Box
            sx={{
              width: "237px",
              height: "188px",
              mx: "auto",
              mt: "100px",
              mb: "48px",
              //   backgroundColor: "colors.greyLabels",
            }}
          >
            <Box
              component="img"
              src={slogan.length > 1 ? slogan : sloganImg}
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                position: "relative",

                // zIndex: 2,
              }}
            />
          </Box>
          <StyledText
            sx={{
              mt: "65px",
            }}
          >
            أضف شعار متجرك
          </StyledText>
          <UploadButton
            component="label"
            variant="contained"
            disableElevation
            sx={{ mt: "35px" }}
            endIcon={
              <Box
                component="img"
                src={uploadImg}
                sx={{
                  width: "29px",
                  height: "29px",
                  mr: "10px",
                }}
              />
            }
          >
            حمل صورة الشعار
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => setSlogan(e.target.value)}
            />
          </UploadButton>
        </Stack>
        {/* نبذة عن متجرك  */}
        <Stack sx={{ mt: "94px", alignItems: "center" }}>
          <StyledText sx={{ mb: "64px" }}>اكتب نبذة عن متجرك</StyledText>
          <TextField
            multiline
            maxRows={6}
            sx={{
              //   border: "2px solid #505050",
              width: "fit-content",
              borderRadius: "15px",
              height: "178px",

              backgroundColor: "#F6F6F6",

              "& textarea": {
                width: { xs: "300px", sm: "530px", md: "800px", lg: "1004px" },
                height: "178px",
                // borderRadius: "15px",
                textAlign: "start",
              },
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                // border: "none",
                height: "178px",

                border: "2px solid #505050",
                borderRadius: "15px",
              },
              "&:hover .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "colors.mainGreen",
              },
            }}
          ></TextField>
        </Stack>
        {/* صورة البطاقة الشخصية */}
        <Stack sx={{ mt: "138px", alignItems: "center" }}>
          <StyledText sx={{ mb: "64px" }}>  صورة البطاقة الشخصية  (من الوجهه)</StyledText>
          <Box
            sx={{
              width: { xs: "350px", sm: "446px" },
              height: "263px",
              borderRadius: "15px",
              border: "2px solid #505050",
              backgroundColor: "#F6F6F6",
            }}
          >
            <Box component="img"></Box>
          </Box>
          <Box sx={{ mt: "21px" }}>
            <StyledText sx={{ textAlign: "start", mb: "7px" }}>
              صورة البطاقة الشخصية{" "}
            </StyledText>
            <StyledText
              sx={{ fontWeight: "400", color: "#3B3A3A", textAlign: "start" }}
            >
              {" "}
              صورة واضحة لبطاقتك الشخصية
            </StyledText>
          </Box>
          <UploadButton
            component="label"
            variant="contained"
            disableElevation
            sx={{ mt: "48px" }}
            endIcon={
              <Box
                component="img"
                src={uploadImg}
                sx={{
                  width: "29px",
                  height: "29px",
                  mr: "10px",
                }}
              />
            }
          >
            تحميل صورة
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => setSlogan(e.target.value)}
            />
          </UploadButton>
        </Stack>
        {/* صورة البطاقة الشخصية */}
        <Stack sx={{ mt: "138px", alignItems: "center" }}>
          <StyledText sx={{ mb: "64px" }}>  صورة البطاقة الشخصية (من الخلف)</StyledText>
          <Box
            sx={{
              width: { xs: "350px", sm: "446px" },
              height: "263px",
              borderRadius: "15px",
              border: "2px solid #505050",
              backgroundColor: "#F6F6F6",
            }}
          >
            <Box component="img"></Box>
          </Box>
          <Box sx={{ mt: "21px" }}>
            <StyledText sx={{ textAlign: "start", mb: "7px" }}>
              صورة البطاقة الشخصية{" "}
            </StyledText>
            <StyledText
              sx={{ fontWeight: "400", color: "#3B3A3A", textAlign: "start" }}
            >
              {" "}
              صورة واضحة لبطاقتك الشخصية
            </StyledText>
          </Box>
          <UploadButton
            component="label"
            variant="contained"
            disableElevation
            sx={{ mt: "48px" }}
            endIcon={
              <Box
                component="img"
                src={uploadImg}
                sx={{
                  width: "29px",
                  height: "29px",
                  mr: "10px",
                }}
              />
            }
          >
            تحميل صورة
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => setSlogan(e.target.value)}
            />
          </UploadButton>
        </Stack>
        {/* صورة شخصية */}
        <Stack sx={{ mt: "138px", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              sx={{
                width: "150px",
                left: "93px",
              }}
            ></Box>
          </Box>
          <Box sx={{ mt: "21px" }}>
            <StyledText sx={{ textAlign: "start", mb: "7px" }}>
              صورة شخصية
            </StyledText>
            <StyledText
              sx={{ fontWeight: "400", color: "#3B3A3A", textAlign: "start" }}
            >
              {" "}
              صورة شخصية واضحة لك{" "}
            </StyledText>
          </Box>
          <UploadButton
            component="label"
            variant="contained"
            disableElevation
            sx={{ mt: "48px" }}
            endIcon={
              <Box
                component="img"
                src={uploadImg}
                sx={{
                  width: "29px",
                  height: "29px",
                  mr: "10px",
                }}
              />
            }
          >
            تحميل صورة
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => setSlogan(e.target.value)}
            />
          </UploadButton>
        </Stack>
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            mt: { xs: "25px", lg: "185px" },
            mb: "100px",
          }}
        >
          <ConfirmButton
            sx={{
              mt: "71px",
            }}
            onClick={() => changeForm(1)}
          >
            تسجيل
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
            مع الضغط علي تسجيل أؤكد اني قرأت واوافق علي{" "}
            <Link underline="none">شروط وأحكام </Link>
            جوملا
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NewSellerAccount;
