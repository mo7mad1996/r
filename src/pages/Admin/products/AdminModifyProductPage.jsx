import React from "react";
import AddModifyProduct from "../../../sections/Dashboard/products/AddModifyProduct";
import { Box, Stack, Typography } from "@mui/material";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

const AdminModifyProductPage = () => {
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "تعديل منتج" }} />
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
            mt: "-160px",

            "& span": {
              color: "colors.mainGreen",
            },
          }}
        >
          (بائع / متجر <Typography variant="span">صيرفى</Typography>)
        </Typography>
      </Box>
      <AddModifyProduct isNew={false} admin={true} />
    </Stack>
  );
};

export default AdminModifyProductPage;
