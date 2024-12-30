import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Check, RemoveCircleOutline } from "@mui/icons-material";
import SectionTitle from "../common/Products/SectionTitle";
import { useTranslation } from "react-i18next";

const RegisterSuccess = ({ seller }) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle
        sectionTitle={{
          main: "Your account has been successfully registered.",
        }}
      />
      <Box
        sx={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
          mx: "auto",
          mt: "-66px",
          mb: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Check
          sx={{
            width: "103.2px",
            height: "114.85px",
            color: "colors.mainGreen",
          }}
        />
      </Box>
      {seller && (
        <Stack sx={{ gap: "49px", mt: "-33px", mb: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mx: "auto",
            }}
          >
            <RemoveCircleOutline
              sx={{
                width: "30px",
                height: "30px",
                color: "colors.mainGreen",
              }}
            />
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "71px",
                color: "colors.darkIcons",
              }}
            >
              {t("Please wait until your request is reviewed and approved.")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mx: "auto",
            }}
          >
            <RemoveCircleOutline
              sx={{
                width: "30px",
                height: "30px",
                color: "colors.mainGreen",
              }}
            />
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "71px",
                color: "colors.darkIcons",
              }}
            >
              {t("You will be notified of approval via an email message.")}
            </Typography>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default RegisterSuccess;
