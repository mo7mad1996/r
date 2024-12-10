import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Reviews from "../../../components/Reviews";

import userAvatar from "../../../assets/product/user.png";
import productImg from "../../../assets/cart/product1.png";
import productImg1 from "../../../assets/orders/product1.png";
import { useLocation, useSearchParams } from "react-router-dom";
const StyledTypography = styled(Typography)({
  fontFamily: "Allerta Stencil",
  fontSize: "22px",
  fontWeight: "400",
  lineHeight: "24.55px",
  letterSpacing: "0em",
  color: "#292d32",
});
const ProductReviewPage = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isAdmin = location.pathname.startsWith("/admin");
  const isPending = searchParams.get("pending");
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "مراجعات المنتج" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: "135px",
          mb: "82px",
        }}
      >
        {/* right section  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "52px",
          }}
        >
          {/* image  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "372px",
              height: "368px",
              borderRadius: "12px",
              border: "2px solid",
              borderColor: "colors.greyStrock",
              backgroundColor: isAdmin ? "#FFF2F2F2" : "",
            }}
          >
            <Box
              component="img"
              src={isAdmin ? productImg1 : productImg}
              sx={{
                width: "290px",
                height: "259px",
              }}
            />
          </Box>
          <Stack
            sx={{
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "25px",
                fontWeight: "600",
                lineHeight: "38px",
                color: "colors.mainBlack",
              }}
            >
              كاميرا كانون اصدار حديث
            </Typography>
            {/* reviews */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                //   mt: "20px",
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
                "& p": {
                  fontFamily: "Poppins",
                  fontSize: "25px",
                  fontWeight: "600",
                  lineHeight: "37.5px",
                },
                //   mt: "15.35px",
              }}
            >
              <Typography
                sx={{
                  color: "colors.mainGreen",
                }}
              >
                500 ج.م
              </Typography>
              <Typography
                sx={{
                  color: "#838181",
                }}
              >
                <s>700</s> ج.م
              </Typography>
            </Box>
          </Stack>
        </Box>
        {/* left section  */}
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
            mt: "32px",
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
      </Box>

      <Stack
        sx={{
          //   px: "60px",
          gap: { md: "50px", lg: "113px" },
          flexDirection: { md: "row" },
        }}
      >
        {/* user review */}
        <Stack
          sx={{
            gap: "27px",
            mt: { xs: "50px", md: "0" },
            mx: "135px",
            borderRight: !isAdmin && "1px solid",
            px: !isAdmin && "29px",
            mb: "50px",
            "& > div:first-of-type": {
              mt: "-22px",
            },
          }}
        >
          {Array(4)
            .fill("")
            .map((review) => (
              <Box
                sx={{
                  position: "relative",
                  width: "690px",
                  // height: "210px",
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "colors.mainGreen",
                  p: "16px",
                }}
              >
                {isAdmin && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "37px",
                      left: "58px",
                      display: "flex",
                      gap: "28px",
                      "& button": {
                        width: "78px",
                        height: "44px",
                        borderRadius: "12px",
                        fontSize: "18px",
                        fontWeight: " 800",
                        lineHeight: "20px",
                      },
                      // "& button:first-of-type": {
                      //   "&, &:hover": {
                      //     backgroundColor: "colors.mainGreen",
                      //     color: "colors.wi8",
                      //   },
                      // },
                      // "& button:last-of-type": {
                      //   border: "3px solid",
                      //   "&, &:hover": {
                      //     borderColor: "colors.mainRed",
                      //     color: "colors.mainRed",
                      //   },
                      // },
                    }}
                  >
                    {isPending === "true" && (
                      <Button
                        variant="contained"
                        sx={{
                          "&, &:hover": {
                            backgroundColor: "colors.mainGreen",
                            color: "colors.wi8",
                          },
                        }}
                      >
                        قبول
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      sx={{
                        border: "3px solid",
                        "&, &:hover": {
                          borderColor: "colors.mainRed",
                          color: "colors.mainRed",
                        },
                      }}
                    >
                      حذف
                    </Button>
                  </Box>
                )}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
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
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductReviewPage;
