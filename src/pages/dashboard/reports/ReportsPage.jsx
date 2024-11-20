import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import useShowModal from "../../../hooks/useShowModal";
import FilterBtn from "../../../components/FilterBtn";
import ModalComponent from "../../../components/ModalComponent";
import DateFilter from "../../../components/DateFilter";

const reports = [
  {
    id: 0,
    title: "عدد المنتجات المباعة",
    num: "1240",
  },
  {
    id: 1,
    title: "إجمالى عدد المنتجات",
    num: "225",
  },
  {
    id: 2,
    title: "عدد المنتجات المرتجعة",
    num: "200",
  },
  {
    id: 3,
    title: "عدد الطلبات",
    num: "1240",
  },
  {
    id: 4,
    title: "متوسط الطلبات الشهرية",
    num: "1200",
  },
  {
    id: 5,
    title: "الطلبات الملغاه",
    num: "1200",
  },
  {
    id: 6,
    title: "متوسط المبيعات الشهريه",
    num: "12000",
  },
  {
    id: 7,
    title: "المبيعات بالجنيه",
    num: "12000",
  },
  {
    id: 8,
    title: "المرتجعات بالجنيه",
    num: "1500",
  },
  {
    id: 9,
    title: "التقييمات الجيدة",
    num: "1000",
  },
  {
    id: 10,
    title: "التقيمات السيئة",
    num: "100",
  },
  {
    id: 11,
    title: "محافظات البيع",
    num: "5",
  },
];
const ReportsPage = () => {
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <Stack
      sx={{
        mb: "100px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "التقارير" }} />
      <Stack
        sx={{
          mx: "63px",
          mt: "-50px",
        }}
      >
        <Box
          sx={{
            mr: "auto",
            mb: "57px",
          }}
        >
          <FilterBtn handleOpen={handleOpen} />
        </Box>

        <Grid container rowSpacing="46px" columnSpacing="62px">
          {reports.map((item) => (
            <Grid item lg={3} key={item.id}>
              <Stack
                sx={{
                  width: "306px",
                  height: "282px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "15px",
                  backgroundColor: "#F6F6F6",
                  pt: "96px",
                  pb: "43px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: "700",
                    lineHeight: "56px",
                    color: "colors.mainGreen",
                  }}
                >
                  {item.num}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "27px",
                    color: "#292D32",
                  }}
                >
                  {item.title}{" "}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </Stack>
  );
};

export default ReportsPage;
