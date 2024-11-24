import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import OrdersMenu from "../../sections/Menu/OrdersMenu";
import { Box } from "@mui/material";

const items = [
  { name: "جميع الطلبات", link: "/user/orders/all", count: 5 },
  { name: "الطلبات الجديدة", link: "/user/orders/new", count: 2 },
  { name: "الطلبات قيد التنفيذ", link: "/user/orders/progress", count: 3 },
  { name: "الطلبات المرتجعة", link: "/user/orders/returned", count: 1 },
  { name: "الطلبات الملغاة", link: "/user/orders/canceled", count: 0 },
  { name: "الطلبات المكتملة", link: "/user/orders/completed", count: 8 },
  { name: "شراء مرة أخرى", link: "/user/orders/buy-again", count: 4 },
];

const OrdersPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "الطلبات" }} />
      <Box sx={{ mt: "153px" }}>
        <OrdersMenu items={items} />
      </Box>
    </>
  );
};

export default OrdersPage;
