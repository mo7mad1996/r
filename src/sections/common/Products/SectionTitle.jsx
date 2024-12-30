import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const StyledTypo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // fontSize: "35px",
    textAlign: "center",
  },
  fontSize: "40px",
  fontWeight: "800",
  lineHeight: "45px",
  textWrap: "wrap",
}));
const SectionTitle = ({ sectionTitle }) => {
  const { t } = useTranslation();

  return (
    <Stack
      display={"flex"}
      alignItems={"center"}
      sx={{ mt: "56px", mb: "133px", minHeight: "90px" }}
    >
      <StyledTypo>{t(sectionTitle.main)}</StyledTypo>
      {sectionTitle.second && (
        <StyledTypo
          sx={{
            color: "colors.greyStrock",
          }}
        >
          ({t(sectionTitle.second)})
        </StyledTypo>
      )}
    </Stack>
  );
};

export default SectionTitle;
