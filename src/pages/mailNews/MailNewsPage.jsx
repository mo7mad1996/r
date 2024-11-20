import React from "react";

import { NEWS } from "../../utils/news";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import Search from "../../sections/common/Search";
import FilterBtn from "../../components/FilterBtn";
import ModalComponent from "../../components/ModalComponent";
import DateFilter from "../../components/DateFilter";
import useShowModal from "../../hooks/useShowModal";
import { useNavigate } from "react-router-dom";

const ControlBtn = styled(Button)(({ theme }) => ({
  width: "180px",
  height: "60px",
  borderRadius: "5px",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "31px",
  border: "3px solid",
  color: theme.palette.colors.mainBlack,
  transition: "0.1s",
  "&:hover": {
    border: "0",
  },
}));
const NewsPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();
  const navigate = useNavigate();
  return (
    <>
      <SectionTitle sectionTitle={{ main: "النشرة البريدية" }} />
      <Box
        sx={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
          px: "20px",
          position: "relative",
          top: "-84px",
        }}
      >
        <Search />
        {/* <FilterBtn handleOpen={handleOpen} /> */}
      </Box>
      <Stack
        sx={{
          width: "fit-content",
          position: "relative",
          alignItems: "center",
          // gap: "123px",
          // mb: "100px",
          // mt: "223px",
          mt: "50px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-194px",
            left: "0px",
          }}
        >
          <FilterBtn handleOpen={handleOpen} />
        </Box>
        <Stack
          sx={{
            gap: "44px",
            // alignItems: "center",
          }}
        >
          {Array(3)
            .fill("")
            .map((item) => (
              <Stack
                sx={{
                  backgroundColor: "#E8E5E5",
                  width: "870px",
                  height: "421px",
                  borderRadius: "15px",
                  border: "3px solid",
                  borderColor: "color.mainGreen",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "800",
                    lineHeight: "45px",
                    textAlign: "center",
                    color: "colors.mainBlack",
                    my: "44px",
                  }}
                >
                  نشرة بريدية
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    textAlign: "center",
                    color: "colors.website",
                  }}
                >
                  الخميس , 10:30 م, 31 اغسطس 2023
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "44px",
                    justifyContent: "center",
                    mt: "81px",
                  }}
                >
                  <ControlBtn
                    variant="outlined"
                    sx={{
                      borderColor: "colors.mainGreen",
                      "&:hover": {
                        backgroundColor: "colors.mainGreen",
                        color: "colors.wi8",
                      },
                    }}
                    onClick={() => navigate("1")}
                  >
                    عرض
                  </ControlBtn>
                  <ControlBtn
                    variant="outlined"
                    sx={{
                      borderColor: "colors.mainRed",
                      color: "colors.mainRed",
                      "&:hover": {
                        backgroundColor: "colors.mainRed",
                        color: "colors.wi8",
                      },
                    }}
                  >
                    حذف{" "}
                  </ControlBtn>
                </Box>
              </Stack>
            ))}
        </Stack>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default NewsPage;
