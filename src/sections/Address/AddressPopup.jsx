import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddressPopup = ({ handleClose }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "985px",
        height: "554px",
        padding: "57px 69px",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "800",
          lineHeight: "45px",
          color: "colors.mainBlack",
        }}
      >
        اختر موقع التوصيل
      </Typography>
      <Typography
        sx={{
          fontSize: "38px",
          fontWeight: "700",
          lineHeight: "42px",
          color: "colors.greyStrock",
          mt: "29px",
          mb: "38px",
        }}
      >
        قد تختلف خيارات و سرعة التوصيل وفقا للموقع
      </Typography>
      <Stack
        sx={{
          width: "853px",
          height: "171px",
          border: "1px solid #A68E8C",
          backgroundColor: "#F6E9E3",
          padding: "25px",
          mb: "25px",
          "& p": {
            fontSize: "30px",
            lineHeight: "34px",
            color: "#292D32",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            mb: "8px",
          }}
        >
          ممدوح الصيرفي
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            mb: "20px",
          }}
        >
          الاسكندرية ش الشيخ حسين سليمان{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "28px",
          }}
        >
          العنوان الرئيسي{" "}
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: "colors.website",
            width: "416px",
            height: "73px",
            color: "colors.wi8",
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "45px",
            p: "0",
            "&:hover": {
              backgroundColor: "#007a49b6",
            },
          }}
          onClick={() => {
            handleClose();
            navigate("/user/address");
          }}
        >
          إدارة العناوين
        </Button>
      </Box>
    </Box>
  );
};

export default AddressPopup;
