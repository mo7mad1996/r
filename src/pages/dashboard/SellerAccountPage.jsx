import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import logoImg from "../../assets/dashboard/logo.png";
import Menu from "../../sections/Menu/Menu";
import SellerBox from "../../sections/Dashboard/common/SellerBox";

const items = [
  { name: "الطلبات", link: "/dashboard/orders" },
  { name: "الإشعارات", link: "/dashboard/notifications" },
  { name: "المحفظة", link: "/dashboard/products/wallet" },
  { name: "الملف الشخصى", link: "/dashboard/profile" },
  { name: "Addresses", link: "/dashboard/adresses" },
  { name: "Support", link: "/support" },
  { name: "نشرة چوملا", link: "" },
  { name: "Store Settings", link: "" },
  { name: "طلبات السحب", link: "" },
  { name: "التقارير", link: "" },
  { name: "شروط وأحكام بائعين چوملا", link: "" },
  { name: "logout", link: "" },
];
const SellerAccountPage = () => {
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
      <SectionTitle sectionTitle={{ main: "حسابى" }} />
      <Stack
        sx={{
          mt: "-70px",
        }}
      >
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
        <Box sx={{ mt: "184px" }}>
          <Menu items={items} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default SellerAccountPage;
