import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  Select,
  Checkbox,
} from "@mui/material";

export const FormItem = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "end",
  gap: "15px",
  // mx: "auto",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    width: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginBottom: ".4em",
  [theme.breakpoints.up("lg")]: {
    marginBottom: "30px",
  },
  fontWeight: "700",
  lineHeight: "31px",
  color: "#000000",
  [theme.breakpoints.up("lg")]: {
    width: "400px",
    textAlign: "start",
    top: "50%",
    transform: "translateY(-50%)",
    marginBottom: "0px",
  },
  [theme.breakpoints.between(1200, 1360)]: {
    fontSize: "23px",
  },
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  //   width: "200px",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "200px",
  //   },
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    // width: "635px",
  },
  [theme.breakpoints.up("md")]: {
    width: "800px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "550px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "635px",
  },
  //   height: "69px",
  //   border: "1px solid #000000",
  // border: "none",
  backgroundColor: "#DADADA",
  border: "1px solid #000000",
  borderRadius: "5px",
  outline: "none",
  "& input": {
    fontSize: "22px",
    // color: "red!important",
    color: `${theme.palette.colors.mainGreen} !important`,
    // height: "69px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&:hover fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
  },
  // "&.mui-focused input": {
  //   border: "0 !important",
  //   outline: "none",
  // },
  // "& input:focus *": {
  //   // outline: "none",
  //   // borderColor: "colors.mainGreen",
  // },
  // "&:hover *": {
  //   // border: "0",
  //   // borderColor: "colors.mainGreen",
  // },
}));
export const StyledSelect = styled(Select)(({ theme }) => ({
  //   width: "200px",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "200px",
  //   },
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    // width: "635px",
  },
  [theme.breakpoints.up("md")]: {
    width: "800px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "550px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "635px",
  },
  //   height: "69px",
  //   border: "1px solid #000000",
  // border: "none",
  backgroundColor: "#DADADA",
  border: "1px solid #000000",
  borderRadius: "5px",
  outline: "none",
  "& input": {
    fontSize: "22px",
    // color: "red!important",
    color: `${theme.palette.colors.mainGreen} !important`,
    // height: "69px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&:hover fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
  },
  // "&.mui-focused input": {
  //   border: "0 !important",
  //   outline: "none",
  // },
  // "& input:focus *": {
  //   // outline: "none",
  //   // borderColor: "colors.mainGreen",
  // },
  // "&:hover *": {
  //   // border: "0",
  //   // borderColor: "colors.mainGreen",
  // },
}));
export const ConfirmButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "350px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "416px",
  },
  height: "60px",
  backgroundColor: theme.palette.colors.website,
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "31px",
  color: theme.palette.colors.wi8,
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
  },
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.colors.mainGreen,
  "&.Mui-checked": {
    color: theme.palette.colors.mainGreen,
  },
}));
