import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box } from "@mui/material";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";
import ProductsSection from "../../sections/common/Products/ProductsSection";

const FavouriteProductsPage = () => {
  return (
    <Box>
      <SectionTitle sectionTitle={{ main: "Wishlist" }} />
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

export default FavouriteProductsPage;
