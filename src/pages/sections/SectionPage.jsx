import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box } from "@mui/material";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";
import ProductsSection from "../../sections/common/Products/ProductsSection";
import Search from "../../sections/common/Search";

const SectionPage = () => {
  return (
    // <>
    //   <SectionTitle sectionTitle={{ main: "قسم الألكترونيات" }} />
    //   <Box sx={{ display: "flex", gap: "86px", pl: "66px" }}>
    //     <Box mt={"60px"}>
    //       <ProductsSidebar />
    //     </Box>
    //     <ProductsSection />
    //   </Box>
    // </>
    <Box>
      <SectionTitle sectionTitle={{ main: "قسم الألكترونيات" }} />
      <Box
        sx={{
          display: "flex",
          mt: "200px",
          gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
          pl: { xs: "39px", sm: "40px", md: "66px" },
        }}
      >
        <Box mt={"60px"} sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-225px",
              mx: "20px",
            }}
          >
            <Search placeholder="البحث في المنتجات" />
          </Box>
          <ProductsSidebar />
        </Box>
        <Box>
          <ProductsSection />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionPage;
