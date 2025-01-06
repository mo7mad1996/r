import { Box, Slider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const minValue = 0;
const maxValue = 100000;

const FilterSidebar = () => {
  const [value, setValue] = useState([minValue, maxValue]);
  const { t } = useTranslation();

  const range = maxValue - minValue;
  let step;

  if (range >= 100000) {
    step = Math.ceil(range / 10000);
  } else if (range >= 10000) {
    step = Math.ceil(range / 100);
  } else if (range >= 1000) {
    step = Math.ceil(range / 100);
  } else {
    step = 1;
  }
  const handleChange = (event, newValue) => {
    if (range >= 100000) {
      if (newValue[1] - newValue[0] < 1000) return;
    } else if (range >= 10000) {
      if (newValue[1] - newValue[0] < 100) return;
    } else if (range >= 1000) {
      if (newValue[1] - newValue[0] < 10) return;
    } else {
      if (newValue[1] - newValue[0] < 1) return;
    }
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        my: "1em",
        justifyContent: "space-between",
        py: "1em",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          justifyContent: "space-between",
          alignSelf: "stretch",
          position: "relative",

          "& p": {
            fontFamily: "Almarai",
            fontSize: { xs: "12px", sm: "16px" },
            fontWeight: "800",
            lineHeight: "18px",
            textAlign: "center",
            color: "colors.mainBlack",
          },
        }}
      >
        <Box>
          <Typography>{value[1]}</Typography>
          <Typography>{t("Select the Highest Value")}</Typography>
        </Box>
        <Box>
          <Typography>{value[0]}</Typography>
          <Typography>{t("Select the Lowest Value")}</Typography>
        </Box>
      </Stack>
      <Stack sx={{ alignItems: "center" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          min={0}
          max={maxValue}
          value={value}
          onChange={handleChange}
          step={step}
          orientation="vertical"
          valueLabelDisplay="off"
          size="medium"
          sx={{
            color: "colors.mainGreen",
            // height: "290px",
            height: "15em",
            width: "10px",
            ".MuiSlider-thumb": {
              color: "#D9D9D9",
              width: "1.4em",
              height: "1.4em",
              boxShadow: "none",
              "&:focus, &:hover, &.Mui-active": {
                boxShadow: "none",
              },
              "&:before": {
                boxShadow: "none",
              },
              "&:after": {
                boxShadow: "none",
              },
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default FilterSidebar;
