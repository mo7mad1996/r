import React, { useState } from "react";
import SectionTitle from "../sections/common/Products/SectionTitle";
import { Box, Grid } from "@mui/material";
import UsePagination from "../hooks/UsePagination";
import { useNavigate } from "react-router-dom";

import { ads } from "../utils/ads";
import usePaginate from "../hooks/usePaginate";
import ShowAds from "../sections/common/Ads/ShowAds";

const AdsPage = () => {
  // const navigate = useNavigate();
  // const itemsPerPage = 20;

  // const {
  //   page,
  //   setPage,
  //   displayedItems: displayedAds,
  //   totalPages,
  // } = usePaginate({
  //   itemsPerPage,
  //   items: ads,
  // });

  return (
    <>
      <ShowAds title="أعلانات ‌چوملا" />
      {/* <SectionTitle sectionTitle={{ main: "أعلانات ‌چوملا" }} />
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
              <Box
                component={"img"}
                src={ad.image}
                sx={{ width: "100%", height: "480px", cursor: "pointer" }}
                onClick={() => {}}
              ></Box>
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
      </Box> */}
    </>
  );
};

export default AdsPage;
