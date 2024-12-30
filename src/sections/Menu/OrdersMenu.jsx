import { Grid, Paper, Stack, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import useShowModal from "../../hooks/useShowModal";

import useApi from "@/hooks/useApi";

const OrdersMenu = ({ items }) => {
  const { open, handleOpen, handleClose, message, setMessage } = useShowModal();
  const navigate = useNavigate();

  const api = useApi();
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // methods
  const getOrders = async () => {
    try {
      setLoading(true);
      const res = await api.get("/user/order");

      const data = res.data.orders;

      setOrders(data);
    } catch (err) {
      console.error(err);

      setErrorMessage(err.response?.data?.message);
    } finally {
      setLoading(true);
    }
  };

  // on mounted
  useEffect(() => {
    getOrders();
  }, []);

  if (errorMessage) return <h4>{errorMessage}</h4>;

  return (
    <>
      <Stack
        sx={{
          px: { xs: "10px", sm: "80px", md: "100px", lg: "115px", xl: "170px" },
          mt: "-98px",
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
              lg={items.length > 3 ? 3 : 4}
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
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#cc0000",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    fontWeight: "800",
                    fontSize: "40px",
                    color: "#fff",
                    marginTop: "5px",
                  }}
                >
                  {item.count}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", fontSize: "20px" }}
                >
                  {item.name}
                </Typography>
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

export default OrdersMenu;
