import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  border: "1px solid #000000",
  // width: "500px",
});

const ListItem = styled("li")(({ theme }) => ({
  display: "flex",
  height: "72px",
  alignItems: "center",
  userSelect: "none",
  // "&:not(:first-of-type, :last-of-type)": {
  //   // [theme.breakpoints.down("sm")]: {
  //   //   width: "40px",
  //   // },
  //   [theme.breakpoints.down("lg")]: {
  //     width: "30px",
  //   },
  // },
  // "&:first-of-type, :last-of-type": {
  //   [theme.breakpoints.down("sm")]: {
  //     width: "40px",
  //   },
  //   [theme.breakpoints.down("lg")]: {
  //     width: "50px",
  //   },
  // },
  "&:not(:first-of-type, :last-of-type)": {
    // width: "fit-content",
    // [theme.breakpoints.down("sm")]: {
    //   width: "fit-content",
    // },
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
    },
    [theme.breakpoints.up("md")]: {
      width: "55px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "85px",
    },
  },
  "&:first-of-type, &:last-of-type": {},
  "& button": {
    // [theme.breakpoints.down("lg")]: {
    minWidth: "100%",
    // },
    // width: "100%",
  },
  "& ,& button": {
    fontFamily: "Poppins",
    fontSize: "30px",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "20px",
    // },
    // [theme.breakpoints.up("md")]: {
    //   fontSize: "30px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "25px!important",
    // },
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px!important",
      lineHeight: "40px",
    },
    fontWeight: "500",
    lineHeight: "45px",
    color: theme.palette.colors.mainBlack,
  },

  "& button:hover": {
    backgroundColor: "none!important",
  },
  "&:first-of-type": {
    // px: "16px",
    borderLeft: "1px solid",
    button: {
      fontFamily: "Almarai",
      fontWeight: "400",
      lineHeight: "33.48px",
      // paddingLeft: "25px",
    },
  },
  "&:nth-of-type(2)": {
    borderRight: "none!important",
  },
  "&:nth-last-of-type(2)": {
    borderLeft: "none!important",
  },
  "&:last-of-type": {
    borderRight: "1px solid",
    button: {
      fontFamily: "Almarai",
      fontWeight: "400",
      lineHeight: "33.48px",
      // paddingRight: "25px",
    },
  },
  "& button.active:hover": {
    backgroundColor: "none!important",
  },
  "&:has( > button.active)": {
    borderRight: "1px solid",
    borderLeft: "1px solid",
  },
}));
const StyledButton = styled(Button)({
  "&:hover": {
    backgroundColor: "none",
  },
});

export default function UsePagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const { t } = useTranslation();

  const { items } = usePagination({
    count: totalPages,
    // page: currentPage,
    onChange: (event, value) => {
      setCurrentPage(value);
    },
  });
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          if (type === "previous") {
            children = (
              <StyledButton
                disableRipple
                disableElevation
                type="button"
                sx={{
                  fontWeight: selected ? "bold!important" : undefined,
                }}
                {...item}
              >
                <ChevronRight />
                {!matches && t("Previous")}
              </StyledButton>
            );
          } else if (type === "next") {
            children = (
              <StyledButton
                disableRipple
                disableElevation
                type="button"
                sx={{
                  fontWeight: selected ? "bold!important" : undefined,
                }}
                {...item}
              >
                {!matches && t("Next")}
                <ChevronLeft />
              </StyledButton>
            );
          } else if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = ".......";
          } else if (type === "page") {
            children = (
              <StyledButton
                disableRipple
                disableElevation
                type="button"
                className={selected ? "active" : undefined}
                sx={{
                  fontWeight: selected ? "bold!important" : undefined,
                }}
                {...item}
              >
                {page}
              </StyledButton>
            );
          } else {
            children = (
              <StyledButton
                disableRipple
                disableElevation
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {type}
              </StyledButton>
            );
          }

          return <ListItem key={index}>{children}</ListItem>;
        })}
      </List>
    </nav>
  );
}
