import React from "react";
import SectionTitle from "~/sections/common/Products/SectionTitle";
import Menu from "~/sections/Menu/Menu";
import storeIcon from "~/assets/Menu_icon/storeIcon.svg";
import sellersIcon from "~/assets/Menu_icon/JoumlaSellersIcon.svg";
import newProductsIcon from "~/assets/Menu_icon/newProductsIcon.svg";
import bestSaleIcon from "~/assets/Menu_icon/bestOffers.svg";
import sellOnGoomlaIcon from "~/assets/Menu_icon/sellOnGoumlaIcon.svg";
import addressesIcon from "~/assets/Menu_icon/adressIcon.svg";
import favouritesIcon from "~/assets/Menu_icon/favProductsicon.svg";
import sectionsIcon from "~/assets/Menu_icon/categorisIcon.svg";
import adsIcon from "~/assets/Menu_icon/AdsIcon.svg";
import accountIcon from "~/assets/Menu_icon/my_account.svg";
import logoutIcon from "~/assets/Menu_icon/logout.svg";
//

const items = [
  { name: "store", link: "/store", icon: storeIcon },
  { name: "Joumla Vendors (Stores)", link: "/sellers", icon: sellersIcon },
  { name: "The latest products", link: "/store/new", icon: newProductsIcon },
  {
    name: "The best offers and discounts",
    link: "/store/best-sale",
    icon: bestSaleIcon,
  },
  { name: "signup-seller", link: "/signup-seller", icon: sellOnGoomlaIcon },
  { name: "Addresses", link: "/user/address", icon: addressesIcon },
  { name: "Wishlist", link: "/store/favourite", icon: favouritesIcon },
  { name: "Categories", link: "/sections", icon: sectionsIcon },
  { name: "Joumla ads", link: "/ads", icon: adsIcon },
  { name: "my account", link: "/my-account", icon: accountIcon },
  { name: "logout", link: "/signout", icon: logoutIcon },
];

const MenuPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "Menu" }} />
      <Menu items={items} />
    </>
  );
};

export default MenuPage;
