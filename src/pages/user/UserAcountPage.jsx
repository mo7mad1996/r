import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Menu from "../../sections/Menu/Menu";

const items = [
  { name: "الطلبات", link: "/user/orders" },
  { name: "الأشعارات", link: "/user/notifications" },
  { name: "محفظة چوملا", link: "/user/wallet" },
  { name: "كوبونات الخصم", link: "/discount" },
  { name: "الملف الشخصي", link: "/user/profile" },
  { name: "العناوين", link: "/user/address" },
  { name: "الدعم خدمة العملاء", link: "" },
  { name: "النشرة البريدية", link: "/mail-news" },
  { name: "نشرة چوملا", link: "/goomla-news" },
  { name: "نبذة عن الموقع", link: "/about" },
  { name: "الشروط والأحكام", link: "/terms-and-conditions" },
  { name: "تسجيل الخروج", link: "/signout" },
];
const UserAcountPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "حسابي" }} />
      <Menu items={items} />
    </>
  );
};

export default UserAcountPage;
