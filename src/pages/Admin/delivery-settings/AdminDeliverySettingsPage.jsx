import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

import Menu from "../../../sections/Menu/Menu";

const items = [
  { name: "مناطق الشحن", link: "/admin/dashboard/delivery/areas" },
  {
    name: "تخصيص شحن لمنتج",
    link: "/admin/dashboard/delivery/custom-product",
  },
  {
    name: "تخصيص شحن لبائع (متجر)",
    link: "/admin/dashboard/delivery/custom-seller",
  },
  {
    name: "تخصيص شحن لقسم",
    link: "/admin/dashboard/delivery/custom-section",
  },
  {
    name: "تخصيص مناطق الشحن لبائع",
    link: "/admin/dashboard/delivery/custom-areas",
  },
  {
    name: "الشحن الأفتراضي",
    link: "/admin/dashboard/delivery/default",
  },
  {
    name: "محافظات الشحن",
    link: "/admin/dashboard/delivery/cities",
  },
];

const AdminDeliverySettingsPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "اعدادات الشحن" }} />
      <Stack>
        <Box sx={{ mt: "98px" }}>
          <Menu items={items} dashboard={true} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AdminDeliverySettingsPage;
