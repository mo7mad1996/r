import React, { useState } from "react";

const useShowModal = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
    message,
    setMessage,
  };
};

export default useShowModal;
