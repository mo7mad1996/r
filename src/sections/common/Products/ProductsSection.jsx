import React from "react";

// components
import { Box, MenuItem, Select } from "@mui/material";
import Products from "@/sections/Store/Products";
import Spinner from "@/components/Spinner";

// utils
import UsePagination from "@/hooks/UsePagination";

// component
const ProductsSection = ({
  isReview,
  admin,
  products = [],
  totalPages = 1,
  loading = false,
  page = 1,
  setPage,
}) => {
  const handleChange = (event) => {
    setPage(event.target.value);
  };

  // render
  return (
    <>
      <Box sx={{ position: "relative" }}>
        {loading && <Spinner />}
        {!loading && products.length && (
          <Products products={products} isReview={isReview} />
        )}
        <Box
          sx={{
            mt: 3,
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
                <MenuItem key={index} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
          </Select>
          من {totalPages} صفحات{" "}
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
    </>
  );
};

export default ProductsSection;
