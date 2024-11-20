import React from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";
import { Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "نبذه عن الموقع" }} />
      <Typography
        sx={{
          maxWidth: "724px",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "24px",
          textAlign: "right",
          color: "#3B3A3A",
          px: "20px",
          mx: "auto",
          mb: "200px",
        }}
      >
        موقع چوملا هو موقع بيبع جميع المنتجات التي يسمح بها القانون المصري وهو
        موقع تم انشائه ليكون هدفه غير ربحي وهو موقع يهدف الي تقديم خدمة فائقة
        للجمهور وخدمة فائقة لما بعد البيع ............... الخ
      </Typography>
    </>
  );
};

export default AboutPage;
