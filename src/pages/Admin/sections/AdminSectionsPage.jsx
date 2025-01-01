import { Box, Stack } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Menu from "../../../sections/Menu/Menu";

const items = [
  { name: "All Sections", link: "/admin/dashboard/sections/all" },
  {
    name: "Add New Category",
    link: "/admin/dashboard/sections/add",
  },
  {
    name: "تعديل وحذف الأقسام",
    link: "/admin/dashboard/sections",
  },
];

const AdminSectionsPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "الأقسام" }} />
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

export default AdminSectionsPage;
