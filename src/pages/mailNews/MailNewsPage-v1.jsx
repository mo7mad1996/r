import React from "react";

import { NEWS } from "../../utils/news";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, Grid, Typography } from "@mui/material";

const NewsPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "النشرة البريدية" }} />
      <Typography
        sx={{
          fontSize: "27px",
          fontWeight: "700",
          lineHeight: "31px",
          color: "#292D32",
          mb: "37px",
          px: "167px",
        }}
      >
        الأربعاء , 6 ديسمبر ,5:35 pm
      </Typography>
      <Box
        sx={{
          mx: "20px",
          pt: "40px",
          px: "28px",
          mb: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={"61px"} sx={{ width: "100%" }}>
          {NEWS.map((newsItem) => (
            <Grid item key={newsItem.id} xs={12} sm={6} md={4} lg={3}>
              <Box
                component={"img"}
                src={newsItem.image}
                sx={{ width: "100%", height: "480px", cursor: "pointer" }}
                onClick={() => {}}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NewsPage;
