import * as React from "react";

// component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MobileComponents from "./MobileComponents";

// icons
import { CiMenuBurger } from "react-icons/ci";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",
  alignItems: "center",
};

export default function MobileModal() {
  // data
  const [open, setOpen] = React.useState(false);

  // methods
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ fontSize: "22px", display: { xs: "block", md: "none" } }}
      >
        <CiMenuBurger />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MobileComponents />
        </Box>
      </Modal>
    </>
  );
}
