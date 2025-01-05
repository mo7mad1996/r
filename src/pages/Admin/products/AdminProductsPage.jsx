import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import logoImg from "../../../assets/dashboard/logo.png";
import Menu from "../../../sections/Menu/Menu";

const items = [
  { name: "All Products", link: "/admin/dashboard/products/all", num: 500 },
  { name: "اضافة منتج جديد", link: "/admin/dashboard/products/add", num: 100 },
  {
    name: "منتجات في انتظار الموافقة",
    link: "/admin/dashboard/products/pending",
    num: 300,
  },
  {
    name: "منتجات مرفوضة",
    link: "/admin/dashboard/products/refused",
    num: 500,
  },
];
const AdminProductsPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "Products" }} />
      <Stack>
        <Stack
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
            1000
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
        </Stack>
        <Box sx={{ mt: "98px" }}>
          <Menu items={items} dashboard={true} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AdminProductsPage;
