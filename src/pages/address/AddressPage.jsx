import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import ModalComponent from "../../components/ModalComponent";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import useShowModal from "../../hooks/useShowModal";
import axios from "axios";
import { Context } from "../../components/Context/Context";
const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "800",
  lineHeight: "24.55px",
  color: theme.palette.colors.wi8,
  backgroundColor: theme.palette.colors.mainGreen,
  height: "57.43px",
  borderRadius: "12px",
  border: "3px",
  "&:hover": {
    backgroundColor: theme.palette.colors.mainGreen,
  },
}));
const StyledAddress = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "27px",
  color: theme.palette.colors.darkIcons,
}));
const AddressPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { baseUrl } = useContext(Context);
  const [errMessage, setErrMessage] = useState("");
  async function getAllAddresses() {
    try {
      let res = await axios.get(`${baseUrl}/user/address`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
      setErrMessage("لا يوجد اى عناوين حاليا");
    }
  }

  

  useEffect(() => {
    getAllAddresses();
  }, []);

  return (
    <>
      <SectionTitle sectionTitle={{ main: "العناوين" }} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "100px",
          mx: "93px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "31px",
            color: "colors.website",
          }}
        >
          عنوان موجود مسبقا (2)
        </Typography>

        <StyledButton
          sx={{
            width: "371px",
          }}
          onClick={() => navigate("new")}
    

        >
          اضف عنوان جديد
        </StyledButton>
      </Box>
      {errMessage ? (
        <Typography sx={{ textAlign: "center", fontSize: "45px" }}>
          {errMessage}
        </Typography>
      ) : (
        <>
          <Stack sx={{ px: "132px" }}>
            {/* address  */}
            <Stack sx={{ gap: "71px" }}>
              <Box
                sx={{
                  backgroundColor: "colors.liteGrey",
                  py: "23px",
                  pr: "31px",
                  pl: "152px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "28px",
                      fontWeight: "800",
                      lineHeight: "31px",
                      color: "colors.mainBlack",
                    }}
                  >
                    منزل
                  </Typography>
                  <Stack sx={{ gap: "11px", mt: "16px" }}>
                    <StyledAddress>روينة أحمد</StyledAddress>
                    <StyledAddress>01558087877</StyledAddress>
                    <StyledAddress>
                      98 , طريق الواحات , حورس , 6 اكتوبر ,الجيزة
                    </StyledAddress>
                  </Stack>
                </Stack>
                <Stack sx={{ justifyContent: "space-between" }}>
                  <StyledButton
                    sx={{
                      width: "232px",
                      color: "colors.website",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => navigate("modify")}
                  >
                    تعديل
                  </StyledButton>
                  <StyledButton
                    sx={{
                      width: "232px",
                      color: "colors.mainRed",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => {
                      setMessage("هل ترغب حقا فى حذف هذا العنوان");
                      handleOpen();
                    }}
                  >
                    حذف
                  </StyledButton>
                </Stack>
              </Box>
              <Box
                sx={{
                  backgroundColor: "colors.liteGrey",
                  py: "23px",
                  pr: "31px",
                  pl: "152px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "28px",
                      fontWeight: "800",
                      lineHeight: "31px",
                      color: "colors.mainBlack",
                    }}
                  >
                    منزل (أساسي)
                  </Typography>
                  <Stack sx={{ gap: "11px", mt: "16px" }}>
                    <StyledAddress>روينة asdasd أحمد</StyledAddress>
                    <StyledAddress>01558087877</StyledAddress>
                    <StyledAddress>
                      98 , طريق الواحات , حورس , 6 اكتوبر ,الجيزة
                    </StyledAddress>
                  </Stack>
                </Stack>
                <Stack sx={{ justifyContent: "space-between" }}>
                  <StyledButton
                    sx={{
                      width: "232px",
                      color: "colors.website",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => navigate("modify")}
                  >
                    تعديل
                  </StyledButton>
                  <StyledButton
                    sx={{
                      width: "232px",
                      color: "colors.mainRed",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={() => {
                      setMessage("هل ترغب حقا فى حذف هذا العنوان");
                      handleOpen();
                    }}
                  >
                    حذف
                  </StyledButton>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <ModalComponent
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            message={message}
          />
        </>
      )}
    </>
  );
};

export default AddressPage;
