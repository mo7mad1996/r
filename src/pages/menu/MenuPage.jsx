import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Menu from "../../sections/Menu/Menu";

const items = [
  { name: "المتجر", link: "/store" },
  { name: "بائعين چوملا (المتاجر)", link: "/sellers" },
  { name: "أحدث المنتجات", link: "/store/new" },
  { name: "أفضل العروض والخصومات", link: "/store/best-sale" },
  { name: "بيع على چوملا", link: "/signup-seller" },
  { name: "العناوين", link: "/user/address" },
  { name: "قائمة الرغبات", link: "/store/favourite" },
  { name: "الأقسام", link: "/sections" },
  { name: "إعلانات چوملا", link: "/ads" },
  { name: "حسابي", link: "/my-account" },
  { name: "تسجيل الخروج", link: "/signout" },
];
const MenuPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "القائمة" }} />
      <Menu items={items} />
    </>
  );
};

export default MenuPage;
