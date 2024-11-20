import { Stack, Typography, styled } from "@mui/material";

export const StyledStack = styled(Stack)(({ theme }) => ({
  justifyContent: "space-around",
  width: "753px",
  height: "138px",
  border: "1px solid",
  borderColor: theme.palette.colors.website,
  borderRadius: "5px",
  backgroundColor: "#F6F6F6",
  //   py: "32px",
  //   px: "52px",
  padding: "32px 52px",
  "& p": {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "31px",
    color: "#292D32",
    // mb: "22px",
  },
}));

export const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "26.87px",
  color: theme.palette.colors.website,
  marginBottom: "22px",
  textAlign: "center",
}));
