import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Check, ExpandMore } from "@mui/icons-material";

const governments = [
  { government: "القاهرة", id: 1 },
  { government: "الأسكندرية", id: 2 },
  { government: "الجيزة", id: 3 },
  { government: "أسيوط", id: 4 },
];
const ChooseCity = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedGovernments, setSelectedGovernments] = useState([
    { id: 0, selected: false },
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
    { id: 4, selected: false },
  ]);
  const selectGovernmentHandler = (i) =>
    setSelectedGovernments((prev) => {
      const updatedArray = prev.map((item, index) => {
        if (item.id === i) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      return updatedArray;
    });
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "800",
          lineHeight: "27px",
          color: "colors.darkIcons",
          mb: "33px",
        }}
      >
        اضافة محافظات
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "287px",
          height: "49px",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "colors.mainBlack",
          color: "colors.mainBlack",
          fontSize: "20px",
          fontWeight: "800",
          lineHeight: "22px",
          pr: "22px",
        }}
      >
        اختيار محافظات محددة
        <Box
          sx={{
            width: "49px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid",
          }}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? (
            <ExpandMore
              sx={{
                width: "30px",
                cursor: "pointer",
                transform: "rotate(-180deg)",
              }}
            />
          ) : (
            <ExpandMore
              sx={{
                width: "30px",
                cursor: "pointer",
              }}
            />
          )}
        </Box>
      </Box>
      {openMenu && (
        <Stack
          sx={{
            width: "287px",
            gap: "11px",
            // height: "375px",
            backgroundColor: "colors.liteGrey",
            py: "21px",
            px: "11px",
            transition: "0.3s",
            // border: "1px solid",
            // borderColor: "colors.darkIcons",
          }}
        >
          <Box
            sx={{
              width: "265px",
              height: "43px",
              border: "1px solid",
              borderColor: "colors.darkIcons",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                lineHeight: "25px",
              }}
            >
              {" "}
              محافظات مصر كلها
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "29px",
                borderRadius: "5px",
                border: "1px solid",
                borderColor: "colors.mainGreen",
                cursor: "pointer",
              }}
              onClick={() => selectGovernmentHandler(0)}
            >
              {selectedGovernments[0].selected && (
                <Check sx={{ color: "colors.mainGreen" }} />
              )}
            </Box>
          </Box>
          {governments.map((item, index) => (
            <Box
              sx={{
                width: "265px",
                height: "43px",
                border: "1px solid",
                borderColor: "colors.darkIcons",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "25px",
                }}
              >
                {" "}
                {item.government}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "29px",
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "colors.mainGreen",
                  cursor: "pointer",
                }}
                onClick={() => selectGovernmentHandler(index + 1)}
              >
                {selectedGovernments[index + 1].selected && (
                  <Check sx={{ color: "colors.mainGreen" }} />
                )}
              </Box>
            </Box>
          ))}
        </Stack>
      )}
      <Button
        sx={{
          width: "243px",
          height: "57px",
          borderRadius: "12px",
          mt: "62px",
          fontSize: "25px",
          fontWeight: "800",
          lineHeight: "28px",
          "&, &:hover": {
            backgroundColor: "colors.mainGreen",
            color: "colors.wi8",
          },
        }}
      >
        حفظ
      </Button>
    </Stack>
  );
};

export default ChooseCity;
