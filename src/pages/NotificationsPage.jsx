import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";
import ModalComponent from "../components/ModalComponent";
import DateFilter from "../components/DateFilter";
import useShowModal from "../hooks/useShowModal";
import FilterBtn from "../components/FilterBtn";
import { StyledStack, StyledTypo } from "../sections/common/StyledElements";
import { useTranslation } from "react-i18next";

const NotificationsPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle sectionTitle={{ main: "الأشعارات" }} />
      <Stack sx={{ alignItems: "center", mb: "100px" }}>
        <Stack sx={{ position: "relative", gap: "123px" }}>
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
              <Typography>تم تسليم الطلب</Typography>
              <Typography sx={{ fontWeight: "400!important" }}>
                رقم الطلب 3459872
              </Typography>
            </StyledStack>
          </Stack>
          <Stack>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>
            <StyledStack>
              <Typography>تأكيد الطلب</Typography>
              <Typography sx={{ fontWeight: "400!important" }}>
                رقم الطلب 3459872
              </Typography>
            </StyledStack>
          </Stack>
          <Stack>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>
            <StyledStack>
              <Typography>تم إستلام طلب جديد برقم 452</Typography>
            </StyledStack>
          </Stack>
          <Stack>
            <StyledTypo>الأربعاء , 10 أغسطس 2024 ,5:35 pm</StyledTypo>
            <StyledStack>
              <Typography>
                تم اضافة 500 {t("Currency")} مستحقاتك عن الطلب رقم 3101
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

export default NotificationsPage;
