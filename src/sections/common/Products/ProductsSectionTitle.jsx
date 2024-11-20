import { Stack, Typography, styled } from "@mui/material";
import React from "react";

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
  return (
    <Stack
      display={"flex"}
      alignItems={"center"}
      sx={{ mt: "56px", mb: "133px" }}
    >
      <StyledTypo>{sectionTitle.main}</StyledTypo>
      {sectionTitle.second && (
        <StyledTypo
          sx={{
            color: "colors.greyStrock",
          }}
        >
          ({sectionTitle.second})
        </StyledTypo>
      )}
    </Stack>
  );
};

export default SectionTitle;
