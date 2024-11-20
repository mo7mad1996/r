import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Address from "../../sections/Address/Address";

const ModifyAddressPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "تعديل العنوان" }} />
      <Address />
    </>
  );
};

export default ModifyAddressPage;
