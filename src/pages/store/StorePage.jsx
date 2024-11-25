import React from "react";

import { Box } from "@mui/material";

import ProductsSection from "../../sections/common/Products/ProductsSection";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";
import Cart from "../../sections/common/Products/Cart";  
const StorePage = () => {

  
  return (
    <Box>
      <Cart />
      <SectionTitle
        sectionTitle={{ main: "المتجر", second: "جميع المنتجات" }}
      />
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
export default StorePage;
