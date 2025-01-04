import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const StyledTypo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  fontWeight: "800",
  lineHeight: "45px",
  textWrap: "wrap",
}));
const SectionTitle = ({ sectionTitle }) => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ display: "flex", alignItems: "center", my: "3em" }}>
      <StyledTypo
        sx={{
          fontSize: { xs: "30px", md: "40px" },
        }}
      >
        {t(sectionTitle.main)}
      </StyledTypo>
      {sectionTitle.second && (
        <StyledTypo
          sx={{
            color: "colors.greyStrock",
            fontSize: { xs: "20px", md: "30px" },
          }}
        >
          ({t(sectionTitle.second)})
        </StyledTypo>
      )}
    </Stack>
  );
};

export default SectionTitle;
