import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const WithdrawAgree = ({ handleClose }) => {
  const { t } = useTranslation();


  return (
    <Stack
      sx={{
        mx: "83px",
        my: "90px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "800",
          lineHeight: "31px",
          color: "colors.mainBlack",
          textAlign: "center",
        }}
      >
        طلب سحب جديد
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "700",
          lineHeight: "25px",
          color: "colors.mainGreen",
          textAlign: "center",
          mt: "40px",
          mb: "21px",
        }}
      >
        الخميس 31 اغسطس 2023 , 5:35 am
      </Typography>
      <Typography
        sx={{
          width: "415px",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "41px",
          color: "colors.mainBlack",
        }}
      >
        برجاء الموافقة علي سحب مبلغ 1000 {t("Currency")} من مستحقاتي
      </Typography>
      <Button
        sx={{
          width: "371px",
          height: "57.43px",
          fontSize: "22px",
          fontWeight: "800",
          lineHeight: "25px",
          mx: "auto",
          mt: "50px",
          "&, &:hover": {
            color: "colors.wi8",
            backgroundColor: "colors.mainGreen",
          },
        }}
      >
        إرسال للموافقه
      </Button>
    </Stack>
  );
};

export default WithdrawAgree;
