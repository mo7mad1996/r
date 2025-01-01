import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useApi from "@/hooks/useApi";
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import {
  AddShoppingCart,
  ChatOutlined,
  ExpandMore,
  Favorite,
  LocalAtm,
  MailOutline,
} from "@mui/icons-material";
import Magnifier from "../../components/Magnifier";
import Reviews from "../../components/Reviews";
import userAvatar from "../../assets/product/user.png";
import productImage from "../../assets/product/product.png";
import productImage3 from "../../assets/store/product1.png";
import faceIcon from "../../assets/store/face.png";
import instaIcon from "../../assets/store/insta.png";
import whatsIcon from "../../assets/store/whats.png";
import phoneIcon from "../../assets/store/phone.png";
import ProductsSlider from "../../sections/common/Products/ProductsSlider";
import { useParams } from "react-router-dom";

const products = {
  title: "",
  link: "#",
  products: [
    {
      id: "1",
      name: "حذاء كوتش رياضى",
      price: "500",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "2",
      name: "حذاء كوتش رياضى",
      price: "500",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "3",
      name: "حذاء كوتش رياضى",
      price: "500",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "4",
      name: "حذاء كوتش رياضى",
      price: "500",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "5",
      name: "حذاء كوتش رياضى",
      price: "500",
      oldPrice: "700",
      image: productImage,
    },
    {
      id: "6",
      name: "حذاء كوتش رياضى",
      price: "500",
      oldPrice: "700",
      image: productImage,
    },
  ],
};

const PRODUCT = {
  images: [productImage3, productImage3, productImage3, productImage3],
  title: "بيبي ليس اي برو 230 مملس بخار للشعر ، BA-ST395E، سيراميك، أرجواني",
  commercialSign: "بيبي ليس",
  reviews: 121,
  price: "500",
  oldPrice: "700",
  discount: "44",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
  colors: ["الأسود", "الأبيض", "الأزرق", "الأحمر", "الأخضر", "الأصفر"],
  storeQuantity: 100,
};

const StyledTypography = styled(Typography)({
  fontFamily: "Allerta Stencil",
  fontSize: "22px",
  fontWeight: "400",
  lineHeight: "24.55px",
  letterSpacing: "0em",
  color: "#292d32",
});
const ProductCustom = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "47px 0",
  // margin: "115px 0",
});
const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: "800",
  lineHeight: "22.32px",
  letterSpacing: "0em",
  textAlign: "right",
  color: "#292D32",
  borderColor: "#292D32",
  p: "0",
  px: "7px",
  minWidth: "20px",
  borderRadius: "8px",
  fontSize: "13px",
  //   width: "40px",
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
    borderColor: theme.palette.colors.website,
    color: "colors.wi8",
  },
}));
const CustomListItem = styled(ListItem)({
  "&, & p": {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "22.32px",
    textAlign: "right",
    color: "#3B3A3A",
  },

  "& p": {
    width: "149px",
  },
});
const ActionButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    paddingLeft: "10px",
  },
  width: "484px",
  height: "65px",
  border: "3px solid",
  borderColor: theme.palette.colors.website,

  borderRadius: "12px",
  fontWeight: "800",
  fontSize: "28px",
  lineHeight: "31.25px",
  color: theme.palette.colors.wi8,
  backgroundColor: theme.palette.colors.website,
  paddingLeft: "87px",
  justifyContent: "end",
  gap: "60px",
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
    color: theme.palette.colors.wi8,
    //   borderColor: "black",
  },
}));
const SupportBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "290px",
  },
  width: "369px",
  height: "51px",
  border: "2px solid #a5a5a5",
  borderRadius: "5px",
  color: theme.palette.colors.mainGreen,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  cursor: "pointer",
}));
const StyledIcons = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "calc(100% - 80px)",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  top: "100%",
  left: "40px",
  // transform: "translateX(-50%)",

  "& button": {
    position: "relative",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: theme.palette.colors.wi8,
    boxShadow: "0px 0px 10px 2px #00000040",
    cursor: "pointer",
    zIndex: "1200",
  },
  "& svg": {
    width: "90%",
    height: "90%",
  },
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "31px",
  color: theme.palette.colors.mainGreen,
  marginBottom: "-25px",
  marginRight: "36px",
  position: "relative",
  zIndex: "3",
}));
const ITEM_HEIGHT = 48;

const Product = () => {
  // config
  const api = useApi();
  const params = useParams();

  // data
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  // methods
  const getProduct = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/products/${params.id}`);

      const data = res.data.product;
      setProduct(data);

      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // onComponent render
  useEffect(() => {
    getProduct();
  }, []);

  // render
  if (loading) <Loading />;
  return (
    <>
      <Intro product={product} />
      <ReviewsSection />
      <Support />
      <RelatedProducts />
      <ProductsForTheSameSeller />
      <FavoriteProducts />
      <ProductsHaveBeenSeenBefore />
    </>
  );
};

export default Product;

function Loading() {
  return <div>Loading...</div>;
}

function Intro({ product }) {
  return (
    <Box
      sx={{
        p: { xs: "15px", md: "0" },
        mt: "178px",
      }}
    >
      <Box sx={{ display: { md: "flex" } }}>
        <ProductImages product={product} />
        <ProductInfo product={product} />
      </Box>
      <Stack
        sx={{
          flexDirection: { md: "row" },
          px: { md: "26px" },
        }}
      >
        <ProductDetails />
        <ShoppingInfo />
      </Stack>

      <ProductDescription />
    </Box>
  );
}

function ProductDescription() {
  return (
    <Box
      sx={{
        borderBottom: "2px solid #a5a5a5",
        mt: { xs: "50px", lg: "5px" },
        pb: "67px",
        px: { md: "83px" },
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "800",
          lineHeight: "39.06px",
          color: "colors.mainGreen",
          mb: "46px",
          mr: { lg: "48px" },
        }}
      >
        وصف المنتج
      </Typography>
      <Stack
        sx={{
          gap: "35px",

          borderRadius: "12px",
          // maxHeight: "280px",
          // overflowY: "auto",
          border: "3px solid #a5a5a5",
          p: "18px 26px 21px 58px",
          "& p": {
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "22.5px",
            color: "colors.mainBlack",
          },
        }}
      >
        <Typography>شاشة ذكية فائقة الجودة:</Typography>
        <Typography>
          تجمع هذه الشاشة الذكية بين التكنولوجيا المتقدمة والأداء المذهل لتقديم
          تجربة مشاهدة استثنائية. بفضل دقة العرض العالية وتقنيات الإضاءة الخلفية
          المتقدمة، تضمن الشاشة تفاصيل واضحة وألوان حية تعزز كل تجربة تفاعلية.
        </Typography>
        <Typography>ميزات متقدمة:</Typography>
        <Typography>
          تتميز هذه الشاشة بواجهة مستخدم سهلة الاستخدام ومتعددة الوظائف، مما
          يسمح للمستخدمين بالتنقل بسهولة والوصول السريع إلى محتواهم المفضل. تدعم
          تقنيات الاتصال اللاسلكي الحديثة مثل Bluetooth وWi-Fi، مما يوفر تجربة
        </Typography>
      </Stack>
    </Box>
  );
}
function ProductInfo({ product }) {
  // data
  const [size, setSize] = useState(PRODUCT.sizes[0]);

  return (
    <Stack sx={{ mt: { xs: "30px", md: "150px" }, gap: "30px" }}>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: "800",
          lineHeight: "21.38px",
          letterSpacing: "0em",
          textAlign: "right",
          color: "colors.mainBlack",
        }}
      >
        {product.name}
      </Typography>
      <Link to="" sx={{ textDecorationColor: "transparent" }}>
        <Typography
          sx={{
            fontSize: "19px",
            fontWeight: "800",
            lineHeight: "21.38px",
            letterSpacing: "0em",
            textAlign: "right",
            color: "colors.mainBlack",
            // my: "30px",
          }}
        >
          العلامة التجارية: {PRODUCT.commercialSign}
        </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: "2px",
          // my: "30px",
          mb: "10px",
          "& p": {
            fontSize: "19px",
            fontWeight: "800",
            lineHeight: "21px",
          },
        }}
      >
        <Typography sx={{ color: "colors.mainBlock" }}>قسم</Typography>
        <Typography sx={{ color: "colors.website" }}>
          {product["main-category"]}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          // mt: "20px",
        }}
      >
        <Reviews value={4} />
        <Box
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            color: "colors.greyStrock",
            // textAlign: "right",
          }}
        >
          {/* {product.reviews} */}
          121
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          // mt: "15.35px",
          my: "10px",
          "& p:not(:first-child)": {
            fontFamily: "Poppins",
            fontSize: "30px",
            fontWeight: "800",
            lineHeight: "33px",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Allerta Stencil",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "25px",
            color: "#292D32",
          }}
        >
          السعر :
        </Typography>
        <Typography
          sx={{
            color: "colors.website",
          }}
        >
          {Math.ceil(product.price_afte_discount)} ج.م
        </Typography>
        {product.percentage_discount && (
          <Typography
            sx={{
              position: "relative",
              color: "colors.mainRed",
              fontWeight: "500",
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
            {Math.ceil(product.main_price)} ج.م
          </Typography>
        )}
      </Box>

      {product.percentage_discount && (
        <Box sx={{ display: "flex", gap: "9px", mb: "50px" }}>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "25px",
              fontWeight: "800",
              color: "#292D32",
            }}
          >
            نسبة الخصم
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "800",
              lineHeight: "34px",
              color: "colors.website",
            }}
          >
            {product.percentage_discount} %
          </Typography>
        </Box>
      )}

      <ProductCustom>
        <StyledTypography sx={{ fontWeight: "bold", color: "#292D32" }}>
          المقاس:
        </StyledTypography>
        <Box sx={{ display: "flex", gap: "21px", flexWrap: "wrap" }}>
          {PRODUCT.sizes.map((item) => (
            <CustomButton
              variant="outlined"
              disableRipple
              key={item}
              sx={[
                size == item && {
                  backgroundColor: "colors.website",
                  color: "colors.wi8",
                },
                {
                  fontWeight: "400",
                  p: "3px",
                  borderColor: "#292D32",
                  borderRadius: "12px",
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                },
              ]}
              onClick={() => setSize(item)}
            >
              {item}
            </CustomButton>
          ))}
        </Box>
      </ProductCustom>
    </Stack>
  );
}

function ProductImages({ product }) {
  // data
  const [images, setImages] = useState([]);

  // methods
  const changeImages = (image, index) => {
    setImages((prev) => {
      let arr = [...prev];
      arr.splice(index, 1);
      prev = [image, ...arr];
      return prev;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column-reverse", sm: "row" },
      }}
    >
      {/* right small images */}
      <Stack
        sx={{
          flexDirection: { xs: "row", sm: "column" },
          width: { xs: "100px", sm: "202px" },
        }}
      >
        {images.map((image, n) => (
          <Box
            component={"img"}
            src={image}
            sx={{
              width: "100%",
              height: { xs: "120px", sm: "150px" },
              cursor: "pointer",
            }}
            onClick={() => changeImages(image, n + 1)}
          />
        ))}
      </Stack>

      {/* big image */}
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          // component={"img"}
          // src={images[0]}
          sx={{
            width: { xs: "300px", lg: "540px" },
            height: { xs: "375px", sm: "560px" },
            cursor: "pointer",
            // backgroundColor: "colors.mainGreen",
          }}
          onClick={() => changeImages(images[0], 0)}
        >
          <Magnifier
            src={product?.image}
            width={500}
            height={500}
            zoomLevel={3}
          />
        </Box>
        <StyledIcons>
          <IconButton size="small" disableRipple>
            <AddShoppingCart />
          </IconButton>
          <IconButton size="small" disableRipple>
            {/* <FavoriteBorder /> */}
            <Favorite sx={{ color: "colors.mainRed" }} />
          </IconButton>
        </StyledIcons>
      </Box>
    </Box>
  );
}
function ReviewsSection() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          mr: { xs: "15px", md: "137px" },
          mt: "50px",
          mb: "28px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "22.32px",
            textAlign: "right",
          }}
        >
          عدد التقيمات الكلية
        </Typography>
        <Typography
          sx={{
            color: "colors.greyStrock",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "36px",
            letterSpacing: "0em",
            textAlign: "right",
          }}
        >
          121
        </Typography>
      </Box>
      <Stack
        sx={{
          px: "60px",
          gap: { md: "50px", lg: "113px" },
          flexDirection: { md: "row" },
        }}
      >
        <Box
          sx={{
            "& p": {
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "20.09px",
            },
            "& p:first-of-type": {
              width: "55px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "26px",
            }}
          >
            <Typography>5 نجوم</Typography>
            <Box
              sx={{
                width: { xs: "43%", md: "315px", lg: "383px" },
                height: "53px",
                border: "1px solid #000000",
                borderRadius: "5px",
                position: "relative",
                mr: "27px",
                ml: "34px",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  width: "15%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  borderRadius: "5px",
                  backgroundColor: "colors.website",
                }}
              ></Box>
            </Box>
            <Typography>15 %</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "26px",
            }}
          >
            <Typography>4 نجوم</Typography>
            <Box
              sx={{
                width: { xs: "43%", md: "315px", lg: "383px" },
                height: "53px",
                border: "1px solid #000000",
                borderRadius: "5px",
                position: "relative",
                mr: "27px",
                ml: "34px",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  width: "70%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  borderRadius: "5px",
                  backgroundColor: "colors.website",
                }}
              ></Box>
            </Box>
            <Typography>70 %</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "26px",
            }}
          >
            <Typography>3 نجوم</Typography>
            <Box
              sx={{
                width: { xs: "43%", md: "315px", lg: "383px" },
                height: "53px",
                border: "1px solid #000000",
                borderRadius: "5px",
                position: "relative",
                mr: "27px",
                ml: "34px",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  width: "30%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  borderRadius: "5px",
                  backgroundColor: "colors.website",
                }}
              ></Box>
            </Box>
            <Typography>30 %</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "26px",
            }}
          >
            <Typography>نجمتان</Typography>
            <Box
              sx={{
                width: { xs: "43%", md: "315px", lg: "383px" },
                height: "53px",
                border: "1px solid #000000",
                borderRadius: "5px",
                position: "relative",
                mr: "27px",
                ml: "34px",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  width: "1%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  borderRadius: "5px",
                  backgroundColor: "colors.website",
                }}
              ></Box>
            </Box>
            <Typography>1 %</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>نجمة</Typography>
            <Box
              sx={{
                width: { xs: "43%", md: "315px", lg: "383px" },
                height: "53px",
                border: "1px solid #000000",
                borderRadius: "5px",
                position: "relative",
                mr: "27px",
                ml: "34px",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  width: "1%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  borderRadius: "5px",
                  backgroundColor: "colors.website",
                }}
              ></Box>
            </Box>
            <Typography>1 %</Typography>
          </Box>
        </Box>
        {/* user review */}
        <Box>
          <Stack sx={{ gap: "27px", mt: { xs: "50px", md: "0" } }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    backgroundColor: "#A5B3B3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box component={"img"} src={userAvatar}></Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "33.48px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "colors.mainBlack",
                  }}
                >
                  Fatma Abdo
                </Typography>
              </Box>
              <Stack sx={{ mr: "24px", mt: "16px", gap: "16px" }}>
                <Reviews />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "colors.mainBlack",
                  }}
                >
                  منتج جيد
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "#3B3A3A",
                  }}
                >
                  منتج سهل الأستخدام
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    backgroundColor: "#A5B3B3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box component={"img"} src={userAvatar}></Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "33.48px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "colors.mainBlack",
                  }}
                >
                  Fatma Abdo
                </Typography>
              </Box>
              <Stack sx={{ mr: "24px", mt: "16px", gap: "16px" }}>
                <Reviews />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "colors.mainBlack",
                  }}
                >
                  منتج جيد
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "#3B3A3A",
                  }}
                >
                  منتج سهل الأستخدام
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    backgroundColor: "#A5B3B3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box component={"img"} src={userAvatar}></Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "33.48px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "colors.mainBlack",
                  }}
                >
                  Fatma Abdo
                </Typography>
              </Box>
              <Stack sx={{ mr: "24px", mt: "16px", gap: "16px" }}>
                <Reviews />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "colors.mainBlack",
                  }}
                >
                  منتج جيد
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "#3B3A3A",
                  }}
                >
                  منتج سهل الأستخدام
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    backgroundColor: "#A5B3B3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box component={"img"} src={userAvatar}></Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "33.48px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "colors.mainBlack",
                  }}
                >
                  Fatma Abdo
                </Typography>
              </Box>
              <Stack sx={{ mr: "24px", mt: "16px", gap: "16px" }}>
                <Reviews />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "colors.mainBlack",
                  }}
                >
                  منتج جيد
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "22.32px",
                    color: "#3B3A3A",
                  }}
                >
                  منتج سهل الأستخدام
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Box
            sx={{
              width: "fit-content",
              fontSize: "22px",
              fontWeight: "800",
              lineHeight: "25px",
              color: "colors.mainGreen",
              borderBottom: "1px solid #008C5D",
              pb: "16px",
              cursor: "pointer",
              mt: "65px",
            }}
          >
            عرض المزيد من المراجعات
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

function Support() {
  return (
    <>
      <Stack sx={{ alignItems: "center", mt: "145.47px", mb: "183px" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "800",
            lineHeight: "31px",
            color: "colors.mainGreen",
            mb: "54px",
          }}
        >
          {t("Support")}
        </Typography>
        <SupportBox>
          <ChatOutlined />
          <Typography
            sx={{ fontWeight: "800", fontSize: "18px", lineHeight: "20.09px" }}
          >
            {t("Live Chat")}
          </Typography>
        </SupportBox>
        <SupportBox mt="21px">
          <MailOutline />
          <Typography
            sx={{ fontWeight: "800", fontSize: "18px", lineHeight: "20.09px" }}
          >
            {t("Email")}
          </Typography>
        </SupportBox>
        <Stack
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row-reverse"}
          mt="97px"
        >
          <Box
            component={"img"}
            src={faceIcon}
            sx={{ cursor: "pointer", width: "60px", height: "60px" }}
          ></Box>
          <Box
            component={"img"}
            src={whatsIcon}
            sx={{ cursor: "pointer", width: "60px", height: "60px" }}
          ></Box>
          <Box
            component={"img"}
            src={instaIcon}
            sx={{ cursor: "pointer", width: "60px", height: "60px" }}
          ></Box>
          <Box
            component={"img"}
            src={phoneIcon}
            sx={{ cursor: "pointer", width: "60px", height: "60px" }}
          ></Box>
        </Stack>
      </Stack>
    </>
  );
}
function RelatedProducts() {
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #000000",
          mb: "62px",
        }}
      >
        <StyledTitle>منتجات ذات صلة</StyledTitle>
        <ProductsSlider
          title={"الألكترونيات"}
          products={products.products}
          link={"/store"}
        />
      </Box>
    </>
  );
}

function ProductsForTheSameSeller() {
  return (
    <Box>
      <StyledTitle>منتجات لنفس البائع</StyledTitle>
      <ProductsSlider
        title={"Joumla"}
        products={products.products}
        link={products.link}
      />
    </Box>
  );
}

function FavoriteProducts() {
  return (
    <Box>
      <StyledTitle>المنتجات المفضلة</StyledTitle>
      <ProductsSlider
        title={"Joumla"}
        products={products.products}
        link={products.link}
      />
    </Box>
  );
}

function ProductsHaveBeenSeenBefore() {
  return (
    <Box>
      <StyledTitle>منتجات تم مشاهدتها من قبل</StyledTitle>
      <ProductsSlider
        title={"Joumla"}
        products={products.products}
        link={products.link}
      />
    </Box>
  );
}

function ShoppingInfo() {
  // data
  const [color, setColor] = useState(PRODUCT.colors[0]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [quantity, setQuantity] = useState(1);

  const quantityOptions = Array(100)
    .fill(1)
    .map((item, index) => ++index);
  const open = Boolean(anchorEl);

  // methods
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // render
  return (
    <Box>
      <ProductCustom>
        <StyledTypography>اللون :</StyledTypography>
        <Box
          sx={{
            display: "flex",
            gap: "27px",
            width: "300px",
            flexWrap: "wrap",
          }}
        >
          {PRODUCT.colors.map((item) => (
            <CustomButton
              variant="outlined"
              disableRipple
              key={item}
              sx={[
                // {
                //   color: "#292D32",
                //   borderColor: "#292D32",
                //   p: "0",
                //   px: "7px",
                //   minWidth: "20px",
                //   borderRadius: "8px",
                //   fontSize: "13px",
                //   //   width: "40px",
                //   "&:hover": {
                //     backgroundColor: "colors.website",
                //     borderColor: "colors.website",
                //     color: "colors.wi8",
                //   },
                // },
                color == item && {
                  backgroundColor: "colors.website",
                  borderColor: "colors.website",
                  color: "colors.wi8",
                },
              ]}
              onClick={() => setColor(item)}
            >
              {item}
            </CustomButton>
          ))}
        </Box>
      </ProductCustom>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "25px",
          // mt: "83px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "27.9px",
            color: "colors.website",
          }}
        >
          الكمية في المخزون
        </Typography>
        <Box
          sx={{
            width: "141px",
            height: "46px",
            border: "1px solid #a5a5a5",
            borderRadius: "12px",
            fontFamily: "Allerta Stencil",
            lineHeight: "25.57px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#292D32",
          }}
        >
          {PRODUCT.storeQuantity}
        </Box>
      </Box>
      <Box
        sx={{
          width: "183px",
          height: "46px",
          borderRadius: "12px",
          border: "1px solid #a5a5a5",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "15px",
          mt: "48px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "28px",
            textAlign: "right",
          }}
        >
          الكمية :
        </Typography>
        <Typography
          sx={{
            fontFamily: "Allerta Stencil",
            fontSize: "20px",
            lineHeight: "25.57px",
            textAlign: "right",
          }}
        >
          {quantity}
        </Typography>
        <ExpandMore
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-Menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
        {/* choose quantity  */}
        <Menu
          id="long-Menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {quantityOptions.map((option, index) => (
            <MenuItem
              key={option}
              selected={option === 1}
              onClick={() => {
                setQuantity(option);
                handleClose();
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* Controllers  */}
      <ActionButton
        variant="outlined"
        disableRipple
        endIcon={<AddShoppingCart sx={{ width: "32px", height: "32px" }} />}
        sx={{
          mt: "56px",
          mb: "34px",
        }}
      >
        أضف الى السلة
      </ActionButton>
      <ActionButton
        variant="outlined"
        disableRipple
        endIcon={<LocalAtm sx={{ width: "32px", height: "32px" }} />}
        sx={{
          backgroundColor: "colors.mainRed",
          borderColor: "colors.mainRed",
        }}
      >
        أشترى الآن{" "}
      </ActionButton>
      {/* Sales info  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "81px",
          mt: "41px",
          mb: "30px",
          "& p, & span": {},
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "800",
            lineHeight: "31.25px",
            textAlign: "right",
            color: "colors.mainBlack",
          }}
        >
          الشحن بواسطة{" "}
          <Box
            component={"span"}
            sx={{
              fontWeight: "700",
              color: "colors.mainGreen",
            }}
          >
                        {t("Joumla")}

          </Box>
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "26.75px",
            color: "colors.mainGreen",
          }}
        >
          يصلك الثلاثاء, 25, يناير, 2024{" "}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "800",
          lineHeight: "31.25px",
          textAlign: "right",
          color: "colors.mainBlack",
        }}
      >
        يباع بواسطة{" "}
        <Box
          component={"span"}
          sx={{
            fontWeight: "700",
            color: "colors.mainGreen",
          }}
        >
                      {t("Joumla")}

        </Box>
      </Typography>
    </Box>
  );
}

function ProductDetails() {
  return (
    <>
      <Stack
        sx={{
          width: { md: "940px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "800",
            lineHeight: "27.9px",
            letterSpacing: "0em",
            textAlign: "right",
            color: "colors.mainGreen",
            mb: "28px",
          }}
        >
          تفاصيل المنتج{" "}
        </Typography>
        <Box>
          <List>
            <CustomListItem>
              <Typography>الماركة :</Typography> lego
            </CustomListItem>
            <CustomListItem>
              <Typography>الخامة :</Typography> بلاستيك
            </CustomListItem>
            <CustomListItem>
              <Typography>اللون :</Typography> اسود
            </CustomListItem>
            <CustomListItem>
              <Typography>المقاس :</Typography> XL
            </CustomListItem>
            <CustomListItem>
              <Typography>الوزن :</Typography> gm
            </CustomListItem>
            <CustomListItem sx={{ display: "flex", alignItems: "start" }}>
              <Typography>الأبعاد :</Typography>{" "}
              <Box
                sx={{
                  display: "flex",
                  gap: "31px",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "16.86px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  طول{" "}
                  <Box
                    sx={{
                      width: "49px",
                      height: "30px",
                      fontSize: "20px",
                      backgroundColor: "colors.liteGrey",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #505050",
                      borderRadius: "3px",
                    }}
                  >
                    5
                  </Box>{" "}
                  سم
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "16.86px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {t("Offer")}
                  <Box
                    sx={{
                      width: "49px",
                      height: "30px",
                      fontSize: "20px",
                      backgroundColor: "colors.liteGrey",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #505050",
                      borderRadius: "3px",
                    }}
                  >
                    5
                  </Box>{" "}
                  سم
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "16.86px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  إرتفاع{" "}
                  <Box
                    sx={{
                      width: "49px",
                      height: "30px",
                      fontSize: "20px",
                      backgroundColor: "colors.liteGrey",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #505050",
                      borderRadius: "3px",
                    }}
                  >
                    5
                  </Box>{" "}
                  سم
                </Box>
              </Box>
            </CustomListItem>
            <CustomListItem>
              <Typography>رقم الموديل :</Typography> 137
            </CustomListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
}
