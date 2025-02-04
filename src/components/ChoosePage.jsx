import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ChoosePage = ({ page, handleChange, totalPages, admin = false }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "absolute",
        // top: admin ? "-180px" : "-388px",
        top: "0",
        left: "0",
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
        {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
      {t("from")} {totalPages} {t("pages")}
    </Box>
  );
};

export default ChoosePage;
