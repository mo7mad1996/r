import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Search from "../../sections/common/Search";
import FilterBtn from "../../components/FilterBtn";
import useShowModal from "../../hooks/useShowModal";
import usePaginate from "../../hooks/usePaginate";
import UsePagination from "../../hooks/UsePagination";
import Order from "./Order";
import ModalComponent from "../../components/ModalComponent";
import DateFilter from "../../components/DateFilter";
import { useLocation } from "react-router-dom";

const OrdersComponent = ({ title, orders, ordersPerPage }) => {
  const { open, handleOpen, handleClose } = useShowModal();
  const itemsPerPage = ordersPerPage ? ordersPerPage : 10;
  const {
    page,
    setPage,
    displayedItems: displayedOrders,
    totalPages,
  } = usePaginate({
    itemsPerPage,
    items: orders,
  });
  const handleChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <Stack>
      {/* title and search and filter  */}
      <Box>
        <SectionTitle sectionTitle={{ main: title }} />
        <Box
          sx={{
            margin: "0 19px",
            display: "flex",
            alignItems: "center",
            gap: "236px",
          }}
        >
          <Search placeholder="البحث برقم الطلب" />
          <FilterBtn handleOpen={handleOpen} />
        </Box>
      </Box>
      {/* orders  */}
      <Stack
        sx={{
          position: "relative",
          gap: "61px",
          px: "154px",
          mt: "191px",
          width: "1191px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-120px",
            left: "120px",
            fontSize: "20px",
            lineHeight: "22px",
            color: "colors.mainBlack",
          }}
        >
          الصفحات
          <Select
            value={page}
            onChange={handleChange}
            sx={{
              mx: "12px",
              width: "96px",
              height: "54px",
              borderRadius: "5px",
              border: "1px solid",
              borderColor: "colors.website",
              textAlign: "center",
              "&:hover": {
                border: "1px solid",
                borderColor: "colors.website",
                outline: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "0",
                // borderColor: "colors.website",
              },
            }}
          >
            {Array(totalPages)
              .fill("")
              .map((item, index) => (
                <MenuItem value={index + 1}>{index + 1}</MenuItem>
              ))}
          </Select>
          من {totalPages} صفحات{" "}
        </Box>
        {displayedOrders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </Stack>
      {/* pagination  */}
      <Box
        sx={{
          mt: "145px",
          mb: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UsePagination
          setPage={setPage}
          totalPages={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </Box>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </Stack>
  );
};

export default OrdersComponent;
