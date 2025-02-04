import { Box, styled } from "@mui/material";
import React, { useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

import landingImage from "~/assets/home/landing.png";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const ArrowBox = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `5px solid ${theme.palette.colors.wi8}`,
  "& svg": {
    color: theme.palette.colors.wi8,
    width: "60px",
    height: "60px",
  },
}));
const Landing = () => {
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
    <Box sx={{ position: "relative" }}>
      <Swiper
        dir="rtl"
        ref={sliderRef}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        // spaceBetween={22}
        slidesPerView={1}
        modules={[Navigation]}
      >
        {[landingImage, landingImage, landingImage].map((img, n) => (
          <SwiperSlide key={n}>
            <Box
              sx={{
                height: "100dvh",
                width: "100%",
                background: `url('${img}')`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          top: "100px",
          left: "0",
          padding: "1em",
          zIndex: 1,
          direction: "rtl",
        }}
      >
        <ArrowBox sx={{ cursor: "pointer" }} onClick={handlePrev}>
          <ChevronRightRounded />
        </ArrowBox>
        <ArrowBox sx={{ cursor: "pointer" }} onClick={handleNext}>
          <ChevronLeftRounded />
        </ArrowBox>
      </Box>
    </Box>
  );
};

export default Landing;
