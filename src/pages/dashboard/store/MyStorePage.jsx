import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Seller from "../../../sections/sellers/Seller";
import sellerImage from "../../../assets/seller.png";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import ProductsSidebar from "../../../sections/common/Products/ProductsSidebar";
import ProductsSection from "../../../sections/common/Products/ProductsSection";

const MyStorePage = () => {
  return (
    <Stack>
      <Box
        sx={{
          width: "931px",
          mx: "auto",
          mt: "75px",
        }}
      >
        <Seller
          seller={{
            img: sellerImage,
            info: "ملابس الصيرفى ",
          }}
        />
        <Typography
          sx={{
            fonSize: "20px",
            fontWeight: "800",
            lineHeight: "22px",
            mt: "37px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      <Box>
        <SectionTitle sectionTitle={{ main: "المتجر" }} />
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
            <ProductsSection isReview={true} />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default MyStorePage;
