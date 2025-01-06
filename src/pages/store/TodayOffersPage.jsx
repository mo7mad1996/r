import React from "react";

import { Box } from "@mui/material";

import ProductsSection from "../../sections/common/Products/ProductsSection";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";

const TodayOffersPage = () => {
  return (
    <Box>
      <SectionTitle sectionTitle={{ main: "Today's offers" }} />
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
          pl: { xs: "39px", sm: "40px", md: "66px" },
        }}
      >
        <ProductsSidebar />
        <ProductsSection />
      </Box>
    </Box>
  );
};
export default TodayOffersPage;
