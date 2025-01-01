import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import Address from "../../sections/Address/Address";
import ModifyAddress from "../../sections/Address/ModifyAddress";

const ModifyAddressPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "Main Address" }} />
      <ModifyAddress />
    </>
  );
};

export default ModifyAddressPage;
