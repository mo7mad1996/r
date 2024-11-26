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
  const [errMessage, setErrMessage] = useState(false);
  const [addresses, setAddresses] = useState([]);
  async function getAllAddresses() {
    try {
      let res = await axios.get(`${baseUrl}/user/address`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(res);
      setAddresses(res?.data?.address);
    } catch (error) {
      console.log(error);
      setErrMessage(true);
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
          <Box sx={{ px: "132px"  }}>
            {/* address  */}

            {addresses?.map((address, index) => {
              return (
                <Box id={address.id} key={index} sx={{ gap: "71px" ,mb:'10px'}}>
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
                          {address.residence_number} , {address.street_name} ,{" "}
                          {address.city} , {address.governorate}
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
                        onClick={() => navigate(`modify/${address.id}`)}
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
                
                </Box>
              );
            })}
          
          </Box>
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
