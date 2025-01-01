import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import SectionTitle from "~/sections/common/Products/SectionTitle";
import { sections } from "~/utils/sections";
import UsePagination from "~/hooks/UsePagination";
import usePaginate from "~/hooks/usePaginate";
import Search from "~/sections/common/Search";
import { Context } from "~/components/Context/Context";
import { useTranslation } from "react-i18next";

const ShowSections = () => {
  const { t } = useTranslation();
  const { allCategories } = useContext(Context);
  let [categories, setCategories] = useState([]);

  async function getAllCategories() {
    try {
      let res = await allCategories();
      setCategories(res?.data?.categories);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);
  const navigate = useNavigate();
  const itemsPerPage = 20;

  const {
    page,
    setPage,
    displayedItems: displayedSections,
    totalPages,
  } = usePaginate({
    itemsPerPage,
    items: sections,
  });
  const handleChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <Container>
      <SectionTitle sectionTitle={{ main: "All Sections" }} />
      {/* <Box sx={{ py: "23px", px: "45px", mx: "30px" }}> */}
      {/* search  */}
      <Box
        sx={{
          position: "relative",
          //   margin: "0 19px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "236px",
          mb: "97px",
        }}
      >
        <Search placeholder={t("Search in Categories")} />
        <Box
          sx={{
            // position: "absolute",
            // top: "-120px",
            // left: "120px",
            mx: "auto",
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
                <MenuItem key={index} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
          </Select>
          {t("from")} {totalPages} {t("pages")}
        </Box>
      </Box>
      <Box>
        <Grid
          container
          // spacing={"42px"}
          spacing={["20px", "25px", "28px", "35px", "45px"]}
        >
          {categories?.map((section) => (
            <Grid
              item
              key={section.id}
              xs={10}
              sm={6}
              md={4}
              lg={3}
              sx={{
                margin: { xs: "auto", sm: "0" },
              }}
            >
              <Box sx={{ py: "5px", px: "6px" }}>
                <Stack
                  sx={{
                    backgroundColor: "#D9D9D9",
                    // width: "300px",
                    // height: "300px",
                    // height: "fit-content",
                    alignItems: "center",
                    //   justifyContent: "center",
                    pt: "40px",
                    pb: "15px",
                    px: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/sections/" + section.id)}
                >
                  <Box
                    sx={{
                      mb: "21px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={section.photo}
                      alt={section.name}
                      sx={{
                        width: "100%",
                        height: "179px",
                        // mb: "21px",
                      }}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: "800",
                      lineHeight: "45px",
                    }}
                  >
                    {section.name}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* <UsePagination /> */}
      </Box>
      {/* </Box> */}
      <Box
        sx={{
          mt: "111px",
          mb: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UsePagination
          setPage={setPage}
          totalPages={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </Box>
    </Container>
  );
};

export default ShowSections;
