import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  justifyContent: "space-between",
  // height: "66px",
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
          color: "white",
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder={placeholder || "البحث في الطلبات برقم الطلب..."}
        sx={{
          position: "relative",
          flex: "1",
          padding: "7px 12px",
          display: "block",
        }}
      />
    </StyledSearch>
  );
};

export default Search;
