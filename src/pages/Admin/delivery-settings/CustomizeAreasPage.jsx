import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Search from "../../../sections/common/Search";
import useShowModal from "../../../hooks/useShowModal";
import ModalComponent from "../../../components/ModalComponent";
import DeliveryPopup from "../../../sections/Dashboard/delivery/DeliveryPopup";
import { useTranslation } from "react-i18next";

const items = [
  { id: 0, name: "الصيرفي ستور" },
  { id: 1, name: "الصيرفي ستور" },
  { id: 2, name: "الصيرفي ستور" },
  { id: 3, name: "الصيرفي ستور" },
  { id: 4, name: "الصيرفي ستور" },
  { id: 5, name: "الصيرفي ستور" },
  { id: 6, name: "الصيرفي ستور" },
  { id: 7, name: "الصيرفي ستور" },
  { id: 8, name: "الصيرفي ستور" },
  { id: 9, name: "الصيرفي ستور" },
  { id: 10, name: "الصيرفي ستور" },
  { id: 11, name: "الصيرفي ستور" },
  { id: 12, name: "الصيرفي ستور" },
  { id: 13, name: "الصيرفي ستور" },
];

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "800",
  lineHeight: "45px",
  color: theme.palette.colors.mainBlack,
}));
const StyledBox = styled(Box)(({ theme }) => ({}));
const CustomizeAreas = () => {
  const { open, handleOpen, handleClose } = useShowModal();
  const { t } = useTranslation();


  return (
    <Stack>
      <SectionTitle
        sectionTitle={{
          main: "تخصيص مناطق الشحن لبائع",
        }}
      />
      <Stack sx={{ width: "1215px", mx: "auto" }}>
        {/* search and filter  */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Search />
        </Box>
        <StyledTypo
          sx={{
            mt: "49px",
            mb: "42px",
          }}
        >
          {t("Seller")} ({t("store")})
        </StyledTypo>
        <Stack
          sx={{
            width: "1137px",
            gap: "25px",
            mb: "100px",
            "& > div:nth-of-type(even)": {
              backgroundColor: "white",
            },
          }}
        >
          {items.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "88px",
                borderRadius: "5px",
                backgroundColor: "#48464633",
                pr: "3px",
                pl: "71px",
              }}
            >
              <StyledTypo>الصيرفي ستور</StyledTypo>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "203px",
                  height: "53px",
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "colors.mainBlack",
                  "& p": {
                    color: "colors.mainBlack",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "27px",
                  },
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                <Typography>أختر المحافظات</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DeliveryPopup handleClose={handleClose} />
      </ModalComponent>
    </Stack>
  );
};

export default CustomizeAreas;
