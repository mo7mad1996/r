import React from "react";
import { Box, Button } from "@mui/material";

import filterImg from "../assets/filter.png";
import { useTranslation } from "react-i18next";

const FilterBtn = ({ handleOpen }) => {
  const { t } = useTranslation();

  return (
    <Button
      sx={{
        width: "140px",
        height: "54px",
        fontSize: "20px",
        lineHeight: "22px",
        color: "colors.mainBlack",
        borderRadius: "5px",
        border: "1px solid ",
        borderColor: "colors.mainBlack",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
      }}
      variant="outlined"
      startIcon={
        <Box
          component="img"
          src={filterImg}
          sx={{
            width: "36px",
            height: "33px",
          }}
        />
      }
      onClick={handleOpen}
    >
      {t("Filter")}
    </Button>
  );
};

export default FilterBtn;
