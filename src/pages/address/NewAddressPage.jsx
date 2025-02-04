import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";

import Address from "../../sections/Address/Address";

const NewAddressPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "Add New Address" }} />
      <Address />
    </>
  );
};

export default NewAddressPage;
