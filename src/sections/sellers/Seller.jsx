import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Reviews from "../../components/Reviews";
import Sellerbanner from "../../assets/Seller/SellerBanner.png"
const Seller = ({ seller }) => {
  return (
    <Box>
    <Box
      sx={{
        width: "120%",
        height: "50vh",
        backgroundColor: "red", // Fallback background color if image is not loaded
        backgroundImage: `url(${Sellerbanner})`, // Use the imported image as background
        backgroundSize: "cover", // Ensure the image covers the entire area
        backgroundPosition: "center", // Position the image in the center
        marginRight: "-23.8%",
        marginBottom: "50px"
      }}
    >
      
    </Box>
  
    <Box sx={{ display: "flex", gap: "29px",}}>

      <Box
        component={"img"}
        sx={{ width: "221px", height: "181px" }}
        src={seller.img}
      />
      <Stack>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "45px",
            textAlign: "right",
            color: "colors.mainBlack",
          }}
        >
          {/* ملابس الصيرفى */}
          {seller.info}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            justifyContent: "space-between",
            mt: "26px",
            mb: "25px",
            mr: "26px",
          }}
        >
          <Reviews />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "36px",
              color: "colors.greyStrock",
              // textAlign: "right",
            }}
          >
            121
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            justifyContent: "space-between",
            mr: "26px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "27px",
              textAlign: "right",
              color: "colors.mainBlack",
            }}
          >
            عدد المنتجات
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "30px",
              textAlign: "right",
              color: "colors.greyStrock",
            }}
          >
          {seller.productCount}
          </Typography>
        </Box>
      </Stack>
    </Box>
    </Box>
  );
};

export default Seller;
