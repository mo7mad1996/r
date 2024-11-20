import React from "react";
import { Box, Rating, styled } from "@mui/material";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty": {
    color: theme.palette.colors.mainGreen,
  },
  "& .MuiRating-iconFilled": {
    color: theme.palette.colors.mainGreen,
  },
  "& .MuiRating-iconHover": {
    // color: "#ff3d47",
  },
}));
const Reviews = ({ value = 2 }) => {
  return (
    <StyledRating
      name="read-only"
      value={value}
      max={5}
      // size="small"
      readOnly
      sx={{ borderColor: "red" }}
    />
  );
};

export default Reviews;
