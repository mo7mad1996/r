import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

import Menu from "../../../sections/Menu/Menu";

const items = [
  {
    name: "المراجعات الجديدة في انتظار الموافقة",
    link: "/admin/dashboard/reviews/pending",
    num: 500,
  },
  {
    name: "مراجعات المنتجات",
    link: "/admin/dashboard/reviews/products",
    num: 100,
  },
];

const AdminReviewsPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "المراجعات" }} />
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

export default AdminReviewsPage;
