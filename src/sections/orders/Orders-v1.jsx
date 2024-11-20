import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import product from "../../assets/cart/product1.png";
import OrdersStatus from "./OrdersStatus";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "652px",
  height: "66px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "17px",
  paddingLeft: "42px",
  borderRadius: "15px",
  backgroundColor: "#F6F6F6",
  "& p": {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "27px",
  },
  "& p:first-of-type": {
    color: theme.palette.colors.greyLabels,
  },
  "& p:last-of-type": {
    color: theme.palette.colors.website,
  },
}));
const CancelButton = styled(Button)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "31px",
  color: theme.palette.colors.mainRed,
  border: `3px solid ${theme.palette.colors.mainRed}`,
  "&:hover": {
    color: theme.palette.colors.mainRed,
    border: `3px solid ${theme.palette.colors.mainRed}`,
  },
}));
const CompletedButton = styled(Button)(({ theme }) => ({
  width: "382px",
  height: " 53px",
  border: "1px solid",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "31px",
  textAlign: "center",
}));
const Orders = ({ statusArray }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <>
      {/* product  */}
      <Stack
        sx={{
          px: "65px",
          pt: "59px",
          borderTop: "1px solid #505050",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* right section  */}
          <Stack sx={{ justifyContent: "space-between" }}>
            <Box>
              {/* date  */}
              <Stack
                sx={{
                  gap: "21px",
                  width: "250px",
                  alignItems: "center",
                  //   mx: "44px",
                  "& p": {
                    fontSize: "28px",
                    fontWeight: "700",
                    lineHeight: "31px",
                    color: "colors.website",
                  },
                }}
              >
                <Typography sx={{ color: "colors.darkIcons" }}>
                  الخميس ,30, ديسمبر, 2023, 11:25 pm
                </Typography>
                <Typography
                  dir="ltr"
                  sx={{
                    position: "relative",
                    width: "230px",
                    color: "#656667",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "110px",
                      height: "5px",
                      backgroundColor: "#505050",
                      top: "50%",
                      transform: "translateY(50%)",
                      right: "0px",
                    },
                  }}
                >
                  11:25 pm
                </Typography>
              </Stack>
              {/* price  */}
              <Stack gap="36px" mt="120px">
                <StyledBox
                  sx={{
                    backgroundColor: "#DADADA",
                    "& p": {
                      color: (theme) =>
                        `${theme.palette.colors.mainBlack} !important`,
                    },
                  }}
                >
                  <Typography>رقم الطلب</Typography>
                  <Typography>4093</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography>قيمة الطلب</Typography>
                  <Typography>1440 ج.م</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography>رسوم الشحن</Typography>
                  <Typography>50 ج.م</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography>رسوم الدفع عند الأستلام</Typography>
                  <Typography>10 ج.م</Typography>
                </StyledBox>
                <StyledBox
                  sx={{
                    backgroundColor: "#656667",
                    "& p": {
                      color: (theme) =>
                        `${theme.palette.colors.wi8} !important`,
                    },
                  }}
                >
                  <Typography>الأجمالي</Typography>
                  <Typography>1500 ج.م</Typography>
                </StyledBox>
              </Stack>
            </Box>
            {/* address  */}
            <Stack
              sx={{
                mt: "51px",
                alignSelf: "",
                "& p": {
                  fontSize: "24px",
                  lineHeight: "27px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "800",

                  color: "#000000",
                  mb: "12px",
                }}
              >
                عنوان التوصيل :
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "colors.darkIcons",
                }}
              >
                السيوف شماعة تقطاع ش الشيح حسين سليمان
              </Typography>
            </Stack>
          </Stack>
          {/* left section  */}
          <Stack>
            {/* products  */}
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "800",
                lineHeight: "33px",
                color: "#000000",
                textAlign: "center",
              }}
            >
              المنتجات 3
            </Typography>
            <Stack gap="56px" mt="22px">
              {Array(3)
                .fill("")
                .map((item) => (
                  <Stack
                    sx={{
                      width: "595px",
                      minHeight: "230px",
                      borderRadius: "12px",
                      border: "2px solid #505050",
                      // alignItems: "center",
                      justifyContent: "center",
                      gap: "24px",
                      px: "17px",
                      // py: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                      }}
                    >
                      {/* product image */}
                      <Box
                        sx={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "12px",
                          border: "1px solid #A5A5A5",
                          padding: "21px 0px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={product}
                          sx={{ width: "152px", height: "125px" }}
                        />
                      </Box>
                      {/* product info  */}
                      <Stack sx={{ flex: "1" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: "10px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "28px",
                              fontWeight: "500",
                              lineHeight: "42px",
                            }}
                          >
                            كاميرا كانون اصدار حديث
                          </Typography>
                          {/* delete  */}
                          {((statusArray?.length &&
                            statusArray[statusArray.length - 1].operation ==
                              1) ||
                            !statusArray?.length) && (
                            <Button
                              variant="text"
                              disableRipple
                              sx={{
                                fontSize: "28px",
                                fontWeight: "800",
                                lineHeight: "31px",
                                color: "colors.mainRed",
                              }}
                              onClick={() => {
                                setMessage("هل ترغب حقا فى حذف هذا المنتج");
                                handleOpen();
                              }}
                            >
                              حذف
                            </Button>
                          )}
                          {/* cancel  */}
                          {statusArray?.length &&
                            statusArray[statusArray.length - 1].operation ==
                              2 && (
                              <Button
                                variant="text"
                                disableRipple
                                sx={{
                                  fontSize: "28px",
                                  fontWeight: "800",
                                  lineHeight: "31px",
                                  color: "colors.mainRed",
                                }}
                                onClick={() => {
                                  setMessage(
                                    "هل ترغب حقا فى إرجاع الطلب رقم 4095"
                                  );
                                  handleOpen();
                                }}
                              >
                                إرجاع
                              </Button>
                            )}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "22px",
                            fontWeight: "500",
                            lineHeight: "42px",
                          }}
                        >
                          الكمية : 1
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
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
                            480 ج.م
                          </Typography>
                          <Typography
                            sx={{
                              color: "#838181",
                            }}
                          >
                            <s>700</s> ج.م
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "colors.mainBlack",
                            mt: "10px",
                            "&, & p": {
                              fontFamily: "Poppins",
                              fontSize: "28px",
                              fontWeight: "500",
                              lineHeight: "42px",
                            },
                          }}
                        >
                          يباع بواسطة{" "}
                          <Typography color={"colors.mainGreen"}>
                            Ronza store
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                    {/* buy again or review  */}
                    {statusArray?.length &&
                      statusArray[statusArray.length - 1].operation == 3 && (
                        <Stack gap="18px" alignItems="center" mb="30px">
                          <CompletedButton
                            variant="contain"
                            sx={{
                              color: "#fff",
                              backgroundColor: "#008C5D",
                              "&:hover": {
                                olor: "#ffffff",
                                backgroundColor: "colors.website",
                              },
                            }}
                            onClick={() => navigate("/orders/buy-again")}
                          >
                            شراء مرة أخري
                          </CompletedButton>
                          <CompletedButton
                            variant="outlined"
                            sx={{
                              color: "#000000",
                              border: (theme) =>
                                `1px solid ${theme.palette.colors.website}`,
                              // backgroundColor: "#008C5D",
                              transition: "0.3s",
                              "&:hover": {
                                backgroundColor: "colors.website",
                                color: "colors.wi8",
                              },
                            }}
                          >
                            قيم المنتج
                          </CompletedButton>
                        </Stack>
                      )}
                  </Stack>
                ))}
            </Stack>
          </Stack>
        </Box>
        {/* order status  */}
        <Stack mt="47px">
          <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "800",
                lineHeight: "31px",
                color: "colors.greyLabels",
              }}
            >
              حالة الطلب الأن
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "27px",
                color: "colors.mainBlack",
              }}
            >
              {statusArray?.length
                ? statusArray[statusArray.length - 1].status
                : "جارى العمل على تنفيذ طلبك"}
            </Typography>
          </Box>
          {/* progress  */}
          <OrdersStatus statusArray={statusArray} />
          {!statusArray?.length && (
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "27px",
                color: "colors.mainBlack",
              }}
            >
              {statusArray?.length
                ? statusArray[statusArray.length - 1].status
                : "جارى العمل على تنفيذ طلبك"}
            </Typography>
          )}
          {/* cancel order button */}
          {((statusArray?.length &&
            statusArray[statusArray.length - 1].operation == 1) ||
            !statusArray?.length) && (
            <CancelButton
              variant="outlined"
              sx={{
                width: "390px",
                height: "78px",
                borderRadius: "12px",
                mt: "102px",
                mx: "auto",
                mb: "86px",
              }}
              onClick={() => {
                setMessage("هل ترغب حقا فى الغاء الطلب رقم 4093");
                handleOpen();
              }}
            >
              إلغاء الطلب
            </CancelButton>
          )}
          {/* return order button */}
          {statusArray?.length &&
            statusArray[statusArray.length - 1].operation == 2 && (
              <CancelButton
                variant="outlined"
                sx={{
                  position: "absolute",
                  left: "96px",
                  width: "fit-content",
                  height: "63px",
                  borderRadius: "0px",
                }}
                onClick={() => {
                  setMessage("هل ترغب حقا فى إرجاع هذا المنتج");
                  handleOpen();
                }}
              >
                إرجاع الطلب
              </CancelButton>
            )}
        </Stack>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        message={message}
      />
    </>
  );
};

export default Orders;
