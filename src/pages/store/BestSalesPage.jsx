import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ProductsSection from "../../sections/common/Products/ProductsSection";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";

const BestSalesPage = () => {
  return (
    <Box>
      <SectionTitle sectionTitle={{ main: "أفضل العروض والخصومات" }} />
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
          pl: { xs: "39px", sm: "40px", md: "66px" },
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

export default BestSalesPage;
