import { Button, styled } from "@mui/material";

export const Btn = styled(Button)(({ theme }) => ({
  //   fontSize: "28px",
  fontWeight: "700",
  lineHeight: "31px",
  minWidth: "50px",
  [theme.breakpoints.down("lg")]: {
    width: "300px",
  },

  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    fontSize: "20px",
  },
  width: "416px",
  fontSize: "28px",

  height: "60px",
  color: theme.palette.colors.wi8,
}));
