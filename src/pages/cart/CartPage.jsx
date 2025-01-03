import React, { useEffect, useState } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import {
  Add,
  Delete,
  DeleteOutline,
  FavoriteBorder,
  Remove,
  Share,
} from "@mui/icons-material";
import Reviews from "../../components/Reviews";

import product1 from "../../assets/orders/product1.png";
import product2 from "../../assets/orders/product3.png";
import { useNavigate } from "react-router-dom";

import useApi from "@/hooks/useApi";

const StyledIcons = styled(Box)({
  //   position: "absolute",
  height: "48px",
  width: "131px",
  //   left: "0",
  //   top: "0",
  borderRadius: "12px",
  border: "1px solid #A5A5A5",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

const CartPage = () => {
  // config
  const api = useApi();
  const navigate = useNavigate();

  // data
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // methods
  const getCart = async () => {
    try {
      setLoading(true);
      const res = await api.get("/user/cart");

      const data = res.data["cart products"];

      setProducts(data);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // on render
  useEffect(() => {
    getCart();
  }, []);

  // render

  if (errorMessage)
    return (
      <>
        <SectionTitle sectionTitle={{ main: "Shopping Cart" }} />
        <h4>{errorMessage}</h4>;
      </>
    );

  return (
    <>
      <SectionTitle sectionTitle={{ main: "Shopping Cart" }} />
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          px: "55px",
          mb: "100px",
        }}
      >
        {/* products  */}
        <Stack gap="53px">
          {products.map((product) => (
            <SingleItem product={product} key={product.id} />
          ))}
        </Stack>
        {/* total items  */}
        <Box
          sx={{
            width: "549px",
            height: "345px",
            border: "1px solid #000000",
            p: "19px 25px 26px",
          }}
        >
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: " 700",
              lineHeight: "29px",
              color: "#000000",
            }}
          >
            اجمالي {t("Shopping Cart")}
          </Typography>
          <Box
            sx={{
              fontSize: "22px",
              fontWeight: "400",
              lineHeight: "25px",
              display: "flex",
              justifyContent: "space-between",
              pb: "10px",
              px: "18px",
              mt: "53px",
              // borderBottom: "1px solid #505050",
            }}
          >
            <Typography>المجموع</Typography>
            <Typography
              sx={{
                fontWeight: "800",
                color: "colors.mainGreen",
              }}
            >
              1000 ج.م
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "22px",
              fontWeight: "400",
              lineHeight: "25px",
              display: "flex",
              justifyContent: "space-between",
              pb: "10px",
              px: "18px",
              mt: "7px",
              // borderBottom: "1px solid #505050",
            }}
          >
            <Typography>الشحن</Typography>
            <Typography
              sx={{
                fontWeight: "800",
                color: "colors.mainGreen",
              }}
            >
              يتم حساب تكاليف الشحن عند الخروج
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "22px",
              fontWeight: "400",
              lineHeight: "25px",
              display: "flex",
              justifyContent: "space-between",
              pb: "10px",
              px: "18px",
              mb: "49px",
            }}
          >
            <Typography>الاجمالي</Typography>
            <Typography
              sx={{
                fontWeight: "800",
                color: "colors.mainGreen",
              }}
            >
              1000 ج.م
            </Typography>
          </Box>
          <Box
            sx={{
              width: "371px",
              height: "50px",
              backgroundColor: "colors.website",
              borderRadius: "5px",
              border: "1px solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "700",
              lineHeight: "25px",
              color: "colors.wi8",
              mx: "auto",
              cursor: "pointer",
            }}
            onClick={() => navigate("summary")}
          >
            تابع لاتمام الطلب (3 سلع)
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default CartPage;

function SingleItem({ product }) {
  return (
    <Stack
      sx={{
        width: "726px",
        height: "396px",
        justifyContent: "space-between",
        borderRadius: "5px",
        border: "2px solid #505050",
        // px: "19px",
        // pt: "23px",
        pb: "35px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "17px",
        }}
      >
        <Stack sx={{ gap: "49px" }}>
          {/* <Box
            sx={{
              width: "234px",
              //   height: "217px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "42.34px",
                height: "34px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                border: "1px solid #A5A5A5",
                fontFamily: "Apel",
              }}
            >
              44%-
            </Box>
            <StyledIcons>
              <IconButton size="small" disableRipple>
                <Share
                  sx={{ width: "40px", height: "40px", color: "#3B3A3A" }}
                />
              </IconButton>
              <IconButton size="small" disableRipple>
                <FavoriteBorder
                  sx={{ width: "40px", height: "40px", color: "#3B3A3A" }}
                />
              </IconButton>
            </StyledIcons>
          </Box> */}
          <Box
            sx={{
              width: "234px",
              height: "234px",
              borderTopRightRadius: "5px",
              // borderRadius: "12px",
              // border: "1px solid #A5A5A5",
              // padding: "21px 0px",
              backgroundColor: "#DBDBDB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="img" src={product.product.image} />
          </Box>
        </Stack>
        <Stack sx={{ mt: "30px" }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontSize: "28px",
              fontWeight: "500",
              lineHeight: "42px",
              mb: "19px",
            }}
          >
            {product.product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Reviews />
            <Box
              sx={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: "36px",
                color: "colors.greyStrock",
                // textAlign: "right",
              }}
            >
              89
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "42px",
            }}
          >
            الكمية : {product.quantity}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mt: "15px",
              "& p": {
                fontFamily: "Poppins",
                fontSize: "28px",
                fontWeight: "600",
                lineHeight: "42px",
              },
            }}
          >
            <Typography
              sx={{
                color: "colors.mainGreen",
              }}
            >
              {product.product.price} ج.م
            </Typography>
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
              700 ج.م
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",

              color: "colors.mainBlack",
              mb: "16px",
              "&, & p": {
                fontFamily: "Poppins",
                fontSize: "28px",
                fontWeight: "500",
                lineHeight: "42px",
              },
            }}
          >
            يباع بواسطة{" "}
            <Typography color={"colors.mainGreen"}>Ronza store</Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "20px",
              color: "colors.greyStrock",
            }}
          >
            يمكنك ارجاع هذا المنتج خلال15 يوم
          </Typography>
        </Stack>
      </Box>
      {/* controllers  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "24px",
        }}
      >
        <Box
          sx={{
            width: "210.01px",
            height: "55px",
            borderRadius: "12px",
            border: "1px solid #505050",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            disableRipple
            aria-label="remove"
            sx={{
              width: "70.43px",
              height: "55px",
              // borderRadius: "0px 12px 12px 0px",
              border: "1px solid #505050",
              borderRadius: "12px",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <DeleteOutline
              sx={{
                width: "25px",
                height: "25px",
                color: "#000000",
              }}
            />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "28px",
              fontWeight: "600",
              lineHeight: "42px",
              color: "colors.mainGreen",
              flex: "1",
              textAlign: "center",
            }}
          >
            1
          </Typography>

          <IconButton
            disableRipple
            aria-label="add"
            sx={{
              width: "70.43px",
              height: "55px",
              // borderRadius: "0px 12px 12px 0px",
              border: "1px solid #505050",
              borderRadius: "12px",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          >
            <Add
              sx={{
                width: "25px",
                height: "25px",
                color: "#000000",
              }}
            />
          </IconButton>
        </Box>
        <Button
          variant="outline"
          sx={{
            width: "125px",
            height: "51px",
            borderRadius: "12px",
            color: "colors.mainRed",
            border: "1px solid",
            borderColor: "colors.mainRed",
            fontFamily: "Poppins",
            fontSize: "28px",
            fontWeight: "600",
            lineHeight: "42px",
          }}
        >
          حذف
        </Button>
      </Box>
    </Stack>
  );
}
