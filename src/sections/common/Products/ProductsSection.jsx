import React, { useContext, useEffect, useState } from "react";

import { Box, MenuItem, Select } from "@mui/material";
// import UsePagination from "../hooks/UsePagination";
import UsePagination from "../../../hooks/UsePagination";

import { PRODUCTS } from "../../../utils/products";
import Products from "../../Store/Products";
import usePaginate from "../../../hooks/usePaginate";
import { Context } from "../../../components/Context/Context";

const ProductsSection = ({ isReview, admin }) => {
  const { getProducts} = useContext(Context);
  let [products,setProducts]=useState([])
  async function getAllProducts() {
    let res = await getProducts();
    console.log(res?.data?.products?.data)
    setProducts(res?.data?.products?.data)
  }

  useEffect(() => {
    getAllProducts();
  }, []);

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
  console.log(page);
  const handleChange = (event) => {
    setPage(event.target.value);
  };
  useEffect(() => {
    // console.log(page);
  }, [page]);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Products products={products} isReview={isReview} />
        <Box
          sx={{
            position: "absolute",
            top: "-120px",
            left: "0",
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
                <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
              ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
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
      {/* </Box> */}
    </>
  );
};

export default ProductsSection;
