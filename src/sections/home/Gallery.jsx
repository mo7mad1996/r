import { Box, styled } from "@mui/material";
import React from "react";

const Image = styled("img")({
  objectFit: "cover", // Ensures the image covers its container
});

const Gallery = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "Space-between",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Arrange sections in a column
          width: "100%", // Full width
          height: "555px",
          justifyContent: "space-between",
          gap: "50px",
          alignItems: "center",
          // backgroundColor: "#cc0000",
          padding: "50px",
        }}
      >
        {/* First Section: Four Images */}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
            overflow: "hidden",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
            overflow: "hidden",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            src={data[4] || "https://via.placeholder.com/800"}
            alt="Full-Size Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>

      {/* SECOND SECTION IN GALLERY */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Arrange sections in a column
          width: "100%", // Full width
          height: "555px",
          justifyContent: "space-between",
          gap: "50px",
          alignItems: "center",
          backgroundColor: "#3e4145",
          padding: "50px",
        }}
      >
        {/* First Section: Four Images */}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
            overflow: "hidden",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
            overflow: "hidden",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "50%",
            padding: "0%",
            height: "400px", // Adjust height to fit content or set a specific size
            px: "20px",
            overflow: "hidden",
          }}
        >
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

export default Gallery;
