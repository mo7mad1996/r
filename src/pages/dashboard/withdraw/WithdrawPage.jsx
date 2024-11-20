import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Search from "../../../sections/common/Search";
import FilterBtn from "../../../components/FilterBtn";
import useShowModal from "../../../hooks/useShowModal";
import ModalComponent from "../../../components/ModalComponent";
import DateFilter from "../../../components/DateFilter";
import WithdrawPopup from "../../../sections/Dashboard/withdraw/WithdrawPopup";

const withdraws = [
  {
    id: 0,
    num: "12345676",
    cost: "80",
    date: "الخميس 31 اغسطس 2023",
    time: "10:30 م",
    status: "معلق",
    statusCode: 0,
  },
  {
    id: 1,
    num: "12345676",
    cost: "80",
    date: "الخميس 31 اغسطس 2023",
    time: "10:30 م",
    status: "موافق",
    statusCode: 1,
  },
  {
    id: 2,
    num: "12345676",
    cost: "80",
    date: "الخميس 31 اغسطس 2023",
    time: "10:30 م",
    status: "مرفوض",
    statusCode: 2,
  },
  {
    id: 3,
    num: "12345676",
    cost: "80",
    date: "الخميس 31 اغسطس 2023",
    time: "10:30 م",
    status: "معلق",
    statusCode: 0,
  },
];
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& p:first-of-type": {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "31px",
    color: theme.palette.colors.mainBlack,
  },
  "& p:last-of-type": {
    width: "280px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "27px",
    color: theme.palette.colors.mainGreen,
  },
}));
const WithdrawPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();
  const [isWithdraw, setIsWithdraw] = useState(false);

  return (
    <Stack
      sx={{
        mb: "100px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "طلبات السحب" }} />
      <Stack
        sx={{
          // mx: "auto",
          px: "74px",
        }}
      >
        <Search placeholder="البحث في طلبات السحب برقم الطلب" />
        <Box sx={{ width: "920px", my: "60px", mx: "auto" }}>
          <Box
            sx={{ display: "flex", justifyContent: "end" }}
            onClick={() => setIsWithdraw(false)}
          >
            <FilterBtn handleOpen={handleOpen} />
          </Box>
        </Box>
        <Button
          sx={{
            width: "371px",
            height: "57.43px",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "25px",
            "&, &:hover": {
              backgroundColor: "colors.mainGreen",
              color: "colors.wi8",
            },
            mx: "14px",
          }}
          onClick={() => {
            setIsWithdraw(true);
            handleOpen();
          }}
        >
          طلب سحب جديد
        </Button>
      </Stack>
      <Box
        sx={{
          mt: "86px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "45px",
            color: "colors.mainBlack",
            textAlign: "center",
            mb: "90px",
          }}
        >
          جميع طلبات السحب
        </Typography>
        <Stack
          sx={{
            alignItems: "center",
            gap: "67px",
          }}
        >
          {withdraws.map((withdraw) => (
            <Stack
              sx={{
                gap: "31px",
                width: "920px",
                height: "291px",
                padding: "22px 12.54px 51px 151px",
                backgroundColor: "colors.liteGrey",
                borderRadius: "5px",
                border: "1px solid",
                borderColor: "colors.mainGreen",
              }}
            >
              <StyledBox sx={{ width: "590px" }}>
                <Typography>رقم طلب سحب اموال</Typography>
                <Typography>{withdraw.num}</Typography>
              </StyledBox>
              <StyledBox sx={{ width: "590px" }}>
                <Typography>المبلغ</Typography>
                <Typography>{withdraw.cost} ج.م</Typography>
              </StyledBox>
              <StyledBox sx={{ width: "590px", position: "relative" }}>
                <Typography>تاريخ الطلب</Typography>
                <Typography>{withdraw.date}</Typography>
                <Typography
                  variant="span"
                  sx={{
                    position: "absolute",
                    left: "-150px",
                    fontSize: "22px",
                    fontWeight: "700",
                    lineHeight: "25px",
                    color: "colors.mainGreen",
                  }}
                >
                  {withdraw.time}{" "}
                </Typography>
              </StyledBox>
              <StyledBox sx={{ width: "590px" }}>
                <Typography
                  sx={{
                    fontWeight: "800",
                  }}
                >
                  الحالة
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "27px",
                    color: (theme) => {
                      if (withdraw.statusCode == 0) {
                        return `${theme.palette.colors.mainBlack}!important`;
                      } else if (withdraw.statusCode == 1) {
                        return `${theme.palette.colors.mainGreen}!important`;
                      } else {
                        return `${theme.palette.colors.mainRed}!important`;
                      }
                    },
                  }}
                >
                  {withdraw.status}
                </Typography>
              </StyledBox>
            </Stack>
          ))}
        </Stack>
      </Box>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        {isWithdraw ? (
          <WithdrawPopup handleClose={handleClose} />
        ) : (
          <DateFilter handleClose={handleClose} />
        )}
      </ModalComponent>
    </Stack>
  );
};

export default WithdrawPage;
