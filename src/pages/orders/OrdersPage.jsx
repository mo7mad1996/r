import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Menu from "../../sections/Menu/Menu";
import { Box } from "@mui/material";
const items = [
  { name: "جميع الطلبات", link: "/user/orders/all" },
  { name: "الطلبات الجديدة", link: "/user/orders/new" },
  { name: "الطلبات قيد التنفيذ", link: "/user/orders/progress" },
  { name: "الطلبات المرتجعة", link: "/user/orders/returned" },
  { name: "الطلبات الملغاة", link: "/user/orders/canceled" },
  { name: "الطلبات المكتملة", link: "/user/orders/completed" },
  { name: "شراء مرة أخرى", link: "/user/orders/buy-again" },
];
const OrdersPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "الطلبات" }} />
      <Box sx={{ mt: "153px" }}>
        <Menu items={items} />
      </Box>
    </>
  );
};

export default OrdersPage;
