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

const sellers = [
  {
    id: 0,
    name: "الألكترونيات",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 1,
    name: "الملابس",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: true,
  },
  {
    id: 2,
    name: "المخبوزات",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: true,
  },
  {
    id: 3,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 4,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 5,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 6,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 7,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: true,
  },
  {
    id: 8,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 9,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 10,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 11,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 12,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 13,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 14,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 15,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 16,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 17,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 18,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 19,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 20,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 21,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 22,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 23,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 24,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 25,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 26,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 27,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 28,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 29,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 30,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 31,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 32,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 33,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 34,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 35,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 36,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 37,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 38,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 39,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 40,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 41,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 42,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 43,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 44,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 45,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 46,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 47,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 48,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 49,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 50,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 51,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 52,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 53,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 54,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 55,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 56,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 57,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 58,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 59,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 60,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 61,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 62,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
  },
  {
    id: 63,
    name: "الأجهزة",
    deliveryName: "شحن چوملا",
    deliveryPrice: 50,
    selected: false,
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
const AddSectionPage = () => {
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
      <SectionTitle sectionTitle={{ main: "اضف قسم" }} />
      <Box
        sx={{
          position: "relative",
          margin: "0 19px",
          display: "flex",
          alignItems: "center",
          // gap: "236px",
          mt: "-50px",
          mb: "102px",
        }}
      >
        <Search placeholder="البحث في البائعين بالأسم او ال SN" />
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
          {t('from')} {totalPages} {t("pages")}
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
        أختر قسم{" "}
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
              {!isAds && <Button>عرض</Button>}
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

export default AddSectionPage;
