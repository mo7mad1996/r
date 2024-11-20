import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import useShowModal from "../../hooks/useShowModal";

const Menu = ({ items, dashboard }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [message, setMessage] = useState("");
  const { open, handleOpen, handleClose, message, setMessage } = useShowModal();

  const navigate = useNavigate();
  return (
    <>
      <Stack
        sx={{
          // alignItems: "center",
          px: { xs: "10px", sm: "80px", md: "150px", lg: "160px", xl: "170px" },
          mt: "-98px",
          mb: "100px",
        }}
      >
        <Grid
          container
          //   spacing={"40px"}
          columnSpacing={["0", "40px"]}
          rowSpacing={"40px"}
          columns={items.length > 7 ? [12, 12, 12, 15] : [12, 12, 12, 12]}
        >
          {/* <Box
    gap={"40px"}
    sx={{
      width: "fit-content",
      display: "flex",
      // justifyContent: "center",
      flexWrap: "wrap",
    }}
  > */}
          {items.map((item, index, array) => (
            <Grid
              item
              xs={9}
              sm={6}
              md={4}
              lg={array.length > 7 ? 3 : 4}
              key={item.name}
              sx={{ mx: { xs: "auto", sm: "0" } }}
            >
              {/* <Box key={item.name}> */}
              <Paper
                // elevation={8}
                sx={{
                  // width: "200px",
                  height: "200px",
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
                  color: "colors.mainBlack",
                  boxShadow: "2.5px 2.5px 8px 4px #00000040",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (item.link === "/signout") {
                    console.log("ss");
                    setMessage("هل ترغب حقا في تسجيل الخروج");
                    handleOpen();
                    return;
                  }
                  navigate(item.link);
                }}
              >
                {dashboard && (
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: "800",
                      lineHeight: "45px",
                      color: "colors.website",
                    }}
                  >
                    {item.num}
                  </Typography>
                )}
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* <Signout open={open} handleOpen={handleOpen} handleClose={handleClose} /> */}
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
