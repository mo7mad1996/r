import React from "react";

// components
import { Box, MenuItem, Select } from "@mui/material";
import Products from "@/sections/Store/Products";
import Spinner from "@/components/Spinner";

// utils
import UsePagination from "@/hooks/UsePagination";
import { useTranslation } from "react-i18next";

// component
const ProductsSection = ({
  isReview,
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
  if (loading) return <Spinner />;
  if (products.length)
    return (
      <>
        <Box sx={{ position: "relative" }}>
          <Paginate {...{ page, handleChange, totalPages }} />
          <Products products={products} isReview={isReview} />
        </Box>
        <Box
          sx={{
            mt: "57px",
            mb: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "1em",
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
  return <div>No data found</div>;
};

export default ProductsSection;

function Paginate({ page, handleChange, totalPages }) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mt: 3,
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
            <MenuItem key={index} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
      </Select>
      {t("from")} {totalPages} {t("pages")}
    </Box>
  );
}
