import React from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";
import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import ChatButton from "../components/LiveChat";
import { useTranslation } from "react-i18next";
const items = [
  { name: "المتجر", link: "/store" },
  { name: "Joumla Vendors (Stores)", link: "/sellers" },
  { name: "The latest products", link: "/new-products" },
  { name: "أفضل العروض والخصومات", link: "/best-sale" },
];
const StyledBox = styled(Paper)(({ theme }) => ({
  width: "200px",
  height: "200px",
  borderRadius: "5px",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "35px",
  color: theme.palette.colors.mainBlack,
  boxShadow: "2.5px 2.5px 8px 4px #00000040",
  cursor: "pointer",
}));
const SupportPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle sectionTitle={{ main: "Support" }} />
      <Stack
        sx={{
          gap: "26px",
          px: "53px",
          mb: "38px",
          "& p": {
            fontSize: "28px",
            lineHeight: "31px",
            color: "colors.mainBlack",
          },
        }}
      >
        <Typography>{t("Do you have any questions?")}</Typography>
        <Typography>{t("Contact the Customer Service Center")}</Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "34px",
          mb: "112px",
        }}
      >
        <StyledBox>{t("Live Chat")}</StyledBox>
        <StyledBox>الواتس آب</StyledBox>
        <StyledBox>البريد الإليكتروني</StyledBox>
      </Box>
      <ChatButton />
    </>
  );
};

export default SupportPage;
