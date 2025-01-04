import React, { useCallback, useRef, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import useApi from "@/hooks/useApi";

// components
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";

import css from "./style.module.css";
import { t } from "i18next";
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
  height: "130px",
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
export default function SectionsSlider() {
  const api = useApi();
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  const getSection = async () => {
    try {
      const res = await api.get("/main_categories");
      const data = res.data.categories;

      setCategories(data);
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
        <span className={css.header_span}>{t("sections")}</span>
        <LinkItem to="/sections">{t("View more")}</LinkItem>
      </header>

      <Slider items={categories} />
    </Box>
  );
}
function Slider({ items }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
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
              slidesPerView: 4,
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
                  height: "375px",
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "colors.website",
                  backgroundColor: "rgba(255, 242, 242, 0.949)",
                  mt: "16px",
                }}
                onClick={() => navigate("/sections/" + item.id)}
              >
                <img src={item.image} alt={item.name} />
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
                    <Typography
                      sx={{
                        position: "relative",
                        color: "colors.mainRed",
                      }}
                    >
                      {item.slug}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/*  */}
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
          direction: "rtl",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <ArrowBox
          onClick={handlePrev}
          sx={{
            pointerEvents: "all",
          }}
        >
          <ChevronRight />
        </ArrowBox>
        <ArrowBox
          onClick={handleNext}
          sx={{
            pointerEvents: "all",
          }}
        >
          <ChevronLeft />
        </ArrowBox>
      </Box>
    </>
  );
}
