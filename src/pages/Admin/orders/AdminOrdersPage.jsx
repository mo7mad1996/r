import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

import Menu from "../../../sections/Menu/Menu";

const items = [
  { name: "جميع الطلبات", link: "/admin/dashboard/orders/all", num: 45 },
  { name: "الطلبات الجديدة", link: "/admin/dashboard/orders/new", num: 45 },
  {
    name: "الطلبات قيد التنفيذ",
    link: "/admin/dashboard/orders/progress",
    num: 100,
  },
  {
    name: "الطلبات المكتملة",
    link: "/admin/dashboard/orders/completed",
    num: 200,
  },
  {
    name: "الطلبات المرتجعة",
    link: "/admin/dashboard/orders/returned",
    num: 5,
  },
  {
    name: "الطلبات الملغاه",
    link: "/admin/dashboard/orders/canceled",
    num: 1024,
  },
];

const AdminOrdersPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "الطلبات" }} />
      <Stack>
        <Box sx={{ mt: "98px" }}>
          <Menu items={items} dashboard={true} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AdminOrdersPage;
