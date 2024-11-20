import { Box, Stack } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import ChooseCity from "../../../sections/Dashboard/delivery/ChooseCity";

const AdminDeliveryAreasPage = () => {
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "مناطق الشحن" }} />
      <Box
        sx={{
          mb: "100px",
        }}
      >
        <ChooseCity />
      </Box>
    </Stack>
  );
};

export default AdminDeliveryAreasPage;
