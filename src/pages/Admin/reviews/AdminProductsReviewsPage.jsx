import React from "react";
import ShowProducts from "../../../sections/Dashboard/products/ShowProducts";

const AdminProductsReviewsPage = () => {
  return (
    <ShowProducts
      title="مراجعات المنتجات"
      admin={true}
      isReview={true}
      pendingReview={true}
    />
  );
};

export default AdminProductsReviewsPage;
