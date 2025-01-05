import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";

// components
import SectionTitle from "@/sections/common/Products/SectionTitle";
import ProductsSidebar from "@/sections/common/Products/ProductsSidebar";
import ProductsSection from "@/sections/common/Products/ProductsSection";
import Search from "@/sections/common/Search";
import CustomCheckbox from "@/sections/Dashboard/delivery/CustomCheckbox";
import CustomizeSection from "./CustomizeSection";

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "800",
  lineHeight: "45px",
  color: theme.palette.colors.mainBlack,
}));

// component
const ProductCustomDeliveryPage = () => {
  const [showNext, setShowNext] = useState(false);

  return (
    <Stack>
      {showNext && <CustomizeSection title="تخصيص الشحن لمنتج" />}
      {!showNext && (
        <>
          <SectionTitle sectionTitle={{ main: "تخصيص الشحن لمنتج" }} />
          <Box
            sx={{
              mb: "34px",
              mx: "20px",
            }}
          >
            <Search />
          </Box>
          <Box
            sx={{
              position: "relative",
              mx: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "800",
                lineHeight: "45px",
                color: "colors.mainBlack",
                mb: "35px",
              }}
            >
              المنتجات
            </Typography>
            {/* choose all  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "37px",
              }}
            >
              <CustomCheckbox single={true} />
              <StyledTypo>تحديد الكل</StyledTypo>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
              pl: { xs: "39px", sm: "40px", md: "66px" },
            }}
          >
            <Box mt={"95px"} sx={{ position: "relative" }}>
              <ProductsSidebar />
            </Box>
            <Box>
              <ProductsSection />
            </Box>
          </Box>
        </>
      )}
      {!showNext && (
        <Button
          sx={{
            width: "461px",
            height: "92px",
            borderRadius: "15px",
            fontSize: "32px",
            fontWeight: "800",
            lineHeight: "36px",
            "&, &:hover": {
              backgroundColor: "colors.mainGreen",
              color: "colors.wi8",
            },
            mx: "auto",
            my: "100px",
          }}
          onClick={() => {
            setShowNext(true);
            window.scrollTo(0, 0);
          }}
        >
          التالى
        </Button>
      )}
    </Stack>
  );
};

export default ProductCustomDeliveryPage;
