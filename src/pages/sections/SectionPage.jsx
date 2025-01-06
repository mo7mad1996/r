import React from "react";
import SectionTitle from "@/sections/common/Products/SectionTitle";
import { Box } from "@mui/material";
import ProductsSidebar from "@/sections/common/Products/ProductsSidebar";
import ProductsSection from "@/sections/common/Products/ProductsSection";
import Search from "@/sections/common/Search";
import { useTranslation } from "react-i18next";

const SectionPage = () => {
  const { t } = useTranslation();
  return (
    // <>
    //   <SectionTitle sectionTitle={{ main: "قسم الألكترونيات" }} />
    //   <Box sx={{ display: "flex", gap: "86px", pl: "66px" }}>
    //       <ProductsSidebar />
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
          <Box
            sx={{
              position: "absolute",
              top: "-225px",
              mx: "20px",
            }}
          >
            <Search placeholder={t("Search in products")} />
          </Box>
          <ProductsSidebar />
          <ProductsSection />
      </Box>
    </Box>
  );
};

export default SectionPage;
