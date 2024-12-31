import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import OrdersStatus from "./OrdersStatus";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import { ExpandMore, LocationOnOutlined } from "@mui/icons-material";
import product1 from "../../assets/orders/product1.png";
import product2 from "../../assets/orders/product2.png";
import product3 from "../../assets/orders/product3.png";
import useShowModal from "../../hooks/useShowModal";
import EvaluationOrder from "./EvaluationOrder";

const ADDRESSES = [
  "السيوف شماعة تقطاع ش الشيح حسين سليمان",
  "السيوف شماعة تقطاع ش الشيح حسين سليمان",
  "السيوف شماعة تقطاع ش الشيح حسين سليمان",
];
const ordersArray = [
  {
    id: 1,
    img: product1,
    details: "كاميرا كانون اصدار حديث",
    price: "480",
    amount: "1",
    seller: "Ronza store",
  },
  {
    id: 2,
    img: product2,
    details: "كاميرا كانون اصدار حديث",
    price: "480",
    amount: "1",
    seller: "Electro store",
  },
  {
    id: 3,
    img: product3,
    details: "كاميرا كانون اصدار حديث",
    price: "480",
    amount: "1",
    seller: "Star store",
  },
];
const StyledBox = styled(Box)(({ theme }) => ({
  width: "652px",
  height: "66px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "17px",
  paddingLeft: "42px",
  // borderRadius: "15px",
  borderRadius: "5px",
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
const Orders = ({ statusArray, status, isDashboard }) => {
  const [message, setMessage] = useState("");
  const { open, handleOpen, handleClose } = useShowModal();
  const [review, setReview] = useState(false);
  const navigate = useNavigate();
  const [address, setAddress] = useState(ADDRESSES[0]);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  // language Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* product  */}
      <Stack
        sx={{
          px: "65px",
          pt: "59px",
          mt: "-150px",
          //   borderTop: "1px solid #505050",
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
                  //   width: "250px",
                  //   alignItems: "center",
                  //   mx: "44px",
                  "& p": {
                    fontSize: "28px",
                    fontWeight: "700",
                    lineHeight: "31px",
                    color: "colors.website",
                  },
                }}
              >
                <Typography>الخميس ,30, ديسمبر, 2023, 11:25 pm</Typography>
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
                  {/* 11:25 pm */}
                </Typography>
              </Stack>
              {/* price  */}
              <Stack gap="36px" mt="120px">
                <StyledBox
                  sx={{
                    "& p": {
                      color: (theme) =>
                        `${theme.palette.colors.mainBlack} !important`,
                    },
                  }}
                >
                  <Typography>رقم الطلب</Typography>
                  <Typography>4093</Typography>
                </StyledBox>

                {(status == 5 || status == 7) && (
                  <>
                    <StyledBox>
                      <Typography>تم الطلب في</Typography>
                      <Typography sx={{ color: "colors.website" }}>
                        الخميس ,30, ديسمبر, 2023,
                      </Typography>
                    </StyledBox>
                    <StyledBox>
                      <Typography>تم تسليم الطلب في</Typography>
                      <Typography sx={{ color: "colors.website" }}>
                        الخميس ,30, ديسمبر, 2023,
                      </Typography>
                    </StyledBox>
                  </>
                )}
                {status == 7 && (
                  <StyledBox>
                    <Typography>تم الأرجاع في</Typography>
                    <Typography sx={{ color: "colors.website" }}>
                      الخميس ,30, ديسمبر, 2023,
                    </Typography>
                  </StyledBox>
                )}
                {(status == 5 || status == 7) && (
                  <>
                    <StyledBox>
                      <Typography>وسيلة الدفع</Typography>
                      <Typography
                        sx={{
                          fontWeight: "800",
                        }}
                      >
                        نقدا عند الأستلام
                      </Typography>
                    </StyledBox>
                    <StyledBox>
                      <Typography>حالة الدفع</Typography>
                      <Typography
                        sx={{
                          fontWeight: "800",
                        }}
                      >
                        {status == 5 && "مدفوع"}
                        {status == 7 && "مسترد"}
                      </Typography>
                    </StyledBox>
                  </>
                )}
                <StyledBox>
                  <Typography>قيمة الطلب</Typography>
                  <Typography sx={{ color: "colors.website" }}>
                    1400ج.م
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography>رسوم الشحن</Typography>
                  <Typography>50 ج.م</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography>رسوم الدفع عند الأستلام</Typography>
                  <Typography>10 ج.م</Typography>
                </StyledBox>
                {isDashboard && (
                  <>
                    <StyledBox>
                      <Typography>عمولة چوملا </Typography>
                      <Typography>140 ج.م</Typography>
                    </StyledBox>

                    <StyledBox
                      sx={{
                        backgroundColor: "#CC0000",
                        "& p": {
                          color: (theme) =>
                            `${theme.palette.colors.wi8} !important`,
                        },
                      }}
                    >
                      <Typography>مستحقاتك</Typography>
                      <Typography>1260 ج.م</Typography>
                    </StyledBox>
                  </>
                )}
                <StyledBox
                  sx={{
                    backgroundColor: "#CC0000",
                    "& p": {
                      color: (theme) =>
                        `${theme.palette.colors.wi8} !important`,
                    },
                  }}
                >
                  <Typography>الأجمالي</Typography>
                  <Typography>1450 ج.م</Typography>
                </StyledBox>
                {!isDashboard && (
                  <>
                    <StyledBox>
                      <Typography>اسم العميل</Typography>
                      <Typography
                        sx={{
                          color: "#505050!important",
                        }}
                      >
                        ممدوح الصيرفي
                      </Typography>
                    </StyledBox>
                    <StyledBox>
                      <Typography>{t("Phone Number")}</Typography>
                      <Typography
                        sx={{
                          color: "#505050!important",
                        }}
                      >
                        012345678890{" "}
                      </Typography>
                    </StyledBox>
                  </>
                )}
              </Stack>
            </Box>
            {!isDashboard && (
              <>
                {/* address  */}
                <Stack
                  sx={{
                    mt: "39px",
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
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "700",
                      color: "colors.darkIcons",
                    }}
                  >
                    {status != 5 && status != 6 && <LocationOnOutlined />}
                    السيوف شماعة تقطاع ش الشيح حسين سليمان
                    {status != 5 && status != 6 && (
                      <ExpandMore
                        sx={{
                          cursor: "pointer",
                        }}
                        id="choose-address"
                        aria-controls={open ? "choose-address-Menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      />
                    )}
                  </Typography>
                  {/* Menu  */}
                  <Menu
                    id="choose-address-Menu"
                    aria-labelledby="choose-address"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {ADDRESSES.map((address) => (
                      <MenuItem
                        key={address}
                        onClick={() => {
                          setAddress(address);
                          handleCloseMenu();
                        }}
                      >
                        {address}
                      </MenuItem>
                    ))}
                  </Menu>
                </Stack>
                {/* instructions  */}
                <Stack
                  sx={{
                    mt: "39px",
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
                    تعليمات خاصة بالتسليم :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      color: "colors.darkIcons",
                    }}
                  >
                    من فضلك لا تضغط علي الجرس{" "}
                  </Typography>
                </Stack>
              </>
            )}
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
              {ordersArray.map((order) => (
                <Stack
                  sx={{
                    width: "595px",
                    minHeight: "230px",
                    borderRadius: "5px",
                    border: "2px solid #505050",
                    // alignItems: "center",
                    justifyContent: "center",
                    gap: "24px",
                    //   px: "17px",
                    pl: "17px",
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
                      sx={[
                        {
                          width: "185px",
                          height: "226px",
                          borderRadius: "5px",
                          borderBottomLeftRadius: "0",
                          borderTopLeftRadius: "0",
                          backgroundColor: "#D9D9D9",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        status == 5 &&
                          !isDashboard && {
                            width: "160px",
                            height: "161px",
                            borderRadius: "12px",
                            border: "1px solid #A5A5A5",
                            backgroundColor: "transparent",
                            mr: "30px",
                          },
                      ]}
                    >
                      <Box
                        component="img"
                        src={order.img}
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
                          {order.details}{" "}
                        </Typography>
                        {/* delete  */}
                        {/* {((statusArray?.length &&
                          statusArray[statusArray.length - 1].statusCode ==
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
                        )} */}
                        {/* cancel  */}
                        {/* {statusArray?.length &&
                        statusArray[statusArray.length - 1].statusCode == 4 ? ( */}
                        {status == 4 && !isDashboard ? (
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
                              setMessage("هل ترغب حقا فى إرجاع الطلب رقم 4095");
                              handleOpen();
                            }}
                          >
                            إرجاع
                          </Button>
                        ) : (
                          ""
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
                        الكمية :{order.amount}
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
                          {order.price} ج.م
                        </Typography>
                        {/* <Typography
                          sx={{
                            color: "#838181",
                          }}
                        >
                          <s>700</s> ج.م
                        </Typography> */}
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
                  {/* {statusArray?.length &&
                  statusArray[statusArray.length - 1].statusCode == 5 ? ( */}
                  {!isDashboard && status == 5 ? (
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
                        onClick={() => navigate("/user/orders/buy-again")}
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
                        onClick={() => {
                          setReview(true);
                          handleOpen();
                        }}
                      >
                        قيم المنتج
                      </CompletedButton>
                    </Stack>
                  ) : (
                    ""
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
                color:
                  status == 6 || status == 7
                    ? "colors.mainRed"
                    : "colors.website",
              }}
            >
              {status == 0 &&
                (isDashboard
                  ? "جارى العمل على تنفيذ الطلب"
                  : "جارى العمل على تنفيذ طلبك")}
              {status == 1 && "تم تأكيد الطلب"}
              {status == 2 && "تم تسليم الطلب لمندوب الشحن"}
              {status == 3 &&
                (isDashboard
                  ? " الطلب فى الطريق الي العميل"
                  : "الطلب فى الطريق إليك")}
              {status == 4 &&
                (isDashboard ? " تم تسليم الطلب للعميل" : "تم تسليم الطلب ")}
              {status == 5 && "مكتمل"}
              {status == 6 && "ملغي"}
              {status == 7 && "مرتجع"}
              {/* {status == 5
                ? "مكتمل"
                : status == 7
                ? "مرتجع"
                : statusArray?.length
                ? statusArray[statusArray.length - 1].status
                : "جارى العمل على تنفيذ طلبك"} */}
              {/* {statusArray?.length
                  ? statusArray[statusArray.length - 1].status
                  : "جارى العمل على تنفيذ طلبك"} */}
            </Typography>
          </Box>
          {/* progress  */}
          <OrdersStatus statusArray={statusArray} />
          {/* {!statusArray?.length && ( */}
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "800",
              lineHeight: "27px",
              color: "colors.mainBlack",
            }}
          >
            {status == 0 &&
              (isDashboard
                ? "جارى العمل على تنفيذ الطلب"
                : "جارى العمل على تنفيذ طلبك")}
            {/* {statusArray?.length
                ? statusArray[statusArray.length - 1].status
                : "جارى العمل على تنفيذ طلبك"} */}
          </Typography>
          {/* )} */}
          {/* cancel order button */}
          {/* {((statusArray?.length &&
            statusArray[statusArray.length - 1].statusCode == 0) ||
            !statusArray?.length) && ( */}

          {!isDashboard && status == 0 && (
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
          {/* {statusArray?.length &&
          statusArray[statusArray.length - 1].statusCode == 4 ? ( */}
          {!isDashboard && status == 4 ? (
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
                setMessage("هل ترغب حقا فى إرجاع هذا المنتج");
                handleOpen();
              }}
            >
              إرجاع الطلب
            </CancelButton>
          ) : (
            ""
          )}
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "558px",
              height: "77px",
              borderRadius: "12px",
              border: "4px solid #008C5D",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
              color: "#008C5D",
              fontWeight: "800",
            }}
          >
            تم تسليم الطلب لمندوب الشحن
          </Box>
        </Box>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        message={message}
      >
        {review && <EvaluationOrder handleClose={handleClose} />}
      </ModalComponent>
    </>
  );
};

export default Orders;
