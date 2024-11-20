import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";

import product from "../../assets/cart/product1.png";
import Orders from "../../sections/orders/Orders";
import Search from "../../sections/common/Search";
import FilterBtn from "../../components/FilterBtn";
import ModalComponent from "../../components/ModalComponent";
import DateFilter from "../../components/DateFilter";
import useShowModal from "../../hooks/useShowModal";
const statusArray = [
  {
    status: "تم إلغاء الطلب",
    date: "30 ديسمبر 2023",
    complete: false,
    operation: 0,
  },
];
const CanceledOrdersPage = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = (e) => setOpen(true);
  // const handleClose = () => setOpen(false);
  const { open, handleOpen, handleClose } = useShowModal();

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
          <SectionTitle sectionTitle={{ main: "الطلبات الملغاه" }} />
          {/* search and filter  */}
          <Box
            sx={{
              margin: "0 19px 41px",
              display: "flex",
              alignItems: "center",
              gap: "100px",
            }}
          >
            <Search />
            <FilterBtn handleOpen={handleOpen} />
          </Box>
        </Box>
        {Array(2)
          .fill("")
          .map((item) => (
            <Orders statusArray={statusArray} />
          ))}
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default CanceledOrdersPage;
