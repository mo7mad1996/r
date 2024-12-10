import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useApi from "@/hooks/useApi";

const WalletPopup = ({ handleClose }) => {
  // config
  const api = useApi();

  // data
  const [value, setValue] = useState(0);
  const [balance, setBalance] = useState(0);

  // methods
  const getWalletBalance = async () => {
    try {
      const res = await api.get("/user/wallet/balance");
      const data = res.data.balance;
      setBalance(data);
    } catch (err) {
      console.error(err);
    }
  };

  // on component render
  useEffect(() => {
    getWalletBalance();
  }, []);

  // render
  return (
    <Stack
      sx={{
        // width: "fit-content",
        width: "985px",
        // height: "706px",
        padding: "27px",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          color: "colors.mainBlack",
          marginRight: "auto",
        }}
      >
        <Close
          sx={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
      </Box>
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "45px",
            color: "colors.mainBlack",
            textAlign: "center",
            mt: "14px",
            mb: "27px",
          }}
        >
          رصيد محفظتك الحالى
        </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "800",
            lineHeight: "86px",
            color: "colors.mainGreen",
          }}
        >
          {new Intl.NumberFormat("ar-EG", {
            style: "currency",
            currency: "EGP",
            minimumFractionDigits: 2,
          }).format(balance)}
        </Typography>
        <Stack
          sx={{
            gap: "27px",
            alignItems: "center",
            mt: "23px",
            mb: "67px",
            "& p": {
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "27px",
              color: "#292D32",
            },
          }}
        >
          <Typography>الأربعاء , 6 ديسمبر ,2023</Typography>
          <Typography>10:10م</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WalletPopup;
