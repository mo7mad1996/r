import React, { useState } from "react";
import DatePick from "../components/DatePick";
import { Box, Button, Stack, Typography, styled } from "@mui/material";

const FilterBtn = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  padding: "0 10px",
  borderRadius: "5px",
  backgroundColor: theme.palette.colors.wi8,
  cursor: "pointer",
}));
const DateFilter = ({ handleClose }) => {
  const [currentBtn, setCurrentBtn] = useState(0);
  return (
    <Stack
      sx={{
        backgroundColor: "#F6F6F6",
        width: "100%",
        height: "440px",
        alignItems: "center",
        "&, & p": {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "27px",
          color: "colors.mainBlack",
        },
        borderRadius: "15px",
        py: "40px",
        px: "30px",
      }}
    >
      <Box sx={{ display: "flex", gap: "129px", mb: "99px" }}>
        <Box sx={{ display: "flex", gap: "35px", alignItems: "center" }}>
          <Typography
          // sx={{
          //   fontSSize: "24px",
          //   fontWeight: "700",
          //   lineHeight: "27px",
          //   color: "color.mainBlack",
          // }}
          >
            من
          </Typography>
          <DatePick />
        </Box>
        <Box sx={{ display: "flex", gap: "58px", alignItems: "center" }}>
          <Typography
          // sx={{
          //   fontSize: "24px",
          //   fontWeight: "700",
          //   lineHeight: "27px",
          //   color: "color.mainBlack",
          // }}
          >
            الى
          </Typography>
          <DatePick />
        </Box>
      </Box>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "31px",
        }}
      >
        <FilterBtn
          onClick={() => setCurrentBtn(1)}
          sx={{
            backgroundColor: currentBtn == 1 ? "colors.mainGreen" : "",
            color: currentBtn == 1 ? "colors.wi8" : "",
          }}
        >
          اليوم
        </FilterBtn>
        <FilterBtn
          onClick={() => setCurrentBtn(2)}
          sx={{
            backgroundColor: currentBtn == 2 ? "colors.mainGreen" : "",
            color: currentBtn == 2 ? "colors.wi8" : "",
          }}
        >
          أمس
        </FilterBtn>
        <FilterBtn
          onClick={() => setCurrentBtn(3)}
          sx={{
            backgroundColor: currentBtn == 3 ? "colors.mainGreen" : "",
            color: currentBtn == 3 ? "colors.wi8" : "",
          }}
        >
          آخر 7 أيام
        </FilterBtn>
        <FilterBtn
          onClick={() => setCurrentBtn(4)}
          sx={{
            backgroundColor: currentBtn == 4 ? "colors.mainGreen" : "",
            color: currentBtn == 4 ? "colors.wi8" : "",
          }}
        >
          آخر 30 يوم
        </FilterBtn>
        <FilterBtn
          onClick={() => setCurrentBtn(5)}
          sx={{
            backgroundColor: currentBtn == 5 ? "colors.mainGreen" : "",
            color: currentBtn == 5 ? "colors.wi8" : "",
          }}
        >
          آخر 3 شهور
        </FilterBtn>
      </Stack>
      <Button
        sx={{
          width: "173px",
          height: "53px",
          backgroundColor: "colors.mainGreen",
          color: "colors.wi8",
          fontSize: "25px",
          fontWeight: "700",
          lineHeight: "28px",
          mt: "115px",
          "&:hover": {
            backgroundColor: "colors.mainGreen",
          },
        }}
        onClick={handleClose}
      >
        عرض
      </Button>
    </Stack>
  );
};

export default DateFilter;
