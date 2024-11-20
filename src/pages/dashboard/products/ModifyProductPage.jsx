import React from "react";
import AddModifyProduct from "../../../sections/Dashboard/products/AddModifyProduct";
import { Stack } from "@mui/material";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

const ModifyProductPage = () => {
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "تعديل منتج" }} />
      <AddModifyProduct isNew={false} />
    </Stack>
  );
};

export default ModifyProductPage;
