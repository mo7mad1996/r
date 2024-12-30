import React, { useCallback, useRef, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import useApi from "@/hooks/useApi";

// components
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";

import css from "./style.module.css";
import { useTranslation } from "react-i18next";

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
  // height: "130px",
  "&:first-of-type": {
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  "&:last-of-type": {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  "& svg": {
    fontSize: "75px",
    color: theme.palette.colors.wi8,
  },
  zIndex: 1,
  cursor: "pointer",
}));

// component
export default function LatestProducts() {
  const api = useApi();
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  const getSection = async () => {
    try {
      const res = await api.get("/product/latest_products");
      const data = res.data.products.data;
      setProducts(data);

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSection();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: "25px",
        my: "24px",
        backgroundColor: "colors.wi8",
        px: { xs: "36px", sm: "77px" },
      }}
    >
      {/* header */}
      <header className={css.header}>
        <span className={css.header_span}>{t("The latest products")}</span>
        <LinkItem to="/store/latest-products">{t("View more")}</LinkItem>
      </header>

      <Slider items={products} />
    </Box>
  );
}
function Slider({ items }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      {/* items  */}
      <Box
        sx={{
          position: "relative",
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
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
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
          {items.map((item, n) => (
            <SwiperSlide key={n}>
              <Box
                sx={{
                  borderRadius: "5px",
                  border: "1px solid",
                  padding: "1em",
                  borderColor: "colors.website",
                  backgroundColor: "rgba(255, 242, 242, 0.949)",
                  mt: "16px",
                }}
                onClick={navigate(`/store/${item.id}`)}
              >
                <img
                  src={item.image}
                  className={css.product_img}
                  alt={item.name}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "30px",
                      my: "16px",
                      mx: "22px",
                    }}
                  >
                    {item.name}
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
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
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
                        {item.price_afte_discount} ج.م
                      </Typography>
                      {item.percentage_discount && (
                        <Typography
                          sx={{
                            position: "relative",
                            color: "colors.mainRed",
                            // mt: "5px",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              width: "80%",
                              height: "2px",
                              top: "50%",
                              right: "10%",
                              backgroundColor: "colors.mainRed",
                              transform: "rotate(-20deg)",
                            },
                          }}
                        >
                          {item.main_price} ج.م
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box
        sx={{
          //   pointerEvents: "none",
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          right: "0",
        }}
      >
        <ArrowBox onClick={handlePrev}>
          <ChevronRight />
        </ArrowBox>
        <ArrowBox onClick={handleNext}>
          <ChevronLeft />
        </ArrowBox>
      </Box>
    </>
  );
}
