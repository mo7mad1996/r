import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";
import Seller from "../../../sections/sellers/Seller";
import sellerImage from "../../../assets/seller.png";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import usePaginate from "../../../hooks/usePaginate";
import Products from "../../../sections/Store/Products";
import { PRODUCTS } from "../../../utils/products";
import UsePagination from "../../../hooks/UsePagination";
import Search from "../../../sections/common/Search";
import FilterBtn from "../../../components/FilterBtn";
import ModalComponent from "../../../components/ModalComponent";
import DateFilter from "../../../components/DateFilter";
import useShowModal from "../../../hooks/useShowModal";

const ShowProducts = ({ title, admin, secondTitle }) => {
  const { open, handleOpen, handleClose } = useShowModal();

  const itemsPerPage = 12;
  const {
    page,
    setPage,
    displayedItems: displayedProducts,
    totalPages,
  } = usePaginate({
    itemsPerPage,
    items: PRODUCTS,
  });
  const handleChange = (event) => {
    setPage(event.target.value);
  };
  return (
    <Stack>
      {!admin && (
        <>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "700",
              lineHeight: "33px",
              color: "colors.mainBlack",
              my: "47px",
              mx: "55px",
            }}
          >
            مرحبا , ممدوح الصيرفي
          </Typography>

          <Box
            sx={{
              mx: "auto",
              mb: "120px",
            }}
          >
            <Seller
              seller={{
                img: sellerImage,
                info: "ملابس الصيرفى ",
              }}
            />
          </Box>
        </>
      )}
      <Box
        sx={{
          position: "relative",
          mt: !admin && "-56px",
        }}
      >
        <SectionTitle sectionTitle={{ main: title, second: secondTitle }} />
      </Box>
      <Box
        sx={{
          margin: "0 19px",
          mt: "-22px",
          display: "flex",
          alignItems: "center",
          gap: "236px",
        }}
      >
        <Search placeholder="أبحث فى منتجاتك......" />
        {!admin && <FilterBtn handleOpen={handleOpen} />}
      </Box>
      {/* products */}
      <Box sx={{ position: "relative", mx: "200px", mt: "120px" }}>
        <Products
          products={displayedProducts}
          // isReview={isReview}
          // admin={admin}
          // pending={pending}
          // refused={refused}
          // pendingReview={pendingReview}
        />
        <Box
          sx={{
            position: "absolute",
            top: admin ? "-180px" : "-388px",
            left: "0",
            fontSize: "20px",
            lineHeight: "22px",
            color: "colors.mainBlack",
          }}
        >
          {t("Pages")}
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
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          {t("from")} {totalPages} {t("pages")}
        </Box>
      </Box>
      <Box
        sx={{
          mt: "57px",
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

export default ShowProducts;
