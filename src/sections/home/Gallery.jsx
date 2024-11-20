import { Box, Grid, styled } from "@mui/material";
import React from "react";

const Image = styled("img")({});
const Gallery = ({ data }) => {
  return (
    <Box
      sx={{
        px: "20px",
        display: "flex",
        justifyContent: "center",
        // pb: "24px",
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} sx={{ height: "525px" }}>
            <Box
              sx={{ position: "relative", cursor: "pointer", height: "100%" }}
              onClick={() => console.log("hello")}
            >
              {/* <Link
              href="#"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                backgroundColor: "red",
                display: "block",
                visibility: "hidden",
              }}
            >
              aa
            </Link> */}
              <Image src={item} sx={{ width: "100%", height: "100%" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
