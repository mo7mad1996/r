import React from "react";
import ShowProducts from "../../../sections/Dashboard/products/ShowProducts";

const AdminPendingProductsPage = () => {
  return (
    <ShowProducts
      title="منتجات في انتظار الموافقة"
      admin={true}
      pending={true}
    />
  );
};

export default AdminPendingProductsPage;
