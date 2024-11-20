import React, { useState } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import product1 from "../../assets/orders/product1.png";
import product2 from "../../assets/orders/product2.png";
import locationImg from "../../assets/cart/location.png";
import chevronImg from "../../assets/cart/chevron.png";
import Reviews from "../../components/Reviews";
import {
  Add,
  DeleteOutline,
  PaymentsOutlined,
  Remove,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "500px",
  "& h6": {
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "31.25px",
  },
  "& h6:first-of-type": {
    color: "#000000",
  },
  "& h6:last-of-type": {
    color: theme.palette.colors.mainGreen,
  },
}));
const StyledPaymentBox = styled(Box)(({ theme }) => ({
  height: "70px",
  border: "1.5px solid #505050",
  borderRadius: "12px",
  backgroundColor: "#F8F9FB",
  padding: "0 25px",
  display: "flex",
  alignItems: "center",
  gap: "52px",
  "& .MuiCheckbox-root": {
    color: "colors.greyLabels",
    "&.Mui-checked": {
      color: "colors.mainGreen",
    },
  },
  "& p": {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "31px",
    color: theme.palette.colors.greyLabels,
  },
}));
const CartSummaryPage = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(3);

  return (
    <Stack sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "602px",
          height: "77px",
          backgroundColor: "#F4F4F4",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          py: "22px",
          px: "27px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "11px",
            "& p": {
              fontSize: "28px",
              lineHeight: "31px",
              color: "#292D32",
            },
          }}
        >
          <Box
            component="img"
            src={locationImg}
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "700",
            }}
          >
            التوصيل الي{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "11px" }}>
          <Typography
            sx={{
              fontSize: "28px",
              lineHeight: "31px",
              color: "#292D32",
            }}
          >
            ممدوح الصيرفي , السيوف ...
          </Typography>
          <Box
            component="img"
            src={chevronImg}
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </Box>
      </Box>
      <SectionTitle sectionTitle={{ main: "ملخص الطلب" }} sx={{ mt: "76px" }} />
      <Stack px="58px" flexDirection="row" justifyContent="space-between">
        {/* products  */}
        <Stack gap="65px">
          <Stack>
            <Box
              sx={{
                width: "234px",
                height: "217px",
                // borderRadius: "12px",
                // border: "1px solid #A5A5A5",
                // padding: "21px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component="img" src={product1} />
            </Box>
            {/* product info  */}
            <Stack gap="19px" mt="30px">
              <StyledTextBox>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins!important",
                    fontWeight: "500!important",
                    lineHeight: "42px!important",
                  }}
                >
                  كاميرا كانون اصدار حديث
                </Typography>
                <Typography variant="h6">1000 ج.م</Typography>
              </StyledTextBox>
              <StyledTextBox>
                <Typography variant="h6">رسوم الشحن</Typography>
                <Typography variant="h6">30 ج.م</Typography>
              </StyledTextBox>
              {/* <StyledTextBox>
                <Typography variant="h6">رسوم التحصيل</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "colors.mainGreen",
                  }}
                >
                  12 ج.م
                </Typography>
              </StyledTextBox> */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mt: "11px",
                }}
              >
                <Reviews />
                <Box
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "36px",
                    color: "colors.greyStrock",
                  }}
                >
                  121
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "colors.mainBlack",
                  "&, & p": {
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontWeight: "500",
                    lineHeight: "42px",
                  },
                  mb: "15.65px",
                }}
              >
                يباع بواسطة{" "}
                <Typography
                  sx={{
                    // fontSize: "14px",
                    // fontWeight: "600",
                    // lineHeight: "21px",
                    color: "colors.mainGreen",
                  }}
                >
                  Minas store
                </Typography>
              </Box>
            </Stack>
            {/* controllers  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "64px",
                mt: "17px",
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
          <Stack>
            <Box
              sx={{
                width: "234px",
                height: "217px",
                // borderRadius: "12px",
                // border: "1px solid #A5A5A5",
                // padding: "21px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component="img" src={product2} />
            </Box>
            {/* product info  */}
            <Stack gap="19px" mt="30px">
              <StyledTextBox>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins!important",
                    fontWeight: "500!important",
                    lineHeight: "42px!important",
                  }}
                >
                  زيت نعناع فلفى
                </Typography>
                <Typography variant="h6">1000 ج.م</Typography>
              </StyledTextBox>
              <StyledTextBox>
                <Typography variant="h6">رسوم الشحن</Typography>
                <Typography variant="h6">30 ج.م</Typography>
              </StyledTextBox>
              {/* <StyledTextBox>
                <Typography variant="h6">رسوم التحصيل</Typography>
                <Typography variant="h6">12 ج.م</Typography>
              </StyledTextBox> */}
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                mt: "11px",
              }}
            >
              <Reviews />
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "36px",
                  color: "colors.greyStrock",
                }}
              >
                121
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "colors.mainBlack",
                "&, & p": {
                  fontFamily: "Poppins",
                  fontSize: "28px",
                  fontWeight: "500",
                  lineHeight: "42px",
                },
                mb: "15.65px",
              }}
            >
              يباع بواسطة{" "}
              <Typography
                sx={{
                  // fontSize: "14px",
                  // fontWeight: "600",
                  // lineHeight: "21px",
                  color: "colors.mainGreen",
                }}
              >
                Elserafi store
              </Typography>
            </Box>
            {/* controllers  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "64px",
                mt: "17px",
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
                  <Remove
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
                  2
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
        </Stack>
        <Stack width="617px">
          {/* total info  */}
          <Stack
            sx={{
              height: "539px",
              border: "1px solid #000000",
              justifyContent: "space-between",
              pt: "43px",
              pb: "19px",
              px: "26px",
            }}
          >
            <Stack gap="56px">
              <StyledTextBox>
                <Typography variant="h6">اجمالي السلع</Typography>
                <Typography variant="h6">1500ج.م</Typography>
              </StyledTextBox>
              <StyledTextBox>
                <Typography variant="h6">رسوم الشحن</Typography>
                <Typography variant="h6">60 ج.م</Typography>
              </StyledTextBox>
              <StyledTextBox>
                <Typography variant="h6">رسوم الدفع عند الاستلام</Typography>
                <Typography variant="h6">12ج.م</Typography>
              </StyledTextBox>
              <StyledTextBox>
                <Typography variant="h6">الاجمالي المطلوب</Typography>
                <Typography variant="h6">1572ج.م</Typography>
              </StyledTextBox>
              {/* <StyledTextBox>
                <Typography variant="h6">خصم</Typography>
                <Typography variant="h6">-30 ج.م</Typography>
              </StyledTextBox> */}
            </Stack>
            <Box
              sx={{
                width: "567px",
                height: "83px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: "5px",
                // border: "1px solid",
                // borderColor: "colors.mainBlack",
                backgroundColor: "colors.mainRed",
                color: "colors.wi8",
                "& p": {
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "31px",
                },
              }}
            >
              <Typography>اجمالي المبلغ المطلوب سداده</Typography>
              <Typography>1542 ج.م</Typography>
            </Box>
          </Stack>
          {/* location  */}
          <Stack>
            <Box
              sx={{
                mt: "47px",
                mb: "32px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "31px",
                  color: "#292D32",
                  mb: "22px",
                }}
              >
                اختر موقع التوصيل
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "300",
                  lineWeight: "18px",
                  color: "#292D32",
                }}
              >
                قد تختلف خيارات و سرعة التوصيل وفقا للموقع
              </Typography>
            </Box>
            <Box
              sx={{
                width: "542px",
                height: "144px",
                borderRadius: "5px",
                border: "1px solid ",
                borderColor: "colors.website",
                py: "17px",
                px: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: " 700",
                  lineHeight: "20px",
                  color: "#292D32",
                }}
              >
                ممدوح الصيرفي
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#292D32",
                  my: "15px",
                }}
              >
                الاسكندرية ش الشيخ حسين سليمان
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: " 700",
                    lineHeight: "13px",
                    color: "#292D32",
                    mt: "4px",
                  }}
                >
                  العنوان الرئيسي
                </Typography>
                <Button
                  variant="contain"
                  sx={{
                    width: "154px",
                    height: "39px",
                    borderRadius: "5px",
                    "&,&:hover": {
                      backgroundColor: "colors.mainGreen",
                      color: "colors.wi8",
                    },
                  }}
                  onClick={() => navigate("/user/address")}
                >
                  إدارة العناوين
                </Button>
              </Box>
            </Box>
          </Stack>
          {/* payment methods  */}
          <Stack mt="65px">
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "31px",
                color: "colors.mainBlack",
                mx: "48px",
                mb: "36px",
              }}
            >
              طرق الدفع
            </Typography>
            <Stack gap="12px">
              <StyledPaymentBox>
                <Checkbox
                  checked={checked == 1 ? true : false}
                  disableRipple
                  sx={{
                    color: "colors.greyLabels",
                    "&.Mui-checked": {
                      color: "colors.mainGreen",
                    },
                  }}
                  onClick={() => setChecked(1)}
                />
                <PaymentsOutlined
                  sx={{
                    width: "40px",
                    height: "30px",
                    color: "colors.greyLabels",
                  }}
                />
                <Typography>الدفع نقدا عند الاستلام</Typography>
              </StyledPaymentBox>
              <StyledPaymentBox>
                <Checkbox
                  checked={checked == 2 ? true : false}
                  disableRipple
                  sx={{
                    color: "colors.greyLabels",
                    "&.Mui-checked": {
                      color: "colors.mainGreen",
                    },
                  }}
                  onClick={() => setChecked(2)}
                />
                <PaymentsOutlined
                  sx={{
                    width: "40px",
                    height: "30px",
                    color: "colors.greyLabels",
                  }}
                />
                <Typography>الدفع نقدا عند الاستلام</Typography>
              </StyledPaymentBox>
              <Stack
                alignItems="center"
                sx={{
                  border: "1.5px solid #505050",
                  borderRadius: "12px",
                  backgroundColor: "#F8F9FB",
                  pb: "22px",
                }}
              >
                <StyledPaymentBox
                  width="100%"
                  sx={{
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Checkbox
                    checked={checked == 3 ? true : false}
                    disableRipple
                    sx={{
                      color: "colors.greyLabels",
                      "&.Mui-checked": {
                        color: "colors.mainGreen",
                      },
                    }}
                    onClick={() => setChecked(3)}
                  />
                  <PaymentsOutlined
                    sx={{
                      width: "40px",
                      height: "30px",
                      color: "colors.greyLabels",
                    }}
                  />
                  <Typography>أستخدم رصيد المحفظة</Typography>
                </StyledPaymentBox>
                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: "700",
                    lineHeight: "31px",
                    color: "colors.mainGreen",
                    ml: "-70px",
                  }}
                >
                  1600 ج.م
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* discount  */}
          <Stack
            gap="16px"
            sx={{
              width: "612.66px",
              borderRadius: "12px",
              border: "1.5px",
              backgroundColor: "colors.liteGrey",
              p: "15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "31px",
                color: "colors.mainBlack",
              }}
            >
              كوبونات الخصم
            </Typography>
            <Box sx={{ display: "flex", gap: "90px" }}>
              <TextField
                placeholder="أدخل كود الخصم ..."
                sx={{
                  width: "321.98px",
                  height: "58.84px",
                  borderRadius: "12px",
                  border: "1.5px solid",
                  borderColor: "colors.greyLabels",

                  // border: "0",
                  "& input": {
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "27px",
                    color: "colors.darkIcons",
                    height: "100%",
                    // borderRadius: "12px",
                  },
                  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              ></TextField>
              <Button
                variant="outlined"
                sx={{
                  width: "116.27px",
                  height: "58.84px",
                  borderRadius: "12px",
                  border: "1.5px solid",
                  borderColor: "#505050",
                  color: "colors.darkIcons",
                  fontSize: "22px",
                  fontWeight: "400",
                  lineHeight: "25px",
                  "&:hover": {
                    borderColor: "#505050",
                  },
                }}
              >
                تطبيق
              </Button>
            </Box>
          </Stack>
          <Box
            sx={{
              display: "flex",
              gap: "81px",
              alignItems: "center",
              px: "15px",
              mt: "75px",
              "& p": {
                fontSize: "28px",
                fontWeight: "800",
                lineHeight: "31px",
                color: "colors.website",
              },
            }}
          >
            <Typography>المبلغ الاجمالي المطلوب سداده</Typography>
            <Typography>0 ج.م</Typography>
          </Box>
          {/* confirm  */}
          <Box
            sx={{
              width: "fit-content",
              mx: "auto",
              mb: "100px",
              mt: "65px",
            }}
          >
            <Button
              sx={{
                width: "502.63px",
                height: "60px",
                backgroundColor: "colors.website",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "31px",
                borderRadius: "12px",
                color: "colors.wi8",
                "&:hover": {
                  backgroundColor: "colors.website",
                },
              }}
              onClick={() => navigate("/cart/confirmed")}
            >
              تأكيد الطلب
            </Button>
            <Typography
              sx={{
                width: { xs: "340px" },
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "22.3px",
                color: "#000000",
                my: "21px",
                mx: "auto",
              }}
            >
              مع الضغط علي تسجيل أؤكد اني قرأت واوافق علي{" "}
              <Link underline="none">شروط وأحكام </Link>
              جوملا
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartSummaryPage;
