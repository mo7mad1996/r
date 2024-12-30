import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, ListItem, styled, Button } from "@mui/material";

import FilterSidebar from "./FilterSidebar";

import faceIcon from "../../../assets/store/face.png";
import instaIcon from "../../../assets/store/insta.png";
import whatsIcon from "../../../assets/store/whats.png";
import phoneIcon from "../../../assets/store/phone.png";
import { useTranslation } from "react-i18next";

const SideBar = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "145px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "248px",
  },
  alignItems: "center",
  mt: "382px",
  position: "sticky",
  top: "50px",
  marginBottom: "30px",
  height: "600px",
  overflowX: "auto",
}));

const StyledListItem = styled(ListItem)({
  textAlign: "center",
});
const CustomRadioButton = styled("input")(({ theme }) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  marginRight: "8px",
  appearance: "none",
  border: `2px solid green`, // Change border color to red for radio button
  borderRadius: "50%", // Make the border circular for radio button appearance
  position: "relative",
  "&:checked": {
    backgroundColor: "green", // Red color when checked
    border: `2px solid green`, // Ensure border stays red when checked
  },
  "&:checked::after": {
    content: '""',
    position: "absolute",
    top: "3px", // Adjusted position to fit in the radio button
    left: "3px",
    width: "10px", // Smaller inner circle to represent the checked state
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "white", // White inner circle for checked state
  },
}));

const CustomCheckbox = styled("input")(({ theme }) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  marginRight: "8px",
  appearance: "none",
  border: `2px solid green`,
  borderRadius: "4px",
  position: "relative",
  "&:checked": {
    backgroundColor: "white", // Green color when checked
    border: `2px solid green`,
  },
  "&:checked::after": {
    content: '""',
    position: "absolute",
    top: "0px",
    left: "5px",
    width: "6px",
    height: "12px",
    border: "solid green",
    borderWidth: "0 2px 2px 0",
    transform: "rotate(45deg)",
  },
}));

const ProductsSidebar = () => {
  const {t} = useTranslation()
  const [showAll, setShowAll] = useState(false);

  const items = ["فلتر 1", "فلتر 2", "فلتر 3", "فلتر 4", "فلتر 5"]; // Example items

  return (
    <SideBar>
      <FilterSidebar />

      {/* Existing filters */}
      {[
        "الأعلى تقيماً",
        "الأعلى سعراً",
        "أحدث سعراً",
        "أفضل العروض",
        "الأكثر مبيعاً",
      ].map((label, index) => (
        <StyledListItem key={index}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <CustomCheckbox type="checkbox" />
            <Link
              to="#"
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          </label>
        </StyledListItem>
      ))}

      {/* New section for "Categories" */}
      <Box mt={5}>
        <h3 style={{ fontWeight: "bold", textAlign: "right" }}>
          {t("Categories")}
        </h3>
        <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
          {/* Display the first 3 items */}
          {items.slice(0, 3).map((item, index) => (
            <StyledListItem key={index}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <CustomRadioButton type="radio" />
                <Link
                  to="#"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "17px",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </label>
            </StyledListItem>
          ))}

          {/* Display the rest of the items if showAll is true */}
          {showAll &&
            items.slice(3).map((item, index) => (
              <StyledListItem key={index + 3}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <CustomRadioButton type="radio" />
                  <Link
                    to="#"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "17px",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                </label>
              </StyledListItem>
            ))}

          {/* Button to toggle showing more items */}
          <Button
            sx={{ mt: 2, color: "black" }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "إخفاء" : "عرض المزيد"}
          </Button>
        </Stack>
      </Box>
      {/* New section for "Categories" */}
      <Box mt={5}>
        <h3 style={{ fontWeight: "bold", textAlign: "right" }}>
          {t("Categories")}{" "}
        </h3>
        <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
          {/* Display the first 3 items */}
          {items.slice(0, 3).map((item, index) => (
            <StyledListItem key={index}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <CustomRadioButton type="radio" />
                <Link
                  to="#"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "17px",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </label>
            </StyledListItem>
          ))}

          {/* Display the rest of the items if showAll is true */}
          {showAll &&
            items.slice(3).map((item, index) => (
              <StyledListItem key={index + 3}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <CustomRadioButton type="radio" />
                  <Link
                    to="#"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "17px",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                </label>
              </StyledListItem>
            ))}

          {/* Button to toggle showing more items */}
          <Button
            sx={{ mt: 2, color: "black" }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "إخفاء" : "عرض المزيد"}
          </Button>
        </Stack>
      </Box>
      {/* New section for "Categories" */}
      <Box mt={5}>
        <h3 style={{ fontWeight: "bold", textAlign: "right" }}>
          {t("Categories")}2
        </h3>
        <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
          {/* Display the first 3 items */}
          {items.slice(0, 3).map((item, index) => (
            <StyledListItem key={index}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <CustomRadioButton type="radio" />
                <Link
                  to="#"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "17px",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </label>
            </StyledListItem>
          ))}

          {/* Display the rest of the items if showAll is true */}
          {showAll &&
            items.slice(3).map((item, index) => (
              <StyledListItem key={index + 3}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <CustomRadioButton type="radio" />
                  <Link
                    to="#"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "17px",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                </label>
              </StyledListItem>
            ))}

          {/* Button to toggle showing more items */}
          <Button
            sx={{ mt: 2, color: "black" }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "إخفاء" : "عرض المزيد"}
          </Button>
        </Stack>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"right"}>
        <h3 style={{ fontWeight: "bold", textAlign: "right" }}> المقاسات </h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column", // Stack items in a column
          flexWrap: "wrap",
          gap: "20px", // Optional gap between items
          // pl: "66px", // Add padding as required
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          S
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          M
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          L
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          XL
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          2XL
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          3XL
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          36
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          37
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          38
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          39
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          40
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "red",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "22px",
            backgroundColor: "#D9D9D9",
          }}
        >
          41
        </Box>
      </Box>

      {/* Other content (social media links) */}
      <Stack gap={2} justifyContent={"center"} alignItems={"center"} mt={5}>
        <Box
          component={"img"}
          src={faceIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        />
        <Box
          component={"img"}
          src={whatsIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        />
        <Box
          component={"img"}
          src={instaIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        />
        <Box
          component={"img"}
          src={phoneIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        />
      </Stack>
    </SideBar>
  );
};

export default ProductsSidebar;
