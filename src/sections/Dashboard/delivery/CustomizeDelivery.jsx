import { Box, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import Search from "../../../sections/common/Search";
import ChoosePage from "../../../components/ChoosePage";
import usePaginate from "../../../hooks/usePaginate";
import UsePagination from "../../../hooks/UsePagination";
import { CheckRounded } from "@mui/icons-material";

const StyledCheckbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "45px",
  height: "45px",
  borderRadius: "5px",
  border: "1px solid",
  borderColor: theme.palette.colors.mainGreen,
  cursor: "pointer",
  "& svg": {
    color: theme.palette.colors.mainGreen,
    width: "55px",
    height: "55px",
  },
}));
const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "800",
  lineHeight: "45px",
  color: theme.palette.colors.mainBlack,
}));
const StyledMiniBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "76px",
  borderRadius: "5px",
  backgroundColor: "#F8F9FB",
}));
const CustomizeDelivery = ({ items, title }) => {
  const [selectedItems, setselectedItems] = useState(items);
  const [selectAll, setSelectedAll] = useState(false);
  const itemsPerPage = 14;
  const { page, setPage, displayedItems, totalPages } = usePaginate({
    itemsPerPage,
    items: selectedItems,
  });
  const handleChange = (event) => {
    setPage(event.target.value);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedAll(false);
      setselectedItems((prev) => {
        let prevArray = [...prev];
        let newArray = prevArray.map((item) => {
          return { ...item, selected: false };
        });
        return newArray;
      });
    } else {
      setSelectedAll(true);
      setselectedItems((prev) => {
        let prevArray = [...prev];
        let newArray = prevArray.map((item) => {
          return { ...item, selected: true };
        });
        return newArray;
      });
    }
  };
  const handleSelect = (selectedItem) => {
    setselectedItems((prev) => {
      let currentArray = [...prev];
      let clickedItem = currentArray.find((item) => item.id == selectedItem.id);
      let index = currentArray.findIndex((item) => item.id == selectedItem.id);
      let modifiedItem = { ...clickedItem, selected: !clickedItem["selected"] };
      currentArray[index] = modifiedItem;
      return [...currentArray];
    });
  };
  return (
    <Stack>
      <SectionTitle
        sectionTitle={{
          main: title,
        }}
      />
      <Stack sx={{ width: "1215px", mx: "auto" }}>
        {/* search and filter  */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Search />
          <ChoosePage
            page={page}
            handleChange={handleChange}
            totalPages={totalPages}
          />
        </Box>
        <StyledTypo
          sx={{
            mt: "49px",
            mb: "42px",
          }}
        >
          {t("Seller")} ({t("Store")})
        </StyledTypo>
        {/* choose all  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "37px",
            mb: "116px",
          }}
          onClick={handleSelectAll}
        >
          <StyledCheckbox>{selectAll && <CheckRounded />}</StyledCheckbox>
          <StyledTypo>تحديد الكل</StyledTypo>
        </Box>
        {/* item */}
        <Stack
          sx={{
            gap: "26px",
            "& > div:nth-of-type(even) > div:nth-of-type(2)": {
              backgroundColor: "white!important",
            },
          }}
        >
          {displayedItems.map((item) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => handleSelect(item)}
            >
              <StyledCheckbox>
                {item.selected && <CheckRounded />}
              </StyledCheckbox>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "1137px",
                  height: "88px",
                  borderRadius: "5px",
                  backgroundColor: "#48464633",
                  px: "3px",
                }}
              >
                <StyledTypo>{item.name}</StyledTypo>
                <Box
                  sx={{
                    display: "flex",
                    gap: "69px",
                  }}
                >
                  <StyledMiniBox
                    sx={{
                      width: "76px",
                    }}
                  >
                    <StyledTypo>{item.deliveryPrice}</StyledTypo>
                  </StyledMiniBox>
                  <StyledMiniBox
                    sx={{
                      width: "254px",
                    }}
                  >
                    <StyledTypo>{item.deliveryName}</StyledTypo>
                  </StyledMiniBox>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Box
        sx={{
          mx: "auto",
          mt: "63px",
          mb: "100px",
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

export default CustomizeDelivery;
