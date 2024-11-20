import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import searchImage from "/search.png";

const StyledSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "66px",
  width: "775px",
  border: "2px solid",
  borderColor: theme.palette.colors.website,
  borderRadius: "12px",
  // margin: "0 19px 41px",
}));
const Search = ({ placeholder }) => {
  return (
    <StyledSearch>
      <Box
        sx={{
          height: "66px",
          width: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "colors.website",
          borderRadius: "12px",
        }}
      >
        <Box
          component={"img"}
          src={searchImage}
          sx={{ width: "35px", height: "35px" }}
        />
      </Box>
      <InputBase
        placeholder={placeholder || "البحث في الطلبات برقم الطلب..."}
        sx={{
          position: "relative",
          padding: "20px",
          flex: "1",
          fontSize: "28px",
        }}
      />
    </StyledSearch>
  );
};

export default Search;
