import { CheckCircle, Close } from "@mui/icons-material";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "800",
  lineHeight: "45px",
  color: "colors.mainBlack",
  textAlign: "center",
}));
const DeleteAdsPopup = ({ handleClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <Stack
      sx={{
        width: "985px",
        height: showSuccess ? "473px" : "455px",
        py: !showSuccess && "115px",
      }}
    >
      {!showSuccess && (
        <>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              lineHeight: "45px",
              textAlign: "center",
            }}
          >
            هل ترغب حقا فى حذف هذا الأعلان ؟
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: "48px",
              mt: "121px",
              "& button": {
                width: "416px",
                height: "60px",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "31px",
              },
            }}
          >
            <Button
              sx={{
                "&, &:hover": {
                  color: "colors.wi8",
                  backgroundColor: "colors.mainRed",
                },
              }}
              onClick={() => setShowSuccess(true)}
            >
              {t("yes")}
            </Button>
            <Button
              sx={{
                "&, &:hover": {
                  color: "colors.wi8",
                  backgroundColor: "colors.mainGreen",
                },
              }}
            >
              {t("no")}
            </Button>
          </Box>
        </>
      )}
      {showSuccess && (
        <>
          <Stack
            sx={{
              height: "473px",
              justifyContent: "center",
              alignItems: "center",
              gap: "47px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
                color: "colors.mainBlack",
                marginRight: "auto",
                left: "27px",
                top: "31px",
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
            <CheckCircle
              sx={{
                width: "103px",
                height: "97px",
                color: "colors.mainGreen",
              }}
            />
            <StyledTypo>تم حذف هذا الأعلان بنجاح</StyledTypo>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default DeleteAdsPopup;
