import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Slide,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const Btn = styled(Button)(({ theme }) => ({
  //   fontSize: "28px",
  fontWeight: "700",
  lineHeight: "31px",
  minWidth: "50px",
  [theme.breakpoints.down("lg")]: {
    width: "300px",
  },

  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    fontSize: "20px",
  },
  width: "416px",
  fontSize: "28px",

  height: "60px",
  color: theme.palette.colors.wi8,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //   p: 4,
};
const ModalComponent = ({
  open,
  handleOpen,
  handleClose,
  children,
  message,
}) => {
  const location = useLocation();
  const customAreas = location.pathname.includes("/custom-areas");
  console.log(customAreas);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ border: "0" }}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box
          sx={[
            style,
            customAreas && {
              border: "0",
              borderRadius: "12px",
            },
          ]}
        >
          {!children && (
            <Stack
              sx={{
                //   width: "985px",
                //   height: "473px",
                py: { xs: "14px", sm: "60px", md: "114px" },
                px: { xs: "20px", sm: "64px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "30px", md: "40px" },
                  fontWeight: "800",
                  lineHeight: "45px",
                  color: "#000000",
                }}
              >
                {message}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "10px", sm: "41px" },
                  pt: "73px",
                }}
              >
                <Btn
                  sx={{
                    backgroundColor: "colors.mainRed",
                    "&:hover": {
                      backgroundColor: "colors.mainRed",
                    },
                  }}
                  onClick={() => console.log("clicked")}
                >
                  نعم
                </Btn>
                <Btn
                  sx={{
                    backgroundColor: "colors.website",
                    "&:hover": {
                      backgroundColor: "colors.website",
                    },
                  }}
                  onClick={handleClose}
                >
                  لا
                </Btn>
              </Box>
            </Stack>
          )}
          {children}
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
