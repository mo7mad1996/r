import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// components
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Box, Stack, ListItem, styled, Button } from "@mui/material";
import FilterSidebar from "./FilterSidebar";

// assets
import faceIcon from "~/assets/store/face.png";
import instaIcon from "~/assets/store/insta.png";
import whatsIcon from "~/assets/store/whats.png";
import phoneIcon from "~/assets/store/phone.png";

// icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// styled
const SideBar = styled(Stack)(({ theme }) => ({
  width: "248px",
  alignItems: "center",
  position: "sticky",
  top: "50px",
  marginBottom: "30px",
  height: "100%",
  overflowX: "hidden",
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

// component
const ProductsSidebar = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const items = Array(13).fill("Filter");

  return (
    <ToggleOpen>
      <SideBar>
        <FilterSidebar />

        {/* Existing filters */}
        {[
          "Highest Rated",
          "Highest Price",
          "Newest Price",
          "Best Offers",
          "Best Sellers",
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
                {t(label)}
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
            {items.map((item, index) => (
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
                    {t(item)} {index}
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
                      {t(item)}
                      {index}
                    </Link>
                  </label>
                </StyledListItem>
              ))}

            {/* Button to toggle showing more items */}
            <Button
              sx={{ mt: 2, color: "black" }}
              onClick={() => setShowAll(!showAll)}
            >
              {t(showAll ? "Show Less" : "Show More")}
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
                    {t(item)} {index}
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
                      {item} {index}
                    </Link>
                  </label>
                </StyledListItem>
              ))}

            {/* Button to toggle showing more items */}
            <Button
              sx={{ mt: 2, color: "black" }}
              onClick={() => setShowAll(!showAll)}
            >
              {t(showAll ? "Show Less" : "Show More")}
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
                    {item} {index}
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
                      {item} {index}
                    </Link>
                  </label>
                </StyledListItem>
              ))}

            {/* Button to toggle showing more items */}
            <Button
              sx={{ mt: 2, color: "black" }}
              onClick={() => setShowAll(!showAll)}
            >
              {t(showAll ? "Show Less" : "Show More")}
            </Button>
          </Stack>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"right"}>
          <h3 style={{ fontWeight: "bold", textAlign: "right" }}>
            {t("Sizes")}
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
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
    </ToggleOpen>
  );
};

export default ProductsSidebar;

function ToggleOpen({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function check() {
      // md screen
      if (innerWidth < 768) setOpen(false);
      else setOpen(true);
    }

    check();
    addEventListener("resize", check);
    return () => removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        transform: `translateX(${open ? 0 : "100%"})`,
      }}
      className="flex fixed md:static top-0 right-0 h-full md:h-[90vh] bg-white z-10 md:z-0 transition-all md:translate-x-0"
    >
      <Box
        className="bg-white absolute grid md:hidden"
        onClick={() => setOpen((v) => !v)}
        sx={{
          top: "50vh",
          pointerEvents: "auto",
          left: 0,
          placeContent: "center",
          padding: "1em",
          border: "1px solid #ccc",
          transform: "translate(-100%, -50%) translateX(1px)",
          cursor: "pointer",
          borderRight: "none",
        }}
      >
        {open ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </Box>
      <PerfectScrollbar
        options={{ suppressScrollX: false }}
        className="visible-x"
      >
        <div>{children}</div>
      </PerfectScrollbar>
    </div>
  );
}
