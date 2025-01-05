import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& p": {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "27px",
  },
}));
const TotalDues = () => {
  return (
    <Stack
      sx={{
        mb: "100px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "إجمالى مستحقاتى" }} />
      <Stack
        sx={{
          width: "1160px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "279px",
            border: "1.5px solid",
            borderColor: "colors.greyStrock",
            backgroundColor: "colors.liteGrey",
            p: "37px 28px",
          }}
        >
          <Stack
            sx={{
              gap: "50px",
              //   flex: "1",
              width: "50%",
            }}
          >
            <StyledBox
              sx={{
                "& p": {
                  color: "colors.mainBlack",
                },
              }}
            >
              <Typography>إجمالي قيمة الطلبات المكتملة</Typography>
              <Typography>1350{t("Currency")}</Typography>
            </StyledBox>
            <StyledBox
              sx={{
                "& p": {
                  color: "colors.mainRed",
                },
              }}
            >
              <Typography>عمولة چوملا (10) %</Typography>
              <Typography>135 {t("Currency")}</Typography>
            </StyledBox>
            <StyledBox
              sx={{
                "& p:first-of-type": {
                  color: "colors.mainBlack",
                },
                "& p:last-of-type": {
                  color: "colors.website",
                },
              }}
            >
              <Typography>إجمالي السحب</Typography>
              <Typography>500 {t("Currency")}</Typography>
            </StyledBox>
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              gap: "33px",
              mt: "-5px",
              "& p": {
                fontWeight: "700",
                color: "colors.mainBlack",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "27px",
              }}
            >
              الخميس 31 اغسطس 2024
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "20px",
              }}
            >
              2 :20 م
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            height: "177px",
            backgroundColor: "colors.liteGrey",
            p: "42px 29px",
          }}
        >
          <StyledBox
            sx={{
              width: "50%",
            }}
          >
            <Typography>إجمالى مستحقاتى</Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                lineHeight: "25px",
                color: "colors.website",
              }}
            >
              715 {t("Currency")}
            </Typography>
          </StyledBox>
          <Stack
            sx={{
              alignItems: "center",
              gap: "4px",
              mt: "52px",
              mr: "-72px",
              "& p": {
                fontWeight: "700",
                color: "colors.mainBlack",
                fontSize: "18px",
                lineHeight: "20px",
              },
            }}
          >
            <Typography>الخميس 31 اغسطس 2024</Typography>
            <Typography>2 :20 م</Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default TotalDues;
