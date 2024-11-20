import React from "react";
import AddModifyProduct from "../../../sections/Dashboard/products/AddModifyProduct";
import { Stack } from "@mui/material";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

const AddNewProductPage = () => {
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "إضافة منتج جديد" }} />
      <AddModifyProduct />
    </Stack>
  );
};

export default AddNewProductPage;
