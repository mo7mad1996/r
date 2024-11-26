import React, { useState,useEffect, useContext } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";

import sellerImage from "../../assets/seller.png";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Reviews from "../../components/Reviews";
import MainButton from "../../components/MainButton";
import { useNavigate } from "react-router-dom";

import { sellers } from "../../utils/sellers";
import UsePagination from "../../hooks/UsePagination";
import usePaginate from "../../hooks/usePaginate";
import { Context } from "../../components/Context/Context";
const SellersPage = () => {
  const navigate = useNavigate();
  const {allVendors} = useContext(Context)
  let [vendors,setVendors]=useState([])
  const itemsPerPage = 20;

  const {
    page,
    setPage,
    displayedItems: displayedSellers,
    totalPages,
  } = usePaginate({
    itemsPerPage,
    items: sellers,
  });




  
  async function getAllVendors(){
    let res = await allVendors()
    setVendors(res?.data?.vendor)
    console.log(res?.data?.vendor)
  }




  useEffect(()=>{
    getAllVendors()
  },[])

  return (
    <Box>
      {/* بائعين چوملا (المتاجر) */}
      <SectionTitle
     
        sectionTitle={{ main: "بائعين چوملا", second: "المتاجر" }}
      />
      <Stack>
        <Box
          sx={{ mx: { xs: "15px", sm: "95px" } }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid
            container
            spacing={["30px", "61px"]}
            // rowSpacing={"30px"}
            // spacing={"10px"}
            columns={[12, 12, 12, 12, 15]}
          >
            {vendors.map((seller) => (
              <Grid

              id={seller.id}
                item
                xs={8}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                sx={{
                  mx: { xs: "auto", sm: "0" },
                }}
              >
                <Stack
                  sx={{
                    alignItems: { xs: "center", sm: "start" },
                  }}
                >
                  <Box
                    component={"img"}
                    src={seller.ID_card_photo}
                    sx={{ maxWidth: "221.06px", height: "181.84px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: " 20px",
                      fontWeight: "700",
                      lineHeight: "22px",
                      textAlign: "right",
                      color: "colors.mainBlack",
                      mt: "16px",
                      mb: "26px",
                    }}
                  >
                    {seller.vendor_name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      // width: "200px",
                      // justifyContent: "space-between",
                      // mt: "26px",
                      // mb: "25px",
                      // mr: "26px",
                    }}
                  >
                    <Reviews />
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "colors.greyStrock",
                        // textAlign: "right",
                      }}
                    >
                      {/* {seller.reviewsNum} */}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      my: "15px",
                      // width: "200px",
                      // justifyContent: "space-between",
                      // mr: "26px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "22.32px",
                        textAlign: "right",
                        color: "colors.mainBlack",
                      }}
                    >
                      عدد المنتجات
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "30px",
                        textAlign: "right",
                        color: "colors.greyStrock",
                      }}
                    >
                      {seller.products.length}
                    </Typography>
                  </Box>
                  <MainButton
                    content={"عرض منتجات البائع"}
                    onClick={() => {
                      console.log(seller.id);
                      navigate(`${seller.id}`);
                    }}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Pagination */}
        <Box
          sx={{
            mt: "219px",
            mb: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UsePagination
            setPage={setPage}
            totalPages={totalPages}
            // currentPage=
            setCurrentPage={setPage}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SellersPage;
