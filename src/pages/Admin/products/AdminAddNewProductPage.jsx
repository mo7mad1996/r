import React from "react";
import AddModifyProduct from "../../../sections/Dashboard/products/AddModifyProduct";
import { Box, Stack, Typography } from "@mui/material";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

const AdminAddNewProductPage = () => {
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "إضافة منتج جديد" }} />
      <Box
        sx={{
          mb: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "45px",
            textAlign: "center",

            "& span": {
              color: "colors.mainGreen",
            },
          }}
        >
          (بائع / متجر <Typography variant="span">صيرفى</Typography>)
        </Typography>
      </Box>
      <AddModifyProduct admin={true} />
    </Stack>
  );
};

export default AdminAddNewProductPage;
