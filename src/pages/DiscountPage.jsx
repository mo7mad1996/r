import React from "react";
import SectionTitle from "~/sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import useShowModal from "~/hooks/useShowModal";
import ModalComponent from "~/components/ModalComponent";
import DateFilter from "~/components/DateFilter";
import FilterBtn from "~/components/FilterBtn";
import { StyledStack, StyledTypo } from "~/sections/common/StyledElements";
import { useTranslation } from "react-i18next";

const DiscountPage = () => {
  const { t } = useTranslation();
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <>
      <SectionTitle sectionTitle={{ main: "Discount Coupons" }} />
      <Stack sx={{ alignItems: "center", gap: "160px", mb: "160px" }}>
        <Stack
          sx={{
            position: "relative",
            alignItems: "center",
            gap: "123px",
            mb: "100px",
          }}
        >
          <FilterBtn handleOpen={handleOpen} />
          {[1, 2, 3].map((n) => (
            <Box key={n}>
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
                  {t("Use")} {t("Code")}:{" "}
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
                  {t("To Get a Discount")}50 {t("Currency")}{" "}
                  {t("This code is valid for")} 3 ايام
                </Typography>
              </StyledStack>
            </Box>
          ))}
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
