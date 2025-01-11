import { CheckCircle, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "800",
  lineHeight: "45px",
  color: "colors.mainBlack",
  textAlign: "center",
}));
const DeletePopup = ({ handleClose, refused }) => {
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <Box
      sx={{
        width: "985px",
        position: "relative",
      }}
    >
      {!showSuccess && (
        <>
          <StyledTypo
            sx={{
              mt: "114px",
            }}
          >
            {refused
              ? "هل ترغب حقا فى حذف هذا المنتج ؟"
              : "هل ترغب حقا فى رفض هذا المنتج ؟"}
          </StyledTypo>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "47px",
              mb: "62px",
            }}
          >
            <TextField
              multiline
              rows={4}
              placeholder={
                !refused ? "ادخل سبب الرفض ..." : "ادخل سبب الحذف ..."
              }
              sx={{
                width: "873px",
                height: "202px",
                borderRadius: "5px",
                backgroundColor: "#D9D9D9",
                ".MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&:hover fieldset": {
                    // borderColor: `${theme.palette.colors.mainGreen} !important`,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: (theme) =>
                      `${theme.palette.colors.mainGreen} !important`,
                  },
                },
                "& textarea": {
                  color: "colors.greyStroke",
                  fontSize: "40px",
                  fontWeight: "800",
                  lineHeight: "45px",
                  height: "100%!important",
                },
                // p: "25px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "41px",
              mb: "185px",
              "& button": {
                width: "416px",
                height: "60px",
                color: "colors.wi8",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "31px",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{
                "&, &:hover": {
                  backgroundColor: "colors.mainRed",
                  color: "colors.wi8",
                },
              }}
              onClick={() => setShowSuccess(true)}
            >
              {t("yes")}
            </Button>
            <Button
              variant="contained"
              sx={{
                "&, &:hover": {
                  backgroundColor: "colors.mainGreen",
                  color: "colors.wi8",
                },
              }}
              onClick={handleClose}
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
            <StyledTypo>
              {refused
                ? "هل ترغب حقا فى حذف هذا المنتج ؟"
                : "تم رفض هذا المنتج بنجاح"}
            </StyledTypo>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default DeletePopup;
