import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import usePaginate from "../../../hooks/usePaginate";
import UsePagination from "../../../hooks/UsePagination";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Search from "../../../sections/common/Search";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const sellers = [
  {
    id: 0,
    name: "صيرفي",
  },
  {
    id: 1,
    name: "رونزا بوتيك",
  },
  {
    id: 2,
    name: "دريم 2000",
  },
  {
    id: 3,
    name: "زهرة ستور",
  },
  {
    id: 4,
    name: "صيرفي",
  },
  {
    id: 5,
    name: "رونزا بوتيك",
  },
  {
    id: 6,
    name: "دريم 2000",
  },
  {
    id: 7,
    name: "زهرة ستور",
  },
  {
    id: 8,
    name: "صيرفي",
  },
  {
    id: 9,
    name: "رونزا بوتيك",
  },
  {
    id: 10,
    name: "دريم 2000",
  },
  {
    id: 11,
    name: "زهرة ستور",
  },
  {
    id: 12,
    name: "صيرفي",
  },
  {
    id: 13,
    name: "صيرفي",
  },
  {
    id: 14,
    name: "رونزا بوتيك",
  },
  {
    id: 15,
    name: "دريم 2000",
  },
  {
    id: 16,
    name: "زهرة ستور",
  },
  {
    id: 17,
    name: "صيرفي",
  },
  {
    id: 18,
    name: "رونزا بوتيك",
  },
  {
    id: 19,
    name: "دريم 2000",
  },
  {
    id: 20,
    name: "زهرة ستور",
  },
  {
    id: 21,
    name: "صيرفي",
  },
  {
    id: 22,
    name: "رونزا بوتيك",
  },
  {
    id: 23,
    name: "دريم 2000",
  },
  {
    id: 24,
    name: "زهرة ستور",
  },
  {
    id: 25,
    name: "صيرفي",
  },
  {
    id: 26,
    name: "صيرفي",
  },
  {
    id: 27,
    name: "رونزا بوتيك",
  },
  {
    id: 28,
    name: "دريم 2000",
  },
  {
    id: 29,
    name: "زهرة ستور",
  },
  {
    id: 30,
    name: "صيرفي",
  },
  {
    id: 31,
    name: "رونزا بوتيك",
  },
  {
    id: 32,
    name: "دريم 2000",
  },
  {
    id: 33,
    name: "زهرة ستور",
  },
  {
    id: 34,
    name: "صيرفي",
  },
  {
    id: 35,
    name: "رونزا بوتيك",
  },
  {
    id: 36,
    name: "دريم 2000",
  },
  {
    id: 37,
    name: "زهرة ستور",
  },
  {
    id: 38,
    name: "صيرفي",
  },
];
const StyledBox = styled(Box)(({ theme, isAds }) => ({
  width: "100%",
  height: "88px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#48464633",
  borderRadius: "5px",
  paddingRight: "119px",
  paddingLeft: "26px",
  padding: isAds && "0 119px",
  "& p, & button": {
    fontSize: "40px",
    fontWeight: "800",
    lineHeight: "45px",
    color: theme.palette.colors.mainBlack,
  },
  "& div": {
    display: "flex",
    gap: "91px",
  },
  "& button": {
    width: "254px",
    height: "67px",
    backgroundColor: "#F8F9FB",
    borderRadius: "5px",
    color: theme.palette.colors.mainBlack,
    border: `3px solid ${theme.palette.colors.mainGreen}`,
  },
}));
const AddNewSellerPage = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const isAds = pathname.includes("ads");
  const itemsPerPage = 13;
  const { page, setPage, displayedItems, totalPages } = usePaginate({
    itemsPerPage,
    items: sellers,
  });
  const handleChange = (event) => {
    setPage(event.target.value);
  };
  return (
    <Stack>
      <SectionTitle
        sectionTitle={{ main: isAds ? "اضف بائع" : "إضافة بائع" }}
      />
      <Box
        sx={{
          position: "relative",
          margin: "0 19px",
          display: "flex",
          alignItems: "center",
          // gap: "236px",
          mb: "102px",
        }}
      >
        <Search
          placeholder={
            isAds ? "البحث في البائعين" : "البحث في البائعين بالأسم او ال SN"
          }
        />
        <Box
          sx={{
            position: "absolute",
            // top: "-120px",
            left: "120px",
            fontSize: "20px",
            lineHeight: "22px",
            color: "colors.mainBlack",
          }}
        >
          {t("Pages")}
          <Select
            value={page}
            onChange={handleChange}
            sx={{
              mx: "12px",
              width: "96px",
              height: "54px",
              borderRadius: "5px",
              border: "1px solid",
              borderColor: "colors.website",
              textAlign: "center",
              "&:hover": {
                border: "1px solid",
                borderColor: "colors.website",
                outline: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "0",
                // borderColor: "colors.website",
              },
            }}
          >
            {Array(totalPages)
              .fill("")
              .map((item, index) => (
                <MenuItem value={index + 1}>{index + 1}</MenuItem>
              ))}
          </Select>
          {t("from")}
          {totalPages}
          {t("Pages")}
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "800",
          lineHeight: "45px",
          mb: "150px",
          mx: "69px",
        }}
      >
        {isAds ? "أختر بائع" : `${t("Seller Name")} (${t("store")})`}
      </Typography>
      <Stack
        sx={{
          width: "1137px",
          mx: "auto",
          gap: "25px",
          "& > div:nth-of-type(even)": {
            backgroundColor: "white",
          },
        }}
      >
        {displayedItems.map((seller) => (
          <StyledBox key={seller.id} isAds={isAds}>
            <Typography>{seller.name}</Typography>
            <Box>
              {!isAds && <Button>{t("Offer")}</Button>}
              <Button>{isAds ? "أختر" : "إختيار"}</Button>
            </Box>
          </StyledBox>
        ))}
      </Stack>
      <Box
        sx={{
          mt: "126px",
          mb: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UsePagination
          setPage={setPage}
          totalPages={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </Box>
    </Stack>
  );
};

export default AddNewSellerPage;
