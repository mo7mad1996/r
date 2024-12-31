import React, { useContext, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProductsSection from "../../sections/common/Products/ProductsSection";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";
import sellerImage from "../../assets/seller.png";
import Reviews from "../../components/Reviews";
import Seller from "../../sections/sellers/Seller";
import { Context } from "../../components/Context/Context";
import { useParams } from "react-router-dom";

const SellerPage = () => {
  let params = useParams();

  let [vendor, setVendor] = useState({});

  let { vendorData } = useContext(Context);
  async function getVendorInfo(id) {
    let res = await vendorData(id);
    setVendor(res?.data?.vendor);
  }

  useEffect(() => {
    getVendorInfo(params.id);
  }, []);

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
            img: vendor.logo,
            info: vendor.vendor_name,
            productCount: vendor?.products?.length,
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
          {t("_____long____text_____")}
        </Typography>
      </Box>
      {/* <SectionTitle
        sectionTitle={{ main: "store", second:        "All Products" }}
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
              ({t("All Products")})
            </Typography>
            <ProductsSection />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default SellerPage;
