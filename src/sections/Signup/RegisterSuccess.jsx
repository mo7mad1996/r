import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Check, RemoveCircleOutline } from "@mui/icons-material";
import SectionTitle from "../common/Products/SectionTitle";

const RegisterSuccess = ({ seller }) => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "تم تسجيل حسابك بنجاح" }} />
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
              يرجي الأنتظار حتي يتم مراجعة طلبك والموافقة عليه
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
              سيتم اعلامك بالموافقة برسالة عبر بريدك الألكتروني
            </Typography>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default RegisterSuccess;
