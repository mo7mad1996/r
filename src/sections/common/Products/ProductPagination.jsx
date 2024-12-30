import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import productImg from "~/assets/home/camera 2.png";
import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Context } from "~/components/Context/Context";

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

  let [allProducts, setAllProducts] = useState([]);
  const { getProducts } = useContext(Context);
  async function getProductsImages() {
    let res = await getProducts();
    setAllProducts(res?.data?.products?.data);
  }
  useEffect(() => {
    getProductsImages();
  }, []);
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
        {allProducts?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              component={"img"}
              sx={{
                width: "138px",
                height: "182px",
                cursor: "pointer",
                mb: "29px",
              }}
              src={item.image}
              onClick={() => {
                navigate("/store/1");
              }}
            />
          </SwiperSlide>
        ))}
      </SwiperBox>
    </Box>
  );
}
