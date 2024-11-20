import React from "react";

import { Box } from "@mui/material";

import ProductsSection from "../../../sections/common/Products/ProductsSection";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import ProductsSidebar from "../../../sections/common/Products/ProductsSidebar";
import Search from "../../../sections/common/Search";

const AdminStorePage = () => {
  return (
    <Box>
      <SectionTitle
        sectionTitle={{ main: "المتجر", second: "جميع المنتجات" }}
      />
      <Box
        sx={{
          mb: "100px",
          mx: "20px",
        }}
      >
        <Search />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
          pl: { xs: "39px", sm: "40px", md: "66px" },
          // mt: "60px",
        }}
      >
        <Box mt={"60px"} sx={{ position: "relative" }}>
          <ProductsSidebar />
        </Box>
        <Box>
          <ProductsSection />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminStorePage;
