import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

import { AddShoppingCart, FavoriteBorder, Share } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Reviews from "../../components/Reviews";
import MainButton from "../../components/MainButton";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty": {
    color: theme.palette.colors.mainGreen,
  },
  "& .MuiRating-iconFilled": {
    color: theme.palette.colors.mainGreen,
  },
  "& .MuiRating-iconHover": {
    // color: "#ff3d47",
  },
}));
const StyledIcons = styled(Box)({
  position: "absolute",
  width: "35.51px",
  height: "103.49px",
  left: "0",
  top: "0",
  borderRadius: "12px",
  border: "1px solid #A5A5A5",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});
const Products = ({ products }) => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={["40px"]}>
      {products.map((product) => (
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          lg={4}
          xl={3}
          sx={{
            margin: { xs: "auto", md: "0" },
          }}
          key={product.id}
        >
          <Box
            sx={{
              //   backgroundColor: "red",
              position: "relative",
              mx: { sm: "auto" },
              // width: "250px",
            }}
          >
            <StyledIcons>
              <IconButton size="small" disableRipple>
                <FavoriteBorder />
              </IconButton>
              <IconButton size="small" disableRipple>
                <AddShoppingCart />
              </IconButton>
              <IconButton size="small" disableRipple>
                <Share />
              </IconButton>
            </StyledIcons>
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
              44%
            </Box>
            <Box
              component={"img"}
              src={product.productImage}
              sx={{
                width: "221.06px",
                height: "181.84px",
                mb: "33px",
              }}
            ></Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "30px",
                letterSpacing: "0em",
                textAlign: "right",
                mb: "16px",
              }}
            >
              {product.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "17.86px",
                textAlign: "right",
                mb: "7px",
              }}
            >
              {product.description}
            </Typography>
            {/* Rating */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Reviews />
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
                {product.reviews}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "Poppins",
                fontSize: "25px",
                fontWeight: "600",
                lineHeight: "37.5px",
                mt: "15.35px",
              }}
            >
              <Typography
                sx={{
                  color: "colors.mainGreen",
                }}
              >
                {product.price} {t("Currency")}
              </Typography>
              <Typography
                sx={{
                  color: "#838181",
                }}
              >
                <s>{product.discount}</s> {t("Currency")}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                color: "colors.darkIcons",
                mt: "13px",
                mb: "11px",
              }}
            >
              {product.category}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                color: "colors.mainBlack",
                mb: "15.65px",
              }}
            >
              يباع بواسطة{" "}
              <Typography color={"colors.mainGreen"}>
                {product.owner}
              </Typography>
            </Box>
            {/* <Button
                variant="contained"
                disableRipple
                sx={{
                  backgroundColor: "#007A4A",
                  width: "212px",
                  height: "60px",
                  // display: "flex",
  
                  color: "colors.wi8",
                  fontSize: "20px",
                  fontWeight: "800",
                  lineHeight: "22px",
                  textAlign: "right",
                  p: "0",
                  mt: "15.65px",
                  "&:hover": {
                    backgroundColor: "#007a49b6",
                  },
                }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                عرض تفاصيل المنتج
              </Button> */}
            <MainButton
              content={"عرض تفاصيل المنتج"}
              onClick={() => navigate(`/store/${product.id}`)}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
