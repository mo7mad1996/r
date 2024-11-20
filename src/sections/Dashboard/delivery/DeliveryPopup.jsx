import { Stack, Typography } from "@mui/material";
import React from "react";
import ChooseCity from "./ChooseCity";
import { Close } from "@mui/icons-material";

const DeliveryPopup = ({ handleClose }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        width: "1159px",
        // height: "494px",
        borderRadius: "12px",
        border: "3px solid",
        borderColor: "colors.mainGreen",
        alignItems: "center",
        pt: "52px",
        pb: "118px",
      }}
    >
      <Close
        sx={{
          position: "absolute",
          width: "14px",
          height: "14px",
          top: "17px",
          left: "19px",
          color: "colors.mainGreen",
          cursor: "pointer",
        }}
        onClick={handleClose}
      />
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "800",
          lineHeight: "33px",
          color: "colors.mainBlack",
          mb: "40px",
        }}
      >
        تخصيص مناطق الشحن لبائع
      </Typography>
      <ChooseCity />
    </Stack>
  );
};

export default DeliveryPopup;
