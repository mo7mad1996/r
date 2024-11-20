import React, { useState } from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";
import { Box, Button, Stack, Typography } from "@mui/material";
import filterImg from "../assets/filter.png";
import Modal2 from "../components/Modal2";
import DateFilter from "../components/DateFilter";
import ModalComponent from "../components/ModalComponent";
import FilterBtn from "../components/FilterBtn";
import useShowModal from "../hooks/useShowModal";
const GoomlaNewsPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <>
      <SectionTitle sectionTitle={{ main: "نشرة عملاء چوملا" }} />
      <Box
        sx={{
          mx: "152px",
          mb: "92px",
          mt: "-30px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <FilterBtn handleOpen={handleOpen} />
      </Box>
      <Stack sx={{ alignItems: "center", gap: "119px", mb: "100px" }}>
        <Box
          sx={{
            backgroundColor: "#ebebeb",
            width: "80%",
            height: "273px",
            pt: "17px",
            px: "66px",
            border: "1px solid",
            borderColor: "colors.website",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mb: "17px",

              "& p": {
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "27px",
                color: "colors.website",
              },
            }}
          >
            <Typography>الخميس 31 اغسطس 2023</Typography>
            <Typography>10:10م</Typography>
          </Box>
          <Stack sx={{ height: "168px", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "35px",
                color: "#000000",
              }}
            >
              نعتزر للسادة العملاء لإلغاء جميع طلبات الشحن يوم الخميس القادم نرا
              لسوء الأحوال الجوية
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "25.5px",
                color: "#000000",
                textAlign: "end",
              }}
            >
              مدير چوملا
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ebebeb",
            width: "80%",
            height: "273px",
            pt: "17px",
            px: "66px",
            border: "1px solid",
            borderColor: "colors.website",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mb: "17px",
              "& p": {
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "27px",
                color: "colors.website",
              },
            }}
          >
            <Typography>الخميس 31 اغسطس 2023</Typography>
            <Typography>10:10م</Typography>
          </Box>
          <Stack sx={{ height: "168px", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "35px",
                color: "#000000",
              }}
            >
              نعتزر للسادة العملاء لإلغاء جميع طلبات الشحن يوم الخميس القادم نرا
              لسوء الأحوال الجوية
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "25.5px",
                color: "#000000",
                textAlign: "end",
              }}
            >
              مدير چوملا
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ebebeb",
            width: "80%",
            height: "273px",
            pt: "17px",
            px: "66px",
            border: "1px solid",
            borderColor: "colors.website",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mb: "17px",
              "& p": {
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "27px",
                color: "colors.website",
              },
            }}
          >
            <Typography>الخميس 31 اغسطس 2023</Typography>
            <Typography>10:10م</Typography>
          </Box>
          <Stack sx={{ height: "168px", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "35px",
                color: "#000000",
              }}
            >
              نعتزر للسادة العملاء لإلغاء جميع طلبات الشحن يوم الخميس القادم نرا
              لسوء الأحوال الجوية
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "25.5px",
                color: "#000000",
                textAlign: "end",
              }}
            >
              مدير چوملا
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default GoomlaNewsPage;
