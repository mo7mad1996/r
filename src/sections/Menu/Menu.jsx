import { Grid, Paper, Stack, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import useShowModal from "../../hooks/useShowModal";
import { useTranslation } from "react-i18next";

const Menu = ({ items }) => {
  const { open, handleOpen, handleClose, message, setMessage } = useShowModal();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Stack
        sx={{
          px: { xs: "10px", sm: "80px", md: "100px", lg: "115px", xl: "170px" },
          mb: "100px",
          width: "100%",
        }}
      >
        <Grid
          container
          columnSpacing={["0", "47px"]}
          rowSpacing={"40px"}
          columns={items.length > 7 ? [12, 12, 12, 15] : [12, 12, 12, 12]}
        >
          {items.map((item, index) => (
            <Grid
              item
              xs={9}
              sm={6}
              md={4}
              // lg={3 > items.length > 7 ? 3 : 4}
              lg={items.length > 3 ? 3 : 5}
              key={item.name}
              sx={{ mx: { xs: "auto", sm: "0" } }}
            >
              <Paper
                sx={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "5px",
                  px: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: "28px",
                  fontWeight: "800",
                  lineHeight: "31px",
                  backgroundColor:
                    index === items.length - 1 ? "#cc0000" : "colors.mainWhite",
                  color:
                    index === items.length - 1 ? "white" : "colors.mainBlack",
                  boxShadow: "2.5px 2.5px 8px 4px #00000040",
                  cursor: "pointer",
                  transition: "all 0.3s ease", // Smooth transition for all properties
                  ":hover":
                    index === items.length - 1
                      ? {
                          transform: "scale(1.05)",
                        } // No hover effect for the last item
                      : {
                          backgroundColor: "colors.website",
                          color: "colors.wi8",
                          transform: "scale(1.05)",
                          boxShadow: "5px 5px 12px 6px #00000040",
                        },
                  "&:hover img":
                    index === items.length - 1
                      ? {}
                      : {
                          filter: "invert(5)", // Icon turns white for other items
                          transition: "filter .8s ease", // Smooth transition for icon color
                        },
                }}
                onClick={() => {
                  if (item.link === "/signout") {
                    setMessage(t("Do you really want to log out?"));
                    handleOpen();
                    return;
                  }
                  navigate(item.link);
                }}
              >
                {/* Render the icon */}
                <Box
                  component="img"
                  src={item.icon}
                  alt={`${item.name} icon`}
                  sx={{
                    width: "50px",
                    height: "50px",
                    mb: "10px",
                    transition: "filter 0.3s ease", // Smooth transition for icon filter
                  }}
                />
                {t(item.name)}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        message={message}
      />
    </>
  );
};

export default Menu;
