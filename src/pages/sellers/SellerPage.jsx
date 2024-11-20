import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProductsSection from "../../sections/common/Products/ProductsSection";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";
import sellerImage from "../../assets/seller.png";
import Reviews from "../../components/Reviews";
import Seller from "../../sections/sellers/Seller";

const SellerPage = () => {
  return (
    <>
      <Box sx={{ mt: "75px", mr: "331px" }}>
        {/* <Box sx={{ display: "flex", gap: "29px" }}>
          <Box
            component={"img"}
            sx={{ width: "221px", height: "181px" }}
            src={sellerImage}
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
              ملابس الصيرفى
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
                129
              </Typography>
            </Box>
          </Stack>
        </Box> */}
        <Seller
          seller={{
            img: sellerImage,
            info: "ملابس الصيرفى ",
          }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "22px",
            textAlign: "right",
            color: "colors.mainBlack",
            width: "931px",
            height: "174px",
            mt: "37px",
          }}
        >
          تسوّقوا معنا لتجدوا أحدث الهواتف الذكية، اللوحيات، الأجهزة الصوتية،
          والإكسسوارات الإلكترونية الرائعة. نضمن لكم تجربة تسوق سلسة وموثوقة،
          حيث نقدم معلومات واضحة وصور دقيقة لكل منتج. نحن هنا لتلبية احتياجاتكم
          التقنية وضمان رضاكم. اكتشفوا عالم الإلكترونيات معنا، حيث الجودة
        </Typography>
      </Box>
      {/* <SectionTitle
        sectionTitle={{ main: "المتجر", second: "جميع المنتجات" }}
      /> */}
      <Stack>
        <Box sx={{ display: "flex", gap: "86px", pl: "66px" }}>
          <Box mt={"-90px"}>
            <ProductsSidebar />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "800",
                lineHeight: "45px",
                textAlign: "center",
                color: "colors.greyStrock",
                mb: "120px",
              }}
            >
              (جميع المنتجات)
            </Typography>
            <ProductsSection />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default SellerPage;
