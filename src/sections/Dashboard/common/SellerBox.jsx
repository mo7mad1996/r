import React from "react";
import { Box, Typography } from "@mui/material";
import logoImg from "../../../assets/dashboard/logo.png";

const SellerBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "13px",
        px: {
          xs: "10px",
          sm: "80px",
          md: "150px",
          lg: "160px",
          xl: "170px",
        },
        mr: "33px",
      }}
    >
      <Box
        component="img"
        src={logoImg}
        sx={{
          width: "158px",
          height: "146px",
        }}
      />
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "45px",
            mb: "17px",
            color: "colors.mainBlack",
          }}
        >
          متجر صيرفي
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "27px",
            color: "colors.mainBlack",
          }}
        >
          SN :124122691
        </Typography>
      </Box>
    </Box>
  );
};

export default SellerBox;
