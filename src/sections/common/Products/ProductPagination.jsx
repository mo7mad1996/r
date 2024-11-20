import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import productImg from "../../../assets/home/camera 2.png";
import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SwiperBox = styled(Swiper)({
  marginBottom: "29px",
  textAlign: "center",
  "& .swiper-pagination-bullet": {
    width: "15px",
    height: "15px",
    backgroundColor: "transparent",
    border: "1px solid #000000",
  },
  "& .swiper-pagination-bullet-active": {
    backgroundColor: "#000000",
  },
});
export default function ProductPagination() {
  const navigate = useNavigate();
  return (
    <Box>
      <SwiperBox
        dir="ltr"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array(4)
          .fill("")
          .map((item) => (
            <SwiperSlide>
              <Box
                component={"img"}
                sx={{
                  // width: "240px",
                  // height: "240px",
                  width: "138px",
                  height: "182px",
                  cursor: "pointer",
                  mb: "29px",
                }}
                src={productImg}
                onClick={() => {
                  console.log("product clicked");
                  navigate("/store/1");
                }}
              />
            </SwiperSlide>
          ))}
      </SwiperBox>
    </Box>
  );
}
