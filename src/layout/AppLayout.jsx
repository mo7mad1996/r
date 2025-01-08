import React, { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

// components
import Header from "@/components/layouts/mainLayout/Header/index.jsx";
import Footer from "@/components/layouts/mainLayout/Footer/index.jsx";
import Spinner from "@/components/Spinner";
import AdminAddSection from "@/pages/Admin/sections/AdminAddSection";
import LatestProducts from "@/components/LatestProducts/LatestProducts";

const SellerProductsPage = lazy(() =>
  import("@/pages/dashboard/products/SellerProductsPage")
);
const AllProductsPage = lazy(() =>
  import("@/pages/dashboard/products/AllProductsPage")
);

const AddNewProductPage = lazy(() =>
  import("@/pages/dashboard/products/AddNewProductPage")
);
const ProductsReviewPage = lazy(() =>
  import("@/pages/dashboard/products/ProductsReviewPage")
);
const ModifyProductPage = lazy(() =>
  import("@/pages/dashboard/products/ModifyProductPage")
);
const ProductReviewPage = lazy(() =>
  import("@/pages/dashboard/products/ProductReviewPage")
);
// const ProductTest = lazy(() =>
//   import("@/pages/dashboard/products/ProductTest")
// );
const DeliveryPage = lazy(() =>
  import("@/pages/dashboard/delivery/DeliveryPage")
);
const DeliveryAreasPage = lazy(() =>
  import("@/pages/dashboard/delivery/DeliveryAreasPage")
);
const DeliveryCitiesPage = lazy(() =>
  import("@/pages/dashboard/delivery/DeliveryCitiesPage")
);
const StoreDashboardPage = lazy(() =>
  import("@/pages/dashboard/store/StoreDashboardPage")
);
const MyStorePage = lazy(() => import("@/pages/dashboard/store/StoreSettings"));
const StoreSettings = lazy(() => import("@/pages/dashboard/SellerAccountPage"));
const SellerAccountPage = lazy(() =>
  import("@/pages/dashboard/products/AllProductsPage")
);
const DuesPage = lazy(() => import("@/pages/dashboard/dues/DuesPage"));
const TotalDues = lazy(() => import("@/pages/dashboard/dues/TotalDues"));
const ReportsPage = lazy(() => import("@/pages/dashboard/reports/ReportsPage"));
const WithdrawPage = lazy(() =>
  import("@/pages/dashboard/withdraw/WithdrawPage")
);
const AdminDashboardPage = lazy(() =>
  import("@/pages/Admin/AdminDashboard/Page")
);
const My_account = lazy(() =>
  import("@/pages/Admin/AdminDashboard/My_account/index.jsx")
);
const Admin_profile = lazy(() =>
  import("@/pages/Admin/AdminDashboard/Admin_profile/index.jsx")
);
const AdminOrdersPage = lazy(() =>
  import("@/pages/Admin/orders/AdminOrdersPage")
);
const AdminProductsPage = lazy(() =>
  import("@/pages/Admin/products/AdminProductsPage")
);
const AdminAllProductsPage = lazy(() =>
  import("@/pages/Admin/products/AdminAllProductsPage")
);
const AdminModifyProductPage = lazy(() =>
  import("@/pages/Admin/products/AdminModifyProductPage")
);
const AdminAddNewProductPage = lazy(() =>
  import("@/pages/Admin/products/AdminAddNewProductPage")
);
const AddNewSellerPage = lazy(() =>
  import("@/pages/Admin/products/AddNewSellerPage")
);
const AdminPendingProductsPage = lazy(() =>
  import("@/pages/Admin/products/AdminPendingProductsPage")
);
const AdminRefusedProductsPage = lazy(() =>
  import("@/pages/Admin/products/AdminRefusedProductsPage")
);
const AdminReviewsPage = lazy(() =>
  import("@/pages/Admin/reviews/AdminReviewsPage")
);
const NewPendingReviewsPage = lazy(() =>
  import("@/pages/Admin/reviews/NewPendingReviewsPage")
);
const AdminProductsReviewsPage = lazy(() =>
  import("@/pages/Admin/reviews/AdminProductsReviewsPage")
);
const AdminDeliverySettingsPage = lazy(() =>
  import("@/pages/Admin/delivery-settings/AdminDeliverySettingsPage")
);
const AdminDeliveryAreasPage = lazy(() =>
  import("@/pages/Admin/delivery-settings/AdminDeliveryAreasPage")
);
const SellerDeliveryCustomizePage = lazy(() =>
  import("@/pages/Admin/delivery-settings/SellerDeliveryCustomizePage")
);
const SectionDeliveryCustomizePage = lazy(() =>
  import("@/pages/Admin/delivery-settings/SectionDeliveryCustomizePage")
);
const CustomizeAreasPage = lazy(() =>
  import("@/pages/Admin/delivery-settings/CustomizeAreasPage")
);
const DefaultDeliveryPage = lazy(() =>
  import("@/pages/Admin/delivery-settings/DefaultDeliveryPage")
);
const AdminDeliveryCitiesPage = lazy(() =>
  import("@/pages/Admin/delivery-settings/AdminDeliveryCitiesPage")
);
const ProductCustomDeliveryPage = lazy(() =>
  import("@/pages/Admin/delivery-settings/ProductCustomDeliveryPage")
);
const AdminStorePage = lazy(() => import("@/pages/Admin/store/AdminStorePage"));
const AdminAdsPage = lazy(() => import("@/pages/Admin/ads/AdminAdsPage"));
const AdminAllAdsPage = lazy(() => import("@/pages/Admin/ads/AdminAllAdsPage"));
const AdminAddAd = lazy(() => import("@/pages/Admin/ads/AdminAddAd"));
const AddSectionPage = lazy(() =>
  import("@/pages/Admin/products/AddSectionPage")
);
const AdminAddProductPage = lazy(() =>
  import("@/pages/Admin/products/AdminAddProductPage")
);
const AdminSectionsPage = lazy(() =>
  import("@/pages/Admin/sections/AdminSectionsPage")
);

const HomePage = lazy(() => import("@/pages/Home/HomePage"));
const StorePage = lazy(() => import("@/pages/store/StorePage"));
const TodayOffersPage = lazy(() => import("@/pages/store/TodayOffersPage"));
const ProductPage = lazy(() => import("@/pages/product/ProductPage"));
const NewProductsPage = lazy(() => import("@/pages/store/NewProductsPage"));
const BestSalesPage = lazy(() => import("@/pages/store/BestSalesPage"));
const SellersPage = lazy(() => import("@/pages/sellers/SellersPage"));
const SellerPage = lazy(() => import("@/pages/sellers/SellerPage"));
const SectionsPage = lazy(() => import("@/pages/sections/SectionsPage"));
const FavouriteProductsPage = lazy(() =>
  import("@/pages/store/FavouriteProductsPage")
);
const SectionPage = lazy(() => import("@/pages/sections/SectionPage"));
const MyAdsPage = lazy(() => import("@/pages/MyAdsPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const UserAcountPage = lazy(() => import("@/pages/user/UserAcountPage"));
const MenuPage = lazy(() => import("@/pages/menu/MenuPage"));
// const TestPage = lazy(() => import("@/pages/TestPage"));
const LoginPage = lazy(() => import("@/pages/registration/LoginPage"));
const SignupPage = lazy(() => import("@/pages/registration/SignupPage"));
const RestorePasswordPage = lazy(() =>
  import("@/pages/registration/RestorePasswordPage")
);
const NewPasswordPage = lazy(() =>
  import("@/pages/registration/NewPasswordPage")
);
const LoginSellerPage = lazy(() =>
  import("@/pages/registration/LoginSellerPage")
);
const SignupSellerPage = lazy(() =>
  import("@/pages/registration/SignupSellerPage")
);
const UserProfilePage = lazy(() => import("@/pages/user/UserProfilePage"));
const NewAddressPage = lazy(() => import("@/pages/address/NewAddressPage"));
const ModifyAddressPage = lazy(() =>
  import("@/pages/address/ModifyAddressPage")
);
const AddressPage = lazy(() => import("@/pages/address/AddressPage"));
const DiscountPage = lazy(() => import("@/pages/DiscountPage"));
const MailNewsPage = lazy(() => import("@/pages/mailNews/MailNewsPage"));
const MailNewsItemPage = lazy(() =>
  import("@/pages/mailNews/MailNewsItemPage")
);

const GoomlaNewsPage = lazy(() => import("@/pages/GoomlaNewsPage"));
const NotificationsPage = lazy(() => import("@/pages/NotificationsPage"));
const WalletPage = lazy(() => import("@/pages/wallet/WalletPage"));
const WalletInteractionsPage = lazy(() =>
  import("@/pages/wallet/WalletInteractionsPage")
);
const CartPage = lazy(() => import("@/pages/cart/CartPage"));
const CartSummaryPage = lazy(() => import("@/pages/cart/CartSummaryPage"));
const CartConfirmedPage = lazy(() => import("@/pages/cart/CartConfirmedPage"));
const OrdersPage = lazy(() => import("@/pages/orders/OrdersPage"));
const NewOrdersPage = lazy(() => import("@/pages/orders/NewOrdersPage"));
const ProgressOrdersPage = lazy(() =>
  import("@/pages/orders/ProgressOrdersPage")
);
const ReturnedOrdersPage = lazy(() => 7);
const CanceledOrdersPage = lazy(() =>
  import("@/pages/orders/CanceledOrdersPage")
);
const CompletedOrdersPage = lazy(() =>
  import("@/pages/orders/CompletedOrdersPage")
);
const AllOrdersPage = lazy(() => import("@/pages/orders/AllOrdersPage"));
const BuyAgainPage = lazy(() => import("@/pages/orders/BuyAgainPage"));
const OrderDetailsPage = lazy(() => import("@/pages/orders/OrderDetailsPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage"));
// test
const NewOrdersPage1 = lazy(() => import("@/pages/orders/NewOrdersPage-v1"));
// seller dashboard
const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const SellerOrdersPage = lazy(() =>
  import("@/pages/dashboard/orders/SellerOrdersPage")
);

import { useTranslation } from "react-i18next";

const AppLayout = () => {
  const { i18n } = useTranslation();
  return (
    <div className={`lang-${i18n.language}`}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/signup-seller" element={<SignupSellerPage />} />
          <Route path="/store">
            <Route index={true} element={<StorePage />} />
            <Route path=":id" element={<ProductPage />} />
            <Route path="latest-products" element={<LatestProducts />} />
            <Route path="new" element={<NewProductsPage />} />
            <Route path="best-sale" element={<BestSalesPage />} />
            <Route path="favourite" element={<FavouriteProductsPage />} />
            <Route path="today-offers" element={<TodayOffersPage />} />
          </Route>
          <Route path="/sections">
            <Route index={true} element={<SectionsPage />} />
            <Route path=":id" element={<SectionPage />} />
          </Route>
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/ads" element={<MyAdsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/sellers">
            <Route index={true} element={<SellersPage />} />
            <Route path=":id" element={<SellerPage />} />
          </Route>
          <Route path="/my-account" element={<UserAcountPage />} />
          {/* user */}
          <Route path="/user">
            <Route path="orders">
              <Route index={true} element={<OrdersPage />} />
              <Route path="all" element={<AllOrdersPage />} />
              <Route path="new" element={<NewOrdersPage />} />
              <Route path="progress" element={<ProgressOrdersPage />} />
              <Route path="returned" element={<ReturnedOrdersPage />} />
              <Route path="canceled" element={<CanceledOrdersPage />} />
              <Route path="completed" element={<CompletedOrdersPage />} />
              <Route path="buy-again" element={<BuyAgainPage />} />
              <Route path="test" element={<NewOrdersPage1 />} />
              <Route path=":id" element={<OrderDetailsPage />} />
            </Route>
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="wallet">
              <Route index={true} element={<WalletPage />} />
              <Route path="interactions" element={<WalletInteractionsPage />} />
            </Route>
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="address">
              <Route index={true} element={<AddressPage />} />
              <Route path="new" element={<NewAddressPage />} />
              <Route path="modify/:id" element={<ModifyAddressPage />} />
            </Route>
          </Route>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-seller" element={<LoginSellerPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-restore" element={<RestorePasswordPage />} />
          <Route path="/new-password" element={<NewPasswordPage />} />

          <Route path="/mail-news" element={<MailNewsPage />} />
          <Route path="/mail-news/:id" element={<MailNewsItemPage />} />
          <Route path="/goomla-news" element={<GoomlaNewsPage />} />

          <Route path="/support" element={<SupportPage />} />
          {/* cart */}
          <Route path="/cart">
            <Route index={true} element={<CartPage />} />
            <Route path="summary" element={<CartSummaryPage />} />
            <Route path="confirmed" element={<CartConfirmedPage />} />
          </Route>
          {/* dashboard */}
          <Route path="/dashboard">
            <Route index={true} element={<DashboardPage />} />
            <Route path="orders">
              <Route index={true} element={<SellerOrdersPage />} />
              <Route path="all" element={<AllOrdersPage />} />
              <Route path="new" element={<NewOrdersPage />} />
              <Route path="progress" element={<ProgressOrdersPage />} />
              <Route path="returned" element={<ReturnedOrdersPage />} />
              <Route path="canceled" element={<CanceledOrdersPage />} />
              <Route path="completed" element={<CompletedOrdersPage />} />
              <Route path="buy-again" element={<BuyAgainPage />} />
              <Route path="test" element={<NewOrdersPage1 />} />
              <Route path=":id" element={<OrderDetailsPage />} />
            </Route>
            <Route path="products">
              <Route index={true} element={<SellerProductsPage />} />
              <Route path="all" element={<AllProductsPage />} />
              <Route path="add" element={<AddNewProductPage />} />
              <Route path=":id/modify" element={<ModifyProductPage />} />
              <Route path="reviews" element={<ProductsReviewPage />} />
              <Route path="reviews/:id" element={<ProductReviewPage />} />
            </Route>
            <Route path="delivery">
              <Route index={true} element={<DeliveryPage />} />
              <Route path="areas" element={<DeliveryAreasPage />} />
              <Route path="cities" element={<DeliveryCitiesPage />} />
            </Route>
            <Route path="store">
              <Route index={true} element={<StoreDashboardPage />} />
              <Route path="my-store" element={<MyStorePage />} />
              <Route path="settings" element={<StoreSettings />} />
            </Route>
            <Route path="account" element={<SellerAccountPage />} />
            <Route path="dues">
              <Route index element={<DuesPage />} />
              <Route path="total" element={<TotalDues />} />
            </Route>
            <Route path="reports" element={<ReportsPage />} />
            <Route path="withdraw" element={<WithdrawPage />} />
          </Route>
          {/* admin  */}
          <Route path="admin/dashboard">
            <Route index element={<AdminDashboardPage />} />
            <Route path="my_account" element={<My_account />} />
            <Route path="profile" element={<Admin_profile />} />
            <Route path="orders">
              <Route index={true} element={<AdminOrdersPage />} />
              <Route path="all" element={<AllOrdersPage />} />
              <Route path="new" element={<NewOrdersPage />} />
              <Route path="progress" element={<ProgressOrdersPage />} />
              <Route path="returned" element={<ReturnedOrdersPage />} />
              <Route path="canceled" element={<CanceledOrdersPage />} />
              <Route path="completed" element={<CompletedOrdersPage />} />
              <Route path="buy-again" element={<BuyAgainPage />} />
              <Route path="test" element={<NewOrdersPage1 />} />
              <Route path=":id" element={<OrderDetailsPage />} />
            </Route>
            <Route path="products">
              <Route index={true} element={<AdminProductsPage />} />
              <Route path="all" element={<AdminAllProductsPage />} />
              <Route path="pending" element={<AdminPendingProductsPage />} />
              <Route path="refused" element={<AdminRefusedProductsPage />} />
              <Route path="add" element={<AdminAddNewProductPage />} />
              <Route path=":id/modify" element={<AdminModifyProductPage />} />
            </Route>
            <Route path="add-seller" element={<AddNewSellerPage />} />
            <Route path="reviews">
              <Route index={true} element={<AdminReviewsPage />} />
              <Route path="pending" element={<NewPendingReviewsPage />} />
              <Route path="products" element={<AdminProductsReviewsPage />} />
              <Route path="products/:id" element={<ProductReviewPage />} />
            </Route>
            <Route path="delivery">
              <Route index={true} element={<AdminDeliverySettingsPage />} />
              <Route path="areas" element={<AdminDeliveryAreasPage />} />
              <Route
                path="custom-seller"
                element={<SellerDeliveryCustomizePage />}
              />
              <Route
                path="custom-section"
                element={<SectionDeliveryCustomizePage />}
              />
              <Route path="custom-areas" element={<CustomizeAreasPage />} />
              <Route path="default" element={<DefaultDeliveryPage />} />
              <Route path="cities" element={<AdminDeliveryCitiesPage />} />
              <Route
                path="custom-product"
                element={<ProductCustomDeliveryPage />}
              />
            </Route>
            <Route path="store">
              <Route index={true} element={<AdminStorePage />} />
              {/* <Route path="pending" element={<NewPendingReviewsPage />} />
        <Route path="products" element={<AdminProductsReviewsPage />} />
        <Route path="products/:id" element={<ProductReviewPage />} /> */}
            </Route>
            <Route path="ads">
              <Route index={true} element={<AdminAdsPage />} />
              <Route path="all" element={<AdminAllAdsPage />} />
              <Route path="add" element={<AdminAddAd />} />
              <Route path="add-seller" element={<AddNewSellerPage />} />
              <Route path="add-section" element={<AddSectionPage />} />
              <Route path="add-product" element={<AdminAddProductPage />} />
              {/* <Route path="products" element={<AdminProductsReviewsPage />} />
        <Route path="products/:id" element={<ProductReviewPage />} /> */}
            </Route>
            <Route path="sections">
              <Route index={true} element={<AdminSectionsPage />} />
              <Route path="all" element={<SectionsPage />} />
              <Route path="add" element={<AdminAddSection />} />
              {/* <Route path="add" element={<AdminAddAd />} />
        <Route path="add-seller" element={<AddNewSellerPage />} />
        <Route path="add-section" element={<AddSectionPage />} />
        <Route path="add-product" element={<AdminAddProductPage />} /> */}
              {/* <Route path="products" element={<AdminProductsReviewsPage />} />
        <Route path="products/:id" element={<ProductReviewPage />} /> */}
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default AppLayout;
