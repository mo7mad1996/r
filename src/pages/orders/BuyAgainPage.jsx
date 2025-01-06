import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import ProductsSection from "../../sections/common/Products/ProductsSection";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import ProductsSidebar from "../../sections/common/Products/ProductsSidebar";
import Search from "../../sections/common/Search";
import ModalComponent from "../../components/ModalComponent";
import DateFilter from "../../components/DateFilter";
import FilterBtn from "../../components/FilterBtn";
import useShowModal from "../../hooks/useShowModal";

const BuyAgainPage = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = (e) => setOpen(true);
  // const handleClose = () => setOpen(false);
  const { open, handleOpen, handleClose } = useShowModal();
  return (
    <>
      <Box>
        <SectionTitle sectionTitle={{ main: "شراء مرة اخري" }} />
        {/* search and filter  */}
        <Box
          sx={{
            margin: "0 19px 41px",
            display: "flex",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Search />
          <FilterBtn handleOpen={handleOpen} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
            pl: { xs: "39px", sm: "40px", md: "66px" },
          }}
        >
          <ProductsSidebar />
          <ProductsSection />
        </Box>
      </Box>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};
export default BuyAgainPage;
