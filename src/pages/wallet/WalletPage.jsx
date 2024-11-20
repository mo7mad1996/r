import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import DateFilter from "../../components/DateFilter";
import useShowModal from "../../hooks/useShowModal";
import WalletPopup from "../../sections/wallet/WalletPopup";

const WalletPage = () => {
  const navigate = useNavigate();
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <>
      <SectionTitle sectionTitle={{ main: " المحفظة" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "77px",
        }}
      >
        <Paper
          // elevation={8}
          sx={{
            width: "239px",
            height: "200px",
            borderRadius: "5px",
            px: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "24.5px",
            color: "colors.mainBlack",
            boxShadow: "2.5px 2.5px 8px 4px #00000040",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          عرض رصيد المحفظة
        </Paper>
        <Paper
          // elevation={8}
          sx={{
            width: "239px",
            height: "200px",
            borderRadius: "5px",
            px: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "24.5px",
            color: "colors.mainBlack",
            boxShadow: "2.5px 2.5px 8px 4px #00000040",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("interactions");
          }}
        >
          عرض عمليات المحفظة
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "124px",
          mb: "33px",
          gap: "97px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "31.25px",
            color: "colors.mainBlack",
          }}
        >
          رقم محفظتك
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F6F6F6",
            width: "350px",
            height: "102px",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "33px",
            color: "colors.mainBlack",
          }}
        >
          011236457455
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "30.6px",
          color: "colors.greyLabels",
          textAlign: "center",
        }}
      >
        هذا الرقم سوف يتم ارسال مستحقاتك المالية لدي الموقع عليه
      </Typography>
      <Box sx={{ textAlign: "center", mt: "66px", mb: "100px" }}>
        <Button
          sx={{
            width: "371px",
            height: "57.43px",
            borderRadius: "12px",
            backgroundColor: "colors.mainGreen",
            color: "colors.wi8",
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "24.55px",
            "&:hover": {
              backgroundColor: "colors.mainGreen",
            },
          }}
        >
          حفظ
        </Button>
      </Box>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <WalletPopup handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default WalletPage;
