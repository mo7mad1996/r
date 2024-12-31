import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import logoImg from "../../../assets/dashboard/logo.png";
import Menu from "../../../sections/Menu/Menu";
import SellerBox from "../../../sections/Dashboard/common/SellerBox";

const items = [
  { name: "store", link: "/dashboard/store/my-store" },
  {
    name: "Store Settings",
    link: "/dashboard/store/settings",
  },
];
const StoreDashboardPage = () => {
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
        {/* <Box
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
        </Box> */}
        <SellerBox />
        {/* <Stack
          sx={{
            // gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            width: "700px",
            height: "200px",
            borderRadius: "5px",
            boxShadow: "2.5px 2.5px 8px 4px #00000040",
            mt: "95px",
            mb: "53px",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "70px",
              fontWeight: "700",
              lineHeight: "78px",
              color: "#008C5D",
            }}
          >
            45
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "800",
              lineHeight: "78px",
              color: "colors.mainBlack",
            }}
          >
            عدد الطلبات قيد الأنتظار
          </Typography>
        </Stack> */}
      </Stack>
      <Box sx={{ mt: "220px", mx: "250px" }}>
        <Menu items={items} />
      </Box>
    </Stack>
  );
};

export default StoreDashboardPage;
