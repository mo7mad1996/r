import React, { useCallback, useRef } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

// import productImg from "../assets/home/camera 2.png";
import ProductPagination from "../../../sections/common/Products/ProductPagination";
const LinkItem = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.colors.website,
  fontSize: "18px",
  fontWeight: "800",
  lineHeight: "20.09px",
  letterSpacing: "0em",
  textAlign: "right",
  cursor: "pointer",
}));
const ArrowBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.colors.website,
  [theme.breakpoints.down("sm")]: {
    width: "70px",
    height: "100px",
    "& img": {
      width: "35px",
      height: "",
    },
  },
  //   width: "89px",
  height: "130px",
  // border: "1px solid black",
  "&:first-of-type": {
    // borderRight: "none",
    // borderRadius: "5px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  "&:last-of-type": {
    // borderLeft: "none",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  "& svg": {
    fontSize: "75px",
    color: theme.palette.colors.wi8,
  },
  zIndex: 2,
  cursor: "pointer",
}));
const ProductsSlider = ({ products, title, link }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { t } = useTranslation();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "colors.wi8",
        // pt: "63px",
        // pb: "10px",
        py: "25px",
        px: { xs: "36px", sm: "77px" },
        my: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          mb: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "24.55px",
            letterSpacing: "0em",
            textAlign: "right",
          }}
        >
          {title}
        </Typography>
        <LinkItem to={link} sx={{}}>
          {t("View more")}
        </LinkItem>
      </Box>
      {/* products  */}
      <Box
        sx={{
          position: "relative",
          //   zIndex: 1350,
          zIndex: 1,
        }}
      >
        <Swiper
          dir="rtl"
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              // spaceBetween: 50,
            },
          }}
          ref={sliderRef}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                sx={{
                  //   width: "328px",
                  height: "375px",
                  //   textAlign: "center",
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "colors.website",
                  backgroundColor: "rgba(255, 242, 242, 0.949)",
                  mt: "16px",
                }}
              >
                {/* <Box
                  component={"img"}
                  sx={{
                    // width: "240px",
                    // height: "240px",
                    width: "138px",
                    height: "182px",
                    cursor: "pointer",
                  }}
                  src={productImg}
                  onClick={() => {
                    navigate("/store/1");
                  }}
                /> */}
                <ProductPagination />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "30px",
                      mb: "16px",
                      mx: "22px",
                    }}
                  >
                    {product.name}{" "}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      mx: "22px",
                      "& p": {
                        fontFamily: "Poppins",
                        fontSize: "25px",
                        fontWeight: "600",
                        lineHeight: "37.5px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "colors.website",
                        // mt: "5px",
                      }}
                    >
                      {product.price} ج.م
                    </Typography>
                    <Typography
                      sx={{
                        position: "relative",
                        color: "colors.mainRed",
                        // mt: "5px",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "50px",
                          height: "2px",
                          top: "50%",
                          right: "0",
                          backgroundColor: "colors.mainRed",
                          transform: "rotate(-20deg) translateY(-50%)",
                        },
                      }}
                    >
                      {product.oldPrice} ج.م
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          right: "0",
          //   zIndex: 1300,
        }}
      >
        <ArrowBox onClick={handlePrev}>
          {/* <Box component={"img"} src={leftArrow}></Box> */}
          <ChevronRight />
        </ArrowBox>
        <ArrowBox onClick={handleNext}>
          {/* <Box
            component={"img"}
            src={leftArrow}
            sx={{ transform: "rotate(180deg)" }}
          ></Box> */}
          <ChevronLeft />
        </ArrowBox>
      </Box>
    </Box>
  );
};

export default ProductsSlider;
