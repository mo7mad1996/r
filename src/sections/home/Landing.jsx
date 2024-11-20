import { Box, styled } from "@mui/material";
import React, { useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import landingImage from "../../assets/home/landing.png";
import leftArrow from "../../assets/home/left-arrow.png";
import rightArrow from "../../assets/home/right-arrow.png";
import {
  ChevronLeft,
  ChevronLeftRounded,
  ChevronRight,
  ChevronRightRounded,
} from "@mui/icons-material";

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Box
            sx={{ width: "100%", height: "611px" }}
            component={"img"}
            src={landingImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{ width: "100%", height: "611px" }}
            component={"img"}
            src={landingImage}
          />
        </SwiperSlide>
      </Swiper>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "96%",
          top: "93px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
        }}
      >
        <ArrowBox sx={{ cursor: "pointer" }} onClick={handlePrev}>
          {/* <Box component={"img"} src={rightArrow}></Box> */}
          <ChevronRightRounded />
        </ArrowBox>
        <ArrowBox sx={{ cursor: "pointer" }} onClick={handleNext}>
          {/* <Box component={"img"} src={leftArrow}></Box> */}
          <ChevronLeftRounded />
        </ArrowBox>
      </Box>
    </Box>
  );
};

export default Landing;
