import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Menu from "../../sections/Menu/Menu";
import storeIcon from "../../assets/menu_icon/storeIcon.svg";
import sellersIcon from "../../assets/menu_icon/JoumlaSellersIcon.svg";
import newProductsIcon from "../../assets/menu_icon/newProductsIcon.svg";
import bestSaleIcon from "../../assets/menu_icon/bestOffers.svg";
import sellOnGoomlaIcon from "../../assets/menu_icon/sellOnGoumlaIcon.svg";
import addressesIcon from "../../assets/menu_icon/adressIcon.svg";
import favouritesIcon from "../../assets/menu_icon/favProductsicon.svg";
import sectionsIcon from "../../assets/menu_icon/categorisIcon.svg";
import adsIcon from "../../assets/menu_icon/AdsIcon.svg";
import accountIcon from "../../assets/menu_icon/my_account.svg";
import logoutIcon from "../../assets/menu_icon/logout.svg";
// 


const items = [
  { name: "المتجر", link: "/store", icon: storeIcon },
  { name: "بائعين چوملا (المتاجر)", link: "/sellers", icon: sellersIcon },
  { name: "أحدث المنتجات", link: "/store/new", icon: newProductsIcon },
  { name: "أفضل العروض والخصومات", link: "/store/best-sale", icon: bestSaleIcon },
  { name: "بيع على چوملا", link: "/signup-seller", icon: sellOnGoomlaIcon },
  { name: "العناوين", link: "/user/address", icon: addressesIcon },
  { name: "قائمة الرغبات", link: "/store/favourite", icon: favouritesIcon },
  { name: "الأقسام", link: "/sections", icon: sectionsIcon },
  { name: "إعلانات چوملا", link: "/ads", icon: adsIcon },
  { name: "حسابي", link: "/my-account", icon: accountIcon },
  { name: "تسجيل الخروج", link: "/signout", icon: logoutIcon },
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
