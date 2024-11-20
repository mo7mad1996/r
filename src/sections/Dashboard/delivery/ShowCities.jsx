import React from "react";
import { Box, Grid } from "@mui/material";

const ShowCities = ({ cities }) => {
  return (
    <Box
      sx={{
        px: "55px",
        mx: "auto",
        my: "93px",
      }}
    >
      <Grid container columnSpacing="18px" rowSpacing="38">
        {cities.map((item) => (
          <Grid item lg={1.5}>
            <Box
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F6F6F6",
                fontSize: "28px",
                fontWeight: "800",
                lineHeight: "31px",
                color: "colors.mainGreen",
              }}
            >
              {item.city}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowCities;
