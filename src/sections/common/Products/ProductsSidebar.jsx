import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { ChevronLeft, ExpandMore } from "@mui/icons-material";

import FilterSidebar from "./FilterSidebar";

import faceIcon from "../../../assets/store/face.png";
import instaIcon from "../../../assets/store/insta.png";
import whatsIcon from "../../../assets/store/whats.png";
import phoneIcon from "../../../assets/store/phone.png";

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
const StyledList = styled(List)(({ theme }) => ({
  // listStyle: "none",
  textAlign: "center ",

  "&:first-of-type li": {
    marginBottom: "30px",
  },
  "&:nth-of-type(2)": {
    // borderRight: "1px solid",
    // borderBottom: "1px solid",
  },
  "&:nth-of-type(2) li, &:nth-of-type(3) li": {
    padding: 0,
  },
  "& a": {
    textDecoration: "none",
    fontWeight: "800",
    color: theme.palette.colors.mainBlack,
    margin: "auto",
  },
  "&:first-of-type a, &:last-of-type a": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "20px",
    },
    fontSize: "22px",
    lineHeight: "25px",
    letterSpacing: "0em",
  },
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
}));
const StyledListItem = styled(ListItem)({
  textAlign: "center",

  // "& a": {

  //   //     font-family: Almarai;
  //   // font-size: 18px;
  //   // font-weight: 800;
  //   // line-height: 20px;
  //   // letter-spacing: 0em;
  //   // text-align: center;
  //   // font-family: Almarai;
  //   // font-size: 22px;
  //   // font-weight: 800;
  //   // line-height: 25px;
  //   // letter-spacing: 0em;
  //   // textAlign: center,
  // },
});
const CustomLink = styled(Link)({
  display: "flex",
  alignItems: "center",
});
const ProductsSidebar = () => {
  const [collapseSections, setCollapseSections] = useState(false);
  const [collapseCommercial, setCollapseCommercial] = useState(false);

  return (
    <SideBar>
      <FilterSidebar />
      <StyledList>
        <StyledListItem>
          <Link to="#">الأعلى سعراً</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="#">الأقل سعراً</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="#">أحدث المنتجات</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="#">أفضل العروض</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="#">الأكثر مبيعاً</Link>
        </StyledListItem>
      </StyledList>
      <StyledList>
        <StyledListItem>
          <CustomLink onClick={() => setCollapseSections((prev) => !prev)}>
            الأقسام
            {collapseSections ? <ExpandMore /> : <ChevronLeft />}
          </CustomLink>
        </StyledListItem>
        {!collapseSections && (
          <>
            <StyledListItem>
              <Link to="#">ألكترونيات</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="#">ملابس</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="#">مخبوزات</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="#">أساسات</Link>
            </StyledListItem>
          </>
        )}
      </StyledList>
      <StyledList>
        <StyledListItem>
          <CustomLink onClick={() => setCollapseCommercial((prev) => !prev)}>
            العلامة التجارية
            {collapseCommercial ? <ExpandMore /> : <ChevronLeft />}
          </CustomLink>
        </StyledListItem>
        {!collapseCommercial && (
          <>
            <StyledListItem>
              <Link to="#">سامسونج</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="#">نوكيا</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="#">هواوى</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="#">بلاك بيرى</Link>
            </StyledListItem>
          </>
        )}
      </StyledList>

      <StyledList>
        <StyledListItem>
          <Link to="#">أفضل عروض اليوم</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="#">منتجات مؤهلة للشحن المجانى</Link>
        </StyledListItem>
      </StyledList>
      <Stack gap={2} justifyContent={"center"} alignItems={"center"} mt={5}>
        <Box
          component={"img"}
          src={faceIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        ></Box>
        <Box
          component={"img"}
          src={whatsIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        ></Box>
        <Box
          component={"img"}
          src={instaIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        ></Box>
        <Box
          component={"img"}
          src={phoneIcon}
          sx={{ cursor: "pointer", width: "60px", height: "60px" }}
        ></Box>
      </Stack>
    </SideBar>
  );
};

export default ProductsSidebar;
