import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Search from "../../sections/common/Search";
import FilterBtn from "../../components/FilterBtn";
import useShowModal from "../../hooks/useShowModal";
import usePaginate from "../../hooks/usePaginate";
import UsePagination from "../../hooks/UsePagination";
import Order from "../../sections/orders/Order";
import OrdersComponent from "../../sections/orders/OrdersComponent";

const orders = [
  {
    id: 1,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 2,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "مكتمل",
    statusCode: 5,
  },
  {
    id: 3,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "مرتجع",
    statusCode: 7,
  },
  {
    id: 4,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "في الطريق اليك",
    statusCode: 3,
  },
  {
    id: 5,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 6,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 7,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 8,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 9,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 10,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 11,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 12,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 13,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 14,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 15,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 16,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 17,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 18,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 19,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
  {
    id: 20,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "ملغي",
    statusCode: 6,
  },
];

const AllOrdersPage = () => {
  return <OrdersComponent title="جميع الطلبات" orders={orders} />;
};

export default AllOrdersPage;
