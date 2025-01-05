import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import SectionTitle from "~/sections/common/Products/SectionTitle";

import accountImg from "~/assets/admin/dashboard/account.png";
import adsImg from "~/assets/admin/dashboard/ads.png";
import clientsImg from "~/assets/admin/dashboard/clients.png";
import couponsImg from "~/assets/admin/dashboard/coupons.png";
import earningsImg from "~/assets/admin/dashboard/earnings.png";
import emailImg from "~/assets/admin/dashboard/email.png";
import employeesImg from "~/assets/admin/dashboard/employees.png";
import goomlaNewsImg from "~/assets/admin/dashboard/goomla-news.png";
import logoutImg from "~/assets/admin/dashboard/logout.png";
import mailNewsImg from "~/assets/admin/dashboard/mail-news.png";
import notificationsImg from "~/assets/admin/dashboard/notifications.png";
import ordersImg from "~/assets/admin/dashboard/orders.png";
import percentageImg from "~/assets/admin/dashboard/percentage.png";
import productsImg from "~/assets/admin/dashboard/products.png";
import reportsImg from "~/assets/admin/dashboard/reports.png";
import reviewsImg from "~/assets/admin/dashboard/reviews.png";
import sectionsImg from "~/assets/admin/dashboard/sections.png";
import sellersImg from "~/assets/admin/dashboard/sellers.png";
import settingsImg from "~/assets/admin/dashboard/settings.png";
import supportImg from "~/assets/admin/dashboard/support.png";
import walletImg from "~/assets/admin/dashboard/wallet.png";
import withdrawImg from "~/assets/admin/dashboard/withdraw.png";
import storeImg from "~/assets/admin/dashboard/store.png";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 0,
    title: "Orders",
    link: "/admin/dashboard/orders",
    img: ordersImg,
  },
  {
    id: 1,
    title: "Products",
    link: "/admin/dashboard/products",
    img: productsImg,
  },
  {
    id: 2,
    title: "المراجعات",
    link: "/admin/dashboard/reviews",
    img: reviewsImg,
  },
  {
    id: 3,
    title: "اعدادات الشحن",
    link: "/admin/dashboard/delivery",
    img: settingsImg,
  },
  {
    id: 4,
    title: "store",
    link: "/admin/dashboard/store",
    img: storeImg,
  },
  {
    id: 5,
    title: "Joumla ads",
    link: "/admin/dashboard/ads",
    img: adsImg,
  },
  {
    id: 6,
    title: "أرباح چوملا",
    link: "/admin/dashboard/",
    img: earningsImg,
  },
  {
    id: 7,
    title: "Categories",
    link: "/admin/dashboard/sections",
    img: sectionsImg,
  },
  {
    id: 8,
    title: "my account",
    link: "/admin/dashboard/",
    img: accountImg,
  },
  {
    id: 9,
    title: "الموظفين",
    link: "/admin/dashboard/",
    img: employeesImg,
  },
  {
    id: 10,
    title: "التقارير",
    link: "/admin/dashboard/",
    img: reportsImg,
  },
  {
    id: 11,
    title: "العمولة",
    link: "/admin/dashboard/",
    img: percentageImg,
  },
  {
    id: 12,
    title: "مركز الأشعارات",
    link: "/admin/dashboard/",
    img: notificationsImg,
  },
  {
    id: 13,
    title: "Support Center",
    link: "/admin/dashboard/",
    img: supportImg,
  },
  {
    id: 14,
    title: "نشرة چوملا",
    link: "/admin/dashboard/",
    img: goomlaNewsImg,
  },
  {
    id: 15,
    title: "طلبات السحب",
    link: "/admin/dashboard/",
    img: withdrawImg,
  },
  {
    id: 16,
    title: "اعدادات البريد الألكتروني",
    link: "/admin/dashboard/",
    img: emailImg,
  },
  {
    id: 17,
    title: "البائعين",
    link: "/admin/dashboard/",
    img: sellersImg,
  },
  {
    id: 18,
    title: "Discount Coupons",
    link: "/admin/dashboard/",
    img: couponsImg,
  },
  {
    id: 19,
    title: "اعدادات نظام الموقع",
    link: "/admin/dashboard/",
    img: settingsImg,
  },
  {
    id: 20,
    title: "المحفظة",
    link: "/admin/dashboard/",
    img: walletImg,
  },
  {
    id: 21,
    title: "النشرة البريدية",
    link: "/admin/dashboard/",
    img: mailNewsImg,
  },
  {
    id: 22,
    title: "Joumla Customers",
    link: "/admin/dashboard/",
    img: clientsImg,
  },
  {
    id: 23,
    title: "logout",
    link: "/logout",
    img: logoutImg,
  },
];
const StyledBox = styled(Stack)(({ theme }) => ({
  // width: "200px",
  height: "200px",
  borderRadius: "5px",
  // border: "1px solid #000000",
  boxShadow: "2.5px 2.5px 8px 4px #00000040",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  cursor: "pointer",
  "& img": {
    maxWidth: "48px",
    maxHeight: "52px",
  },
  "& p": {
    fontSize: "28px",
    fontWeight: "800",
    lineHeight: "31px",
    color: "colors.mainBlack",
    textAlign: "center",
  },
}));
const AdminDashboardPage = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <SectionTitle sectionTitle={{ main: "Admin Dashboard" }} />
      <Stack
        sx={{
          width: "499px",
          height: "115px",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "auto",
          mt: "121px",
          mb: "108px",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "700",
            lineheight: "56px",
            color: "colors.mainGreen",
          }}
        >
          450
        </Typography>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "800",
            lineHeight: "39px",
            color: "#292D32",
          }}
        >
          عدد الطلبات الجديدة قيد الإنتظار
        </Typography>
      </Stack>
      {/* Menu  */}
      <Box>
        <Box
          sx={{
            width: "1160px",
            mx: "auto",
            mb: "100px",
          }}
        >
          <Grid container spacing="40px">
            {items.map((item) => (
              <Grid item key={item.id} lg={2.4}>
                <StyledBox
                  onClick={() => navigate(item.link)}
                  sx={[
                    item.link == "/logout" && {
                      backgroundColor: "colors.mainRed",
                      "& p": {
                        color: "#fff",
                      },
                    },
                  ]}
                >
                  <Box component="img" src={item.img} />
                  <Typography>{item.title}</Typography>
                </StyledBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default AdminDashboardPage;
