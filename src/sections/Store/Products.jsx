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

import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  Share,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import Reviews from "../../components/Reviews";
import MainButton from "../../components/MainButton";
import ProductPagination from "../common/Products/ProductPagination";
import ModalComponent from "../../components/ModalComponent";
import useShowModal from "../../hooks/useShowModal";
import DeletePopup from "./DeletePopup";
import CustomCheckbox from "../Dashboard/delivery/CustomCheckbox";
import { useEffect, useContext } from "react";
import { Context } from "../../components/Context/Context";

const StyledIcons = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "calc(100% - 46px)",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  top: "190px",
  left: "23px",
  // transform: "translateX(-50%)",

  "& button": {
    position: "relative",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: theme.palette.colors.wi8,
    boxShadow: "0px 0px 10px 2px #00000040",
    cursor: "pointer",
    zIndex: "2",
  },
  "& svg": {
    width: "90%",
    height: "90%",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  height: "60px",
  fontSize: "20px",
  fontWeight: "800",
  lineHeight: "22px",
  padding: "0",
  "&, &:hover": {
    backgroundColor: theme.palette.colors.website,
    color: theme.palette.colors.wi8,
  },
}));
const Products = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAdmin = location.pathname.startsWith("/admin");
  const isUser = !isDashboard && !isAdmin;
  const isAll = location.pathname.endsWith("/all");
  const isPending = location.pathname.endsWith("/pending");
  const isRefused = location.pathname.endsWith("/refused");
  const isReviews = location.pathname.includes("/reviews");
  const isStore = location.pathname.endsWith("/store");
  const isCustom = location.pathname.endsWith("/custom-product");
  const isAds = location.pathname.includes("/ads");
  const { open, handleOpen, handleClose, message, setMessage } = useShowModal();
  const { addToCart } = useContext(Context);

  async function addToUserCart(id) {
    let res = await addToCart(id);
  }

  return (
    <>
      <Grid container spacing={["40px"]}>
        {products?.map((product, index) => (
          <Grid
            key={index}
            id={product.id}
            item
            xs={12}
            sm={10}
            md={6}
            lg={4}
            // xl={3}
            sx={{
              margin: { xs: "auto", md: "0" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF2F2F2",
                position: "relative",
                // height: "666px",
                border: "1px solid",
                borderColor: "colors.website",
                borderRadius: "5px",
                mx: { sm: "auto" },
                px: "23px",
                // width: "250px",
              }}
            >
              {/* checkbox  */}
              {isCustom && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "21px",
                    right: "10px",
                  }}
                >
                  <CustomCheckbox />
                </Box>
              )}
              <Box
                sx={{
                  mt: "20px",
                }}
              >
                <ProductPagination />
              </Box>
              <StyledIcons>
                <IconButton
                  size="small"
                  disableRipple
                  onClick={(e) => {
                    addToUserCart(product.id);
                  }}
                >
                  <AddShoppingCart />
                </IconButton>
                <IconButton size="small" disableRipple>
                  {/* <FavoriteBorder /> */}
                  <Favorite sx={{ color: "colors.mainRed" }} />
                </IconButton>
              </StyledIcons>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "30px",
                  letterSpacing: "0em",
                  textAlign: "right",
                  mb: "5px",
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
                  color: "colors.mainBlack",
                  mb: "13px",
                }}
              >
                {product.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "25px",
                  "& p": {
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "colors.mainBlack",
                  }}
                >
                  قسم
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "colors.mainGreen",
                  }}
                >
                  {product.category}
                </Typography>
              </Box>
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
                  {/* {product.reviews} */}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: "15.35px",
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
                    color: "colors.mainGreen",
                  }}
                >
                  {Math.ceil(product.price_afte_discount)} {t("Currency")}
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
                  {product.main_price} {t("Currency")}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", gap: "20px", mt: "16px", mb: "20px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "colors.mainBlack",
                  }}
                >
                  نسبة الخصم
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "22px",
                    color: "colors.website",
                  }}
                >
                  {product.percentage_discount} %
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "colors.mainBlack",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  mb: "15.65px",
                }}
              >
                يباع بواسطة{" "}
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "21px",
                    color: "colors.mainGreen",
                  }}
                >
                  {product.owner}
                </Typography>
              </Box>
              {/* for dashboard  */}
              {(isDashboard || isAdmin) && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      mb: "6px",
                      "&, & p": {
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "colors.darkIcons",
                      },
                    }}
                  >
                    <Typography
                    // sx={{
                    //   fontSize: "16px",
                    //   fontWeight: "500",
                    //   lineHeight: "24px",
                    //   color: "colors.darkIcons",
                    // }}
                    >
                      المخزون
                    </Typography>
                    <Box
                      sx={{
                        width: "91px",
                        height: "29px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        border: "1px solid",
                        borderColor: "colors.greyStrock",
                      }}
                    >
                      121
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      mb: "16px",
                      "&, & p": {
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "colors.darkIcons",
                      },
                    }}
                  >
                    <Typography
                    // sx={{
                    //   fontSize: "16px",
                    //   fontWeight: "500",
                    //   lineHeight: "24px",
                    //   color: "colors.darkIcons",
                    // }}
                    >
                      العمولة
                    </Typography>
                    <Typography sx={{ fontWeight: "700", marginRight: "20px" }}>
                      15 %
                    </Typography>
                  </Box>
                </>
              )}
              {/* controllers  */}
              <Box mb="35px">
                {/* for user only  */}
                {isUser && (
                  <MainButton
                    content={"عرض تفاصيل المنتج"}
                    onClick={() => navigate(`/store/${product.id}`)}
                  />
                )}
                {/* for seller and admin  */}
                {/* all products  */}
                {(isAdmin || isDashboard) && (isAll || isStore) && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        mb: "16px",
                        "& button": {
                          width: "147px",
                        },
                      }}
                    >
                      <CustomButton
                        variant="contained"
                        sx={{}}
                        onClick={() => {
                          navigate(
                            `${
                              isAdmin ? "/admin" : ""
                            }/dashboard/products/1/modify`
                          );
                        }}
                      >
                        {t("Edit")}
                      </CustomButton>
                      <CustomButton
                        variant="contained"
                        sx={[
                          !isAdmin
                            ? {
                                "&, &:hover": {
                                  backgroundColor: (theme) =>
                                    `${theme.palette.colors.mainRed}!important`,
                                  color: (theme) =>
                                    `${theme.palette.colors.wi8}!important`,
                                },
                              }
                            : {
                                backgroundColor: "transparent!important",
                                color: "red!important",
                                border: (theme) =>
                                  `3px solid ${theme.palette.colors.mainRed}!important`,
                                "&:hover": {
                                  backgroundColor: (theme) =>
                                    `${theme.palette.colors.mainRed}!important`,
                                  color: (theme) =>
                                    `${theme.palette.colors.wi8}!important`,
                                },
                              },
                        ]}
                        onClick={() => {
                          setMessage("هل ترغب حقا فى حذف هذا المنتج ؟");
                          handleOpen();
                        }}
                      >
                        حذف
                      </CustomButton>
                    </Box>
                    <CustomButton
                      variant="contained"
                      sx={{
                        width: "100%",
                      }}
                      onClick={() => {
                        navigate(`/store/${product.id}`);
                      }}
                    >
                      {t(isStore ? "Offer" : "عرض تفاصيل المنتج")}
                    </CustomButton>
                  </>
                )}
                {/* for admin  */}
                {/* pending and refused  */}
                {(isPending || isRefused) && !isReviews && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        mb: "16px",
                        "& button": {
                          width: "147px",
                        },
                      }}
                    >
                      <CustomButton
                        variant="contained"
                        sx={{}}
                        onClick={() => {}}
                      >
                        موافقة
                      </CustomButton>
                      <CustomButton
                        variant="contained"
                        sx={[
                          !isAdmin
                            ? {
                                "&, &:hover": {
                                  backgroundColor: (theme) =>
                                    `${theme.palette.colors.mainRed}!important`,
                                  color: (theme) =>
                                    `${theme.palette.colors.wi8}!important`,
                                },
                              }
                            : {
                                backgroundColor: "transparent!important",
                                color: "red!important",
                                border: (theme) =>
                                  `3px solid ${theme.palette.colors.mainRed}!important`,
                                "&:hover": {
                                  backgroundColor: (theme) =>
                                    `${theme.palette.colors.mainRed}!important`,
                                  color: (theme) =>
                                    `${theme.palette.colors.wi8}!important`,
                                },
                              },
                        ]}
                        onClick={() => {
                          setMessage("هل ترغب حقا فى حذف هذا المنتج ؟");
                          handleOpen();
                        }}
                      >
                        {isPending && "رفض"}
                        {isRefused && "حذف"}
                      </CustomButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        mb: "16px",
                        "& button": {
                          width: "147px",
                        },
                      }}
                    >
                      <CustomButton
                        variant="contained"
                        sx={{}}
                        onClick={() => {
                          navigate(
                            `/admin/dashboard/products/${product.id}/modify`
                          );
                        }}
                      >
                        {t("Edit")}
                      </CustomButton>
                      <CustomButton
                        variant="contained"
                        sx={{}}
                        onClick={() => {
                          navigate(`/store/${product.id}`);
                        }}
                      >
                        {t("Offer")}
                      </CustomButton>
                    </Box>
                  </>
                )}
                {/* reviews  */}
                {isAdmin && isReviews && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CustomButton
                      variant="contained"
                      sx={{
                        width: "168px",
                      }}
                      onClick={() => {
                        navigate(
                          `/admin/dashboard/reviews/products/${product.id}?pending=${isPending}`
                        );
                      }}
                    >
                      عرض المراجعات{" "}
                    </CustomButton>
                  </Box>
                )}
                {isAdmin && isCustom && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CustomButton
                      variant="contained"
                      sx={{
                        width: "168px",
                      }}
                      onClick={() => {
                        navigate(`/store/${product.id}`);
                      }}
                    >
                      {t("Offer")}
                    </CustomButton>
                  </Box>
                )}
                {isAdmin && isAds && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      mb: "16px",
                      "& button": {
                        width: "147px",
                      },
                    }}
                  >
                    <CustomButton
                      variant="contained"
                      sx={{}}
                      onClick={() => {}}
                    >
                      موافقة
                    </CustomButton>
                    <CustomButton
                      variant="contained"
                      sx={{}}
                      onClick={() => {
                        navigate(
                          `/admin/dashboard/products/${product.id}/modify`
                        );
                      }}
                    >
                      {t("Edit")}
                    </CustomButton>
                  </Box>
                )}
                {/* for seller only  */}
                {/* reviews  */}
                {isReviews && isDashboard && (
                  <CustomButton
                    variant="contained"
                    sx={{
                      width: "100%",
                    }}
                    onClick={() => {
                      navigate(`/dashboard/products/reviews/${product.id}`);
                    }}
                  >
                    عرض مراجعات المنتج
                  </CustomButton>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        message={message}
      >
        {isAdmin && (
          <DeletePopup handleClose={handleClose} refused={isRefused} />
        )}
      </ModalComponent>
    </>
  );
};

export default Products;
