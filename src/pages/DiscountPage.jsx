import React from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import useShowModal from "../hooks/useShowModal";
import ModalComponent from "../components/ModalComponent";
import DateFilter from "../components/DateFilter";
import FilterBtn from "../components/FilterBtn";
import { StyledStack, StyledTypo } from "../sections/common/StyledElements";

const DiscountPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <>
      <SectionTitle sectionTitle={{ main: "كوبونات الخصم" }} />
      <Stack sx={{ alignItems: "center", gap: "161px", mb: "100px" }}>
        <Stack
          sx={{
            position: "relative",
            alignItems: "center",
            gap: "123px",
            mb: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-94px",
              left: "23px",
            }}
          >
            <FilterBtn handleOpen={handleOpen} />
          </Box>
          <Box>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>

            <StyledStack>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "31px",
                  color: "#292D32",
                  mb: "19px",
                }}
              >
                استخدم الكود:{" "}
                <Box component="span" sx={{ color: "colors.mainGreen" }}>
                  SM2005
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "400",
                  lineHeight: "31px",
                  color: "#000000",
                }}
              >
                للحصول على خصم 50 ج.م هذا الكود صالح لمدة 3 ايام
              </Typography>
            </StyledStack>
          </Box>
          <Box>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>

            <StyledStack>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "31px",
                  color: "#292D32",
                  mb: "19px",
                }}
              >
                استخدم الكود:{" "}
                <Box component="span" sx={{ color: "colors.mainGreen" }}>
                  SM2005
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "400",
                  lineHeight: "31px",
                  color: "#000000",
                }}
              >
                للحصول على خصم 50 ج.م هذا الكود صالح لمدة 3 ايام
              </Typography>
            </StyledStack>
          </Box>
          <Box>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>

            <StyledStack>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "31px",
                  color: "#292D32",
                  mb: "19px",
                }}
              >
                استخدم الكود:{" "}
                <Box component="span" sx={{ color: "colors.mainGreen" }}>
                  SM2005
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "400",
                  lineHeight: "31px",
                  color: "#000000",
                }}
              >
                للحصول على خصم 50 ج.م هذا الكود صالح لمدة 3 ايام
              </Typography>
            </StyledStack>
          </Box>
        </Stack>
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

export default DiscountPage;
