import { Box, styled } from "@mui/material";
import ProductsSlider from "@/sections/common/Products/ProductsSlider";
import Landing from "@/sections/home/Landing";

// assets
import image1 from "@/assets/home/1.png";
import image2 from "@/assets/home/2.png";
import image3 from "@/assets/home/3.png";
import image4 from "@/assets/home/4.png";
import image5 from "@/assets/home/5.png";
import image6 from "@/assets/home/6.png";
import image7 from "@/assets/home/7.png";
import image8 from "@/assets/home/8.png";
import section1 from "@/assets/home/Ellipse 3.png";
import section2 from "@/assets/home/Ellipse 5.png";
import section3 from "@/assets/home/Ellipse 6.png";
import section4 from "@/assets/home/Ellipse 8.png";
import productImage from "@/assets/home/camera 2.png";

// components
import Secondgallery from "@/sections/home/secondgallery";
import Gallery from "@/sections/home/Gallery";
import LatestProducts from "@/components/pages/home/LatestProducts/index.jsx";
import SectionsSlider from "@/components/pages/home/SectionsSlider/index.jsx";
import { useTranslation } from "react-i18next";

const itemData = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
const sections = {
  title: "",
  link: "#",
  sections: [
    {
      id: "1",
      name: "الألكترونيات",
      // price: "250 ج.م", oldPrice: "700 ج.م",
      image: section1,
    },
    {
      id: "2",
      name: "الألكترونيات",
      // name: "كاميرا كانون اصدار حديث",
      // price: "250 ج.م", oldPrice: "700 ج.م",
      image: section2,
    },
    {
      id: "3",
      name: "الألكترونيات",
      // name: "كاميرا كانون اصدار حديث",
      // price: "250 ج.م", oldPrice: "700 ج.م",
      image: section3,
    },
    {
      id: "4",
      name: "الألكترونيات",
      // name: "كاميرا كانون اصدار حديث",
      // price: "250 ج.م", oldPrice: "700 ج.م",
      image: section4,
    },
    {
      id: "5",
      name: "الألكترونيات",
      // price: "250 ج.م", oldPrice: "700 ج.م",
      image: section1,
    },
  ],
};
const products = {
  title: "",
  link: "#",
  products: [
    {
      id: "1",
      name: "كاميرا كانون اصدار حديث",
      price: "250",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "2",
      name: "كاميرا كانون اصدار حديث",
      price: "250",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "3",
      name: "كاميرا كانون اصدار حديث",
      price: "250 ",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "4",
      name: "كاميرا كانون اصدار حديث",
      price: "250 ",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "5",
      name: "كاميرا كانون اصدار حديث",
      price: "250",
      oldPrice: "700 ",
      image: productImage,
    },
    {
      id: "6",
      name: "كاميرا كانون اصدار حديث",
      price: "250 ",
      oldPrice: "700",
      image: productImage,
    },
  ],
};
const Image = styled("img")({});

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "#b8aeae", position: "relative" }}>
      <Landing />
      <Box
        sx={{
          position: "relative",
          transform: "translateY(-340px)",
          mb: "-340px",
          zIndex: 1,
        }}
      >
        <Gallery sx={{ display: "none" }} data={itemData} />
      </Box>
      <Box>
        <ProductsSlider
          title={t("store")}
          products={products.products}
          link={"/store"}
        />

        <ProductsSlider
          title={t("The best offers and discounts")}
          products={products.products}
          link={"/store/best-sale"}
        />
        <LatestProducts />
        <SectionsSlider />
        <Secondgallery data={itemData.slice(0, 4)} />
        <ProductsSlider
          title={"عروض اليوم"}
          products={products.products}
          link={"/store"}
        />
        <Box sx={{ pb: "240px" }}>
          <Secondgallery data={itemData.slice(0, 4)} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
