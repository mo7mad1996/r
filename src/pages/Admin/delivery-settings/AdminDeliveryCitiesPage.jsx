import React, { useState } from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import SellerBox from "../../../sections/Dashboard/common/SellerBox";
import { Check, ExpandMore } from "@mui/icons-material";
import ShowCities from "../../../sections/Dashboard/delivery/ShowCities";

const cities = [
  { city: "القاهرة", id: 1 },
  { city: "الأسكندرية", id: 2 },
  { city: "قنا", id: 3 },
  { city: "أسيوط", id: 4 },
  { city: "السويس", id: 5 },
  { city: "البحيرة", id: 6 },
  { city: "بور سعيد", id: 7 },
  { city: "أسيوط", id: 8 },
  { city: "القاهرة", id: 9 },
  { city: "الأسكندرية", id: 10 },
  { city: "الجيزة", id: 11 },
  { city: "أسيوط", id: 12 },
  { city: "القاهرة", id: 13 },
  { city: "الأسكندرية", id: 14 },
  { city: "الجيزة", id: 15 },
  { city: "أسيوط", id: 16 },
  { city: "القاهرة", id: 17 },
  { city: "الأسكندرية", id: 18 },
  { city: "الجيزة", id: 19 },
  { city: "أسيوط", id: 20 },
  { city: "القاهرة", id: 21 },
  { city: "الأسكندرية", id: 22 },
  { city: "الجيزة", id: 23 },
  { city: "أسيوط", id: 24 },
];
const AdminDeliveryCitiesPage = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        mb: "50px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "محافظات الشحن" }} />
      <Stack
      >
        <ShowCities cities={cities} />
      </Stack>
    </Stack>
  );
};

export default AdminDeliveryCitiesPage;
