import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& p:first-of-type": {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "31px",
    color: theme.palette.colors.mainBlack,
  },
  "& p:last-of-type": {
    width: "280px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "27px",
    color: theme.palette.colors.mainGreen,
  },
}));
const DuesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "مستحقاتى" }} />
      <Stack
        sx={{
          mx: "126px",
        }}
      >
        <Grid container columnSpacing="75px" rowSpacing="42px">
          {Array(4)
            .fill("")
            .map((item) => (
              <Grid item lg={6}>
                <Stack
                  sx={{
                    gap: "40px",
                    width: "605px",
                    height: "279px",
                    backgroundColor: "colors.liteGrey",
                    border: "1.5px solid",
                    borderColor: "colors.greyStrock",
                    p: "37px 26px",
                  }}
                >
                  <StyledBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>رقم الطلب</Typography>
                    <Typography>12345676</Typography>
                  </StyledBox>
                  <StyledBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>
                      {t("the")}
                      {t("Total")}
                    </Typography>
                    <Typography>30 {t("Currency")}</Typography>
                  </StyledBox>
                  <StyledBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>تاريخ الطلب</Typography>
                    <Typography>الخميس 31 اغسطس 2023</Typography>
                  </StyledBox>
                </Stack>
              </Grid>
            ))}
        </Grid>
      </Stack>
      <Button
        sx={{
          width: "416px",
          height: "60px",
          fontSize: "22px",
          fontWeight: "800",
          lineHeight: "25px",
          "&, &:hover": {
            backgroundColor: "colors.website",
            color: "colors.wi8",
          },
          my: "45px",
          mx: "auto",
        }}
        onClick={() => navigate("total")}
      >
        {t("Total")} مستحقاتي
      </Button>
    </Stack>
  );
};

export default DuesPage;
