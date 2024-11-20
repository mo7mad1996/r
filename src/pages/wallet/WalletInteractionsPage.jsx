import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import FilterBtn from "../../components/FilterBtn";
import ModalComponent from "../../components/ModalComponent";
import DateFilter from "../../components/DateFilter";
import useShowModal from "../../hooks/useShowModal";
import { StyledStack, StyledTypo } from "../../sections/common/StyledElements";
import { StyledTypography } from "../../components/FormElements";

const WalletInteractionsPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <>
      <SectionTitle sectionTitle={{ main: " عرض عمليات المحفظة" }} />
      <Stack sx={{ alignItems: "center", mb: "100px" }}>
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
          <Stack>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>

            <StyledStack>
              <Typography>
                تم اضافة 500 ج.م مستحقاتك عن الطلب رقم 3101
              </Typography>
            </StyledStack>
          </Stack>
          <Stack>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>
            <StyledStack>
              <Typography>
                تم اضافة 500 ج.م مستحقاتك عن الطلب رقم 3101
              </Typography>
            </StyledStack>
          </Stack>
          <Stack>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>
            <StyledStack>
              <Typography>
                تم اضافة 500 ج.م مستحقاتك عن الطلب رقم 3101
              </Typography>
            </StyledStack>
          </Stack>
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

export default WalletInteractionsPage;
