import { CheckRounded, Share } from "@mui/icons-material";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: "15px",
  backgroundColor: "#f6f6f6",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 103px",
  "& p": {
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "45px",
  },
  "& p:first-of-type": {
    lineHeight: "45px",
    color: theme.palette.colors.greyLabels,
  },
  "& p:last-of-type": {
    lineHeight: "25px",
    color: "#323232",
  },
}));

const CartConfirmedPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        sx={{
          width: "998px",
          height: "219px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px dashed",
          borderRadius: "12px",
          mx: "auto",
          mt: "150px",
          gap: "25px",
          "& h2": {
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "45px",
            color: "colors.website",
          },
        }}
      >
        <Typography variant="h2" sx={{}}>
          شكرا لك , تم استلام طلبك
        </Typography>
        <Typography variant="h2">جارى تنفيذ طلبك </Typography>
      </Stack>
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "#008C5D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          mt: "105px",
        }}
      >
        <CheckRounded
          sx={{
            color: "white",
            width: "64px",
            height: "48px",
          }}
        />
      </Box>
      <Stack sx={{ gap: "43px", px: "115px", mt: "141px", mb: "100px" }}>
        <StyledBox>
          <Typography>رقم الطلب :</Typography>
          <Typography>4095</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>تاريخ الطلب :</Typography>
          <Typography>4 ديسمبر 2023</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>إجمالى قيمة الطلب :</Typography>
          <Typography>1542 ج.م</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>اسم العميل :</Typography>
          <Typography>م مينز</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>رقم الهاتف :</Typography>
          <Typography>4522025</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>البريد الألكتروني</Typography>
          <Typography>Rony33@gmail.com</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>وسيلة الدفع</Typography>
          <Typography>الدفع نقدا عند الأستلام</Typography>
        </StyledBox>
        <StyledBox>
          <Typography>عنوان التوصيل :</Typography>
          <Typography>سيوف سكاكين أسكندرية سيدى بشر</Typography>
        </StyledBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "98px",
            mt: "37px",
            "& button": {
              width: "503px",
              height: "67px",
              borderRadius: "5px",
              fontSize: "28px",
              fontWeight: "800",
              lineHeight: "31px",
              color: "colors.wi8",
            },
          }}
        >
          <Button
            variant="contained"
            endIcon={<Share />}
            sx={{
              // width: "503px",
              // height: "67px",
              // borderRadius: "5px",
              // fontSize: "28px",
              // fontWeight: "800",
              // lineHeight: "31px",
              // color: "colors.wi8",
              "&, &:hover": {
                backgroundColor: "colors.mainRed",
              },
              "& svg": {
                fontSize: "30px",
                marginRight: "33px",
              },
            }}
          >
            مشاركة
          </Button>
          <Button
            variant="contained"
            sx={{
              // width: "503px",
              // height: "67px",
              // borderRadius: "5px",
              // fontSize: "28px",
              // fontWeight: "800",
              // lineHeight: "31px",
              // color: "colors.wi8",
              "&, &:hover": {
                backgroundColor: "colors.mainGreen",
              },
            }}
            onClick={() => navigate("/")}
          >
            الرئيسية
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default CartConfirmedPage;
