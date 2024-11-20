import React from "react";
import OrdersComponent from "../../sections/orders/OrdersComponent";
const orders = [
  {
    id: 1,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 2,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تسليم الطلب لمندوب الشحن",
    statusCode: 2,
  },
  {
    id: 3,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 4,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 5,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "الطلب في الطريق اليك",
    statusCode: 3,
  },
  {
    id: 6,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تسليم الطلب للعميل",
    statusCode: 4,
  },
  {
    id: 7,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 8,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 9,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 10,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 11,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 12,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 13,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 14,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 15,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 16,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 17,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 18,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 19,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
  {
    id: 20,
    date: "الأربعاء , 6 ديسمبر ,5:35 pm",
    owner: "عبدالرحمن حامد دويدار",
    num: "123",
    status: "تم تأكيد الطلب",
    statusCode: 1,
  },
];
const ProgressOrdersPage = () => {
  return (
    <OrdersComponent
      title="الطلبات قيد التنفيذ"
      orders={orders}
      ordersPerPage={4}
    />
  );
};

export default ProgressOrdersPage;
