import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import ModalComponent from "~/components/ModalComponent";
import SectionTitle from "~/sections/common/Products/SectionTitle";
import useShowModal from "~/hooks/useShowModal";
import useApi from "@/hooks/useApi";
import { toast } from "react-toastify";
import { Context } from "@/components/Context/Context";
import { useTranslation } from "react-i18next";

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

// component
const AddressPage = () => {
  // config
  const { open, handleOpen, handleClose } = useShowModal();
  const navigate = useNavigate();
  const api = useApi();
  const { t } = useTranslation();
  const { address_type } = useContext(Context);

  // data
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [id, setId] = useState();

  // methods
  const deleteItem = async () => {
    try {
      const res = await api.delete(`/user/address/${id}`);

      const data = res.data.message;

      toast.success(data);
      handleClose();
      getAllAddresses();
    } catch (err) {
      console.error(err);

      toast.error(err.request?.data?.message || err.message);
    }
  };
  const getAllAddresses = async () => {
    try {
      const res = await api.get("/user/address");

      const data = res.data.address;
      setAddresses(data);
    } catch (error) {
      console.error(error);
      setErrMessage(error.response.data.message);
    }
  };

  // on component render
  useEffect(() => {
    getAllAddresses();
  }, []);

  // render
  return (
    <>
      <SectionTitle sectionTitle={{ main: "Addresses" }} />

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
          {t("Address Already Exists")} ({addresses.length})
        </Typography>

        <StyledButton
          sx={{
            width: "371px",
          }}
          onClick={() => navigate("new")}
        >
          {t("Add New Address")}
        </StyledButton>
      </Box>
      {errMessage ? (
        <Typography sx={{ textAlign: "center", fontSize: "45px" }}>
          {errMessage}
        </Typography>
      ) : (
        <>
          <Box sx={{ px: "132px" }}>
            {/* address  */}

            {addresses?.map((address, index) => {
              return (
                <Box
                  id={address.id}
                  key={index}
                  sx={{ gap: "71px", mb: "10px" }}
                >
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
                        {address.type}
                      </Typography>
                      <Stack sx={{ gap: "11px", mt: "16px" }}>
                        <StyledAddress>{address.address}</StyledAddress>
                        <StyledAddress>
                          {t(
                            address_type.find((e) => e.key == address.type)
                              ?.value
                          )}
                        </StyledAddress>
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
                        {t("Edit")}
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
                          setMessage(
                            t("Do you really want to delete this address?")
                          );
                          handleOpen();
                          setId(address.id);
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
            action={deleteItem}
          />
        </>
      )}
    </>
  );
};

export default AddressPage;
