import React from "react";
import ShowProducts from "../../../sections/Dashboard/products/ShowProducts";

const NewPendingReviewsPage = () => {
  return (
    <ShowProducts
      title="المراجعات الجديدة في انتظار الموافقة"
      admin={true}
      isReview={true}
    />
  );
};

export default NewPendingReviewsPage;
