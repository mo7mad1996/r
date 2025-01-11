import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import logoImg from "../../../assets/dashboard/logo.png";
import Menu from "../../../sections/Menu/Menu";
import SellerBox from "../../../sections/Dashboard/common/SellerBox";
import UploadButton from "../../../components/UploadButton";
import { useTranslation } from "react-i18next";

const items = [
  { name: "store", link: "/dashboard/store/my-store" },
  {
    name: "Store Settings",
    link: "/dashboard/store/settings",
  },
];
const StyledLabel = styled(Typography)(({ theme }) => ({
  width: "320px",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "27px",
  color: "#3B3A3A",
  textAlign: "end",
}));
const StyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "#F6F6F6",
  outline: "none",
  width: "837px",
  height: "70px",
  borderRadius: "15px",

  "& input": {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "25px",
    color: `${theme.palette.colors.mainGreen}`,
    textAlign: "center",
    // height: "69px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
      border: "none",
    },
    "&:hover fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "62px",
}));
const StoreSettings = () => {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "23px",
          right: "26px",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "27px",
        }}
      >
        مرحبا , ممدوح الصيرفي
      </Typography>
      <SectionTitle sectionTitle={{ main: "store" }} />
      <Stack
        sx={{
          mt: "-70px",
        }}
      >
        <SellerBox />
        <Box
          sx={{
            mx: "179px",
          }}
        >
          <UploadButton title="إضافة شعار جديد" />
        </Box>
        <Stack
          sx={{
            gap: "42px",
            mx: "auto",
            mt: "97px",
          }}
        >
          <StyledBox>
            <StyledLabel>
              {t("Seller Name")} ({t("store")})
            </StyledLabel>
            <StyledInput defaultValue="الشرق الأوسط للملابس"></StyledInput>
          </StyledBox>
          <StyledBox>
            <StyledLabel>الرقم القومي</StyledLabel>
            <StyledInput defaultValue="2345678900987654"></StyledInput>
          </StyledBox>
          <StyledBox>
            <StyledLabel>عمولة چوملا</StyledLabel>
            <StyledInput
              defaultValue="10 %"
              sx={{
                "& input": {
                  color: (theme) =>
                    `${theme.palette.colors.greyLabels}!important`,
                },
                // color: "red!important",
              }}
            />
          </StyledBox>
          <StyledBox>
            <StyledLabel>{t("Email")}</StyledLabel>
            <StyledInput defaultValue="SOLY_RONY@YAHOO.COM"></StyledInput>
          </StyledBox>
          <StyledBox>
            <StyledLabel>
              {t("Commercial Registration Number")} ({t("Optional")})
            </StyledLabel>
            <StyledInput defaultValue="12345"></StyledInput>
          </StyledBox>
          <StyledBox>
            <StyledLabel>
              {t("Tax Registration Number")} ({t("Optional")})
            </StyledLabel>
            <StyledInput defaultValue="56165465165051"></StyledInput>
          </StyledBox>
          <StyledBox>
            <StyledLabel>{t("Phone Number")}</StyledLabel>
            <StyledInput defaultValue="01234567389"></StyledInput>
          </StyledBox>
        </Stack>
        <Stack
          sx={{
            width: "1110px",
            gap: "15px",
            mx: "auto",
            mt: "119px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "27px",
              color: "#3B3A3A",
              mx: "16px",
            }}
          >
            {t("Write a brief description of your store")}
          </Typography>
          <TextField
            multiline
            rows={4}
            sx={{
              height: "178px",
              backgroundColor: "#F6F6F6",
              borderRadius: "15px",
              border: "2px solid",
              borderColor: "colors.greyStrock",
              "& input": {
                fontSize: "22px",
                fontWeight: "700",
                lineHeight: "25px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  // borderColor: `${theme.palette.colors.mainGreen} !important`,
                  border: "none",
                },
              },
            }}
          ></TextField>
        </Stack>
        <Button
          sx={{
            width: "371px",
            height: "57.43px",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "25px",
            mx: "auto",
            mt: "74px",
            "&, &:hover": {
              backgroundColor: "colors.mainGreen",
              color: "colors.wi8",
            },
          }}
        >
          حفظ
        </Button>
      </Stack>
    </Stack>
  );
};

export default StoreSettings;
