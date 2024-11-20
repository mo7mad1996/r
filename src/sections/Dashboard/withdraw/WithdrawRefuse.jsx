import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const WithdrawRefuse = ({ handleClose }) => {
  return (
    <Stack
      sx={{
        my: "90px",
      }}
    >
      <Box
        sx={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          mb: "53px",
        }}
      >
        <Close
          sx={{ width: "80px", height: "80px", color: "colors.mainRed" }}
        />
      </Box>
      <Stack
        sx={{
          gap: "26px",
          alignItems: "center",
          "& p": {
            fontSize: "28px",
            fontWeight: " 800",
            lineHeight: "31px",
            color: "colors.mainBlack",
          },
        }}
      >
        <Typography>طلب سحب مرفوض</Typography>
        <Typography>لعدم كفاية الرصيد</Typography>
      </Stack>
    </Stack>
  );
};

export default WithdrawRefuse;
