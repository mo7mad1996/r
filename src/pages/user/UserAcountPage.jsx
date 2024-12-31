import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Menu from "../../sections/Menu/Menu";
import Orders from "../../assets/MyAccountUser_Icons/Orders.svg";
import Notifications from "../../assets/MyAccountUser_Icons/Notifications.svg";
import Wallet from "../../assets/MyAccountUser_Icons/Wallet.svg";
import Copons from "../../assets/MyAccountUser_Icons/Coupons.svg";
import MyProfile from "../../assets/MyAccountUser_Icons/MyProfile.svg";
import addresses from "../../assets/MyAccountUser_Icons/Adresses.svg";
import Support from "../../assets/MyAccountUser_Icons/Support.svg";
import MailPosts from "../../assets/MyAccountUser_Icons/E-mailPosts.svg";
import JoumlaPosts from "../../assets/MyAccountUser_Icons/JoumlaPosts.svg";
import AboutUs from "../../assets/MyAccountUser_Icons/AboutUs.svg";
import TermsNConditions from "../../assets/MyAccountUser_Icons/Terms&Conditions.svg";
import SignOut from "../../assets/MyAccountUser_Icons/Logout.svg";
const items = [
  { name: "الطلبات", link: "/user/orders", icon: Orders },
  { name: "الأشعارات", link: "/user/notifications", icon: Notifications },
  { name: "محفظة چوملا", link: "/user/wallet", icon: Wallet },
  { name: "Discount Coupons", link: "/discount", icon: Copons },
  { name: "الملف الشخصي", link: "/user/profile", icon: MyProfile },
  { name: "Addresses", link: "/user/address", icon: addresses },
  { name: "Support and Customer Service", link: "/support", icon: Support },
  { name: "النشرة البريدية", link: "/mail-news", icon: MailPosts },
  { name: "نشرة چوملا", link: "/goomla-news", icon: JoumlaPosts },
  { name: "نبذة عن الموقع", link: "/about", icon: AboutUs },
  {
    name: "الشروط والأحكام",
    link: "/terms-and-conditions",
    icon: TermsNConditions,
  },
  { name: "logout", link: "/signout", icon: SignOut },
];
const UserAcountPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "my account" }} />
      <Menu items={items} />
    </>
  );
};

export default UserAcountPage;
