import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material";
import UsePagination from "../../../hooks/UsePagination";
("../../../");
import { ads } from "../../../utils/ads";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import usePaginate from "../../../hooks/usePaginate";
import useShowModal from "../../../hooks/useShowModal";
import ModalComponent from "../../../components/ModalComponent";
import DeleteAdsPopup from "./DeleteAdsPopup";

const ShowAds = ({ title, admin }) => {
  const { open, handleOpen, handleClose } = useShowModal();

  const navigate = useNavigate();
  const itemsPerPage = 20;

  const {
    page,
    setPage,
    displayedItems: displayedAds,
    totalPages,
  } = usePaginate({
    itemsPerPage,
    items: ads,
  });

  return (
    <>
      <SectionTitle sectionTitle={{ main: title }} />
      <Box
        sx={{
          mx: "20px",
          pt: "40px",
          px: "28px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={"61px"} sx={{ width: "100%" }}>
          {displayedAds.map((ad) => (
            <Grid item key={ad.id} xs={12} sm={6} md={4} lg={3}>
              <Stack>
                <Box
                  component={"img"}
                  src={ad.image}
                  sx={{ width: "100%", height: "480px", cursor: "pointer" }}
                  onClick={() => {}}
                />
                {admin && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: "37px",
                      "& button": {
                        width: "130px",
                        height: "57px",
                        borderRadius: "5px",
                        border: "3px solid",
                        fontSize: "22px",
                        fontWeight: "800",
                        lineHeight: "25px",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        "&, &:hover": {
                          color: "colors.mainRed",
                          borderColor: "colors.mainRed",
                        },
                      }}
                      onClick={handleOpen}
                    >
                      حذف
                    </Button>
                    <Button
                      sx={{
                        "&, &:hover": {
                          color: "colors.mainGreen",
                          borderColor: "colors.mainGreen",
                        },
                      }}
                    >
                      تعديل
                    </Button>
                  </Box>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          mt: "108px",
          mb: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UsePagination
          setPage={setPage}
          totalPages={totalPages}
          // currentPage=
          setCurrentPage={setPage}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            width: "461px",
            height: "92px",
            borderRadius: "15px",
            fontSize: "32px",
            fontWeight: "800",
            lineHeight: "36px",
            my: "122px",
            "&, &:hover": {
              color: "colors.wi8",
              backgroundColor: "colors.mainGreen",
            },
          }}
          onClick={() => navigate("/admin/dashboard/ads/add")}
        >
          إضافة اعلان جديد
        </Button>
      </Box>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DeleteAdsPopup handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default ShowAds;
