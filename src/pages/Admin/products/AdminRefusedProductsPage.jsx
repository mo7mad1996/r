import React from "react";
import ShowProducts from "../../../sections/Dashboard/products/ShowProducts";

const AdminRefusedProductsPage = () => {
  return <ShowProducts title="المنتجات المرفوضة" admin={true} refused={true} />;
};

export default AdminRefusedProductsPage;
