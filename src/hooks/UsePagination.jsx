import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: "23px",
});

const ListItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  "&:first-of-type , &:last-of-type": {
    "& button": {
      fontSize: "30px",
      fontWeight: "400",
      lineHeight: "33.48px",
    },
  },

  "&:not(:first-of-type):not(:last-of-type)": {
    border: "1px solid ",
    borderColor: theme.palette.colors.website,
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
    },
    [theme.breakpoints.up("md")]: {
      width: "55px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "62px",
      height: "62px",
    },
    "&,& button": {
      fontFamily: "Poppins",
      fontSize: "30px",
      lineHeight: "45px",
      fontWeight: "500",
      color: theme.palette.colors.mainBlack,
    },
    "&:hover": {
      backgroundColor: theme.palette.colors.website,
      "& button": {
        color: theme.palette.colors.wi8,
      },
    },
  },
  "& button": {
    // minWidth: "100%",
  },
  "& button.active:hover": {
    backgroundColor: "none!important",
  },
  "&:has( > button.active)": {
    // borderRight: "1px solid",
    // borderLeft: "1px solid",
    backgroundColor: theme.palette.colors.website,
    "& button": {
      color: `${theme.palette.colors.wi8}!important`,
    },
  },
}));
const StyledButton = styled(Button)(({ theme, active }) => ({
  "&:hover": {
    backgroundColor: "none",
  },
  color: active
    ? theme.palette.colors.mainBlack
    : theme.palette.colors.greyLabels,
}));

export default function UsePagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    onChange: (event, value) => {
      setCurrentPage(value);
    },
  });
  console.log("current", currentPage);
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
                active={currentPage == 1 ? false : true}
                {...item}
              >
                {/* <ChevronRight /> */}
                {!matches && "السابقة"}
              </StyledButton>
            );
          } else if (type === "next") {
            children = (
              <StyledButton
                disableRipple
                disableElevation
                type="button"
                active={currentPage == totalPages ? false : true}
                sx={{
                  // fontWeight: selected ? "bold!important" : undefined,
                  color: selected ? "#000000!important" : undefined,
                }}
                {...item}
              >
                {!matches && "التالي"}
                {/* <ChevronLeft /> */}
              </StyledButton>
            );
          } else if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "....";
          } else if (type === "page") {
            children = (
              <StyledButton
                disableRipple
                disableElevation
                type="button"
                className={selected ? "active" : undefined}
                sx={
                  {
                    // fontWeight: selected ? "bold!important" : undefined,
                  }
                }
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
