import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import WithdrawAgree from "./WithdrawAgree";
import WithdrawRefuse from "./WithdrawRefuse";
import { Close } from "@mui/icons-material";

import useApi from "@/hooks/useApi";
import { useTranslation } from "react-i18next";

const WithdrawPopup = ({ handleClose }) => {
  // config
  const { t } = useTranslation();
  const api = useApi();

  // data
  const [withdrawState, setWithdrawState] = useState(0);
  // const [balance, setBalance] = useState(0);
  // methods
  const getWalletBalance = async () => {
    try {
      // const res = await api.get("/user/balance");
      // const data = res;
      // setBalance(data);
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
        position: "relative",
        width: "587px",
        pt: "90px",
        pb: "50px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "23px",
          top: "36px",
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
      {withdrawState == 0 && (
        <>
          <Stack
            sx={{
              width: "587px",
              // height: "932px",
              gap: "56px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "800",
                lineHeight: "33px",
                color: "colors.mainBlack",
                textAlign: "center",
                //   mb: "56px",
              }}
            >
              طلب سحب جديد
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "27px",
                color: "colors.mainBlack",
                textAlign: "center",
              }}
            >
              رصيد محفظتك الحالى{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: "800",
                lineHeight: "86px",
                color: "colors.website",
                textAlign: "center",
              }}
            >
              1600 {t("Currency")}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "27px",
                color: "colors.mainBlack",
                textAlign: "center",
              }}
            >
              أدخل الرصيد المراد سحبه
            </Typography>
          </Stack>
          <Stack>
            <Box
              sx={{
                width: "359px",
                height: "60px",
                borderRadius: "15px",
                backgroundColor: "colors.greyStrock",
                color: "colors.wi8",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                "& p, & input": {
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "42px",
                },
                "& input": {
                  color: "colors.wi8",
                },
                px: "65px",
                mx: "auto",
                my: "45px",
              }}
            >
              <InputBase defaultValue={1700} />
              <Typography sx={{ mt: "-10px" }}>{t("Currency")}</Typography>
            </Box>
            <Button
              sx={{
                width: "371px",
                height: "57.43px",
                fontSize: "22px",
                fontWeight: "800",
                lineHeight: "25px",
                mx: "auto",
                "&, &:hover": {
                  backgroundColor: "colors.mainGreen",
                  color: "colors.wi8",
                },
              }}
              onClick={() => setWithdrawState(1)}
            >
              أستمرار
            </Button>
          </Stack>
        </>
      )}
      {withdrawState == 1 && <WithdrawAgree />}
      {withdrawState == 2 && <WithdrawRefuse />}
    </Stack>
  );
};

export default WithdrawPopup;
