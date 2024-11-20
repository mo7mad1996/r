import { Box, Stack } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Menu from "../../../sections/Menu/Menu";

const items = [
  { name: "جميع الإعلانات", link: "/admin/dashboard/ads/all" },
  {
    name: "إضافة إعلان جديد",
    link: "/admin/dashboard/ads/add",
  },
];

const AdminAdsPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "إعلانات چوملا" }} />
      <Stack
        sx={{
          mt: "-70px",
        }}
      >
        <Box sx={{ mt: "98px" }}>
          <Menu items={items} dashboard={true} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AdminAdsPage;
