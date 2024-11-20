import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";

import Orders from "../../sections/orders/Orders";
import useShowModal from "../../hooks/useShowModal";
import { useLocation, useSearchParams } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import RefusePopup from "../../sections/Dashboard/Orders/RefusePopup";

const getStatusArray = (statusCode) => {
  switch (+statusCode) {
    case 0:
      return [
        // {
        //   status: "جارى العمل على تنفيذ طلبك",
        //   date: "31, ديسمبر, 2023, 10:25pm",
        //   complete: true,
        //   statusCode: 0,
        // },
      ];
    case 1:
      return [
        {
          status: "تم تأكيد الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 1,
        },
      ];
    case 2:
      return [
        {
          status: "تم تأكيد الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 1,
        },
        {
          status: "تم تسليم الطلب لمندوب الشحن",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 2,
        },
      ];
    case 3:
      return [
        {
          status: "تم تأكيد الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 1,
        },
        {
          status: "تم تسليم الطلب لمندوب الشحن",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 2,
        },
        {
          status: "الطلب فى الطريق إليك",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 3,
        },
      ];
    case 4:
      return [
        {
          status: "تم تأكيد الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 1,
        },
        {
          status: "تم تسليم الطلب لمندوب الشحن",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 2,
        },
        {
          status: "الطلب فى الطريق إليك",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 3,
        },
        {
          status: "تم تسليم الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 4,
        },
      ];
    case 5:
      return [
        {
          status: "تم تأكيد الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 1,
        },
        {
          status: "تم تسليم الطلب لمندوب الشحن",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 2,
        },
        {
          status: "الطلب فى الطريق إليك",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 3,
        },
        {
          status: "تم تسليم الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 4,
        },
        {
          status: "مكتمل",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 5,
        },
      ];
    case 6:
      return [
        {
          status: "تم الغاء الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: false,
          statusCode: 6,
        },
      ];
    case 7:
      return [
        {
          status: "تم تأكيد الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 1,
        },
        {
          status: "تم تسليم الطلب لمندوب الشحن",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 2,
        },
        {
          status: "الطلب فى الطريق إليك",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 3,
        },
        {
          status: "تم تسليم الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 4,
        },
        {
          status: "تم إرجاع الطلب",
          date: "31, ديسمبر, 2023, 10:25pm",
          complete: true,
          statusCode: 7,
        },
      ];
  }
};
const OrderDetailsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { open, handleOpen, handleClose, message, setMessage } = useShowModal();

  const status = searchParams.get("status");
  // const { open, handleOpen, handleClose } = useShowModal();
  const statusArray = getStatusArray(status);

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      <Stack sx={{ position: "relative" }}>
        <Typography
          sx={{
            position: "absolute",
            right: "20px",
            top: "23px",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "27px",
            color: "colors.mainBlack",
          }}
        >
          مرحبا , ممدوح الصيرفي
        </Typography>
        <Box sx={{ mt: "30px" }}>
          <SectionTitle sectionTitle={{ main: "تفاصيل الطلب" }} />
        </Box>
        {/* order  */}
        <Orders
          isNew={true}
          statusArray={statusArray}
          status={status}
          isDashboard={isDashboard}
        />
        {isDashboard && status == 0 && (
          <>
            <Typography
              sx={{
                width: "587px",
                height: "84px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
                borderColor: "colors.mainRed",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "31px",
                color: "colors.mainBlack",
                mx: "auto",
                mt: "48px",
                mb: "44px",
              }}
            >
              يرجي تأكيد الطلب في حالة توفره في المخزون
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                button: {
                  width: "236px",
                  height: "85px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "3px solid",
                  fontSize: "28px",
                  fontWeight: "800",
                  lineHeight: "31px",
                },
                mb: "50px",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "colors.mainGreen",
                  borderColor: "colors.mainGreen",
                  "&:hover": {
                    color: "colors.wi8",
                    borderColor: "colors.mainGreen",
                    backgroundColor: "colors.mainGreen",
                  },
                }}
              >
                تأكيد الطلب
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "colors.mainRed",
                  borderColor: "colors.mainRed",
                  "&:hover": {
                    color: "colors.wi8",
                    borderColor: "colors.mainRed",
                    backgroundColor: "colors.mainRed",
                  },
                }}
                onClick={handleOpen}
              >
                رفض الطلب
              </Button>
            </Box>
          </>
        )}
        {isDashboard && status == 1 && (
          <Typography
            sx={{
              width: "558px",
              height: "77px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              border: "3px solid",
              fontSize: "28px",
              fontWeight: "800",
              lineHeight: "31px",
              color: "colors.mainGreen",
              mb: "110px",
              mx: "auto",
            }}
          >
            {status == 1 && "تم تسليم الطلب لمندوب الشحن"}{" "}
          </Typography>
        )}
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <RefusePopup handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default OrderDetailsPage;
