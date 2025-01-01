import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";

const TermsPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "شروط وأحكام عملاء چوملا" }} />
      <Box sx={{ px: { xs: "15px", sm: "125px" }, my: "128px" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "800",
            lineHeight: "31px",
            color: "colors.mainBlack",
          }}
        >
          الشروط :
        </Typography>
        <Box
          sx={{
            mx: { md: "128px" },
            mt: "60px",
          }}
        >
          <Typography
            sx={{
              maxWidth: "724px",
              fontSize: "28px",
              fontWeight: "400",
              color: "#3B3A3A",
              lineHeight: "37px",
              mb: "35px",
            }}
          >
            موقع چوملا هو موقع بيبع جميع المنتجات التي يسمح بها القانون المصري
            وهو موقع تم انشائه ليكون هدفه غير ربحي وهو موقع يهدف الي تقديم خدمة
            فائقة للجمهور وخدمة فائقة لما بعد البيع ............... الخ
          </Typography>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "22.3px",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              mt: "85px",
            }}
          >
            <Checkbox
              defaultChecked
              sx={{
                color: "colors.mainGreen",
                "&.Mui-checked": {
                  color: "colors.mainGreen",
                },
                p: "0",
              }}
            />
            <Typography color={"colors.mainBlack"}>
              أؤكد اني قرأت و اوافق علي{" "}
              <Box
                component={"span"}
                color={"#0041AE"}
                sx={{ cursor: "pointer" }}
              >
                {t("Terms and Conditions")}
              </Box>{" "}
              جوملا
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TermsPage;
