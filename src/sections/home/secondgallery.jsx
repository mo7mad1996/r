import { Box, styled } from "@mui/material";
import React from "react";
import css from "./style.module.css";

const Image = styled("img")({
  objectFit: "cover", // Ensures the image covers its container
});

const Secondgallery = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "Space-between",
        alignItems: "stretch",
      }}
    >
      <Box className={css.item_group}>
        {/* First Section: Four Images */}

        <Box className={css.item}>
          {data.slice(0, 4).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "calc(50% - 10px)", // Two images per row with some spacing
                height: "40%", // Adjust height as needed
                marginBottom: "10px", // Adds spacing between rows
                backgroundColor: "white",
              }}
            >
              <Image
                src={item}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Box>

        {/* Second Section: Full-Size Image */}

        <Box className={css.item}>
          <Image
            src={data[3] || "https://via.placeholder.com/800"}
            alt="Full-Size Image"
            style={{
              width: "100%",
              height: "110%",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* third Section: Four Images */}
        <Box className={css.item}>
          {data.slice(0, 4).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "calc(50% - 10px)", // Two images per row with some spacing
                height: "40%", // Adjust height as needed
                marginBottom: "10px", // Adds spacing between rows
                backgroundColor: "white",
              }}
            >
              <Image
                src={item}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Box>
        {/* fourth Section: Full-Size Image */}
        <Box className={css.item}>
          <Image
            src={data[4] || "https://via.placeholder.com/800"}
            alt="Full-Size Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>

      {/* SECOND SECTION IN GALLERY */}
      <Box className={css.item_group}>
        {/* First Section: Four Images */}
        <Box className={css.item}>
          {data.slice(0, 4).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "calc(50% - 10px)", // Two images per row with some spacing
                height: "40%", // Adjust height as needed
                marginBottom: "10px", // Adds spacing between rows
                backgroundColor: "white",
              }}
            >
              <Image
                src={item}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Box>

        {/* Second Section: Full-Size Image */}
        <Box className={css.item}>
          <Image
            src={data[3] || "https://via.placeholder.com/800"}
            alt="Full-Size Image"
            style={{
              width: "100%",
              height: "110%",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* third Section: Four Images */}
        <Box className={css.item}>
          {data.slice(0, 4).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "calc(50% - 10px)", // Two images per row with some spacing
                height: "40%", // Adjust height as needed
                marginBottom: "10px", // Adds spacing between rows
                backgroundColor: "white",
              }}
            >
              <Image
                src={item}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Box>
        {/* fourth Section: Full-Size Image */}
        <Box className={css.item}>
          <Image
            src={data[4] || "https://via.placeholder.com/317x400"}
            alt="Full-Size Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Secondgallery;
