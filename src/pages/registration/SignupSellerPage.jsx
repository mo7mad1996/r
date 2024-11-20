import React, { useEffect, useState } from "react";
import NewSellerAccount from "../../sections/Signup/NewSellerAccount";
import RegisterNumber from "../../sections/Signup/RegisterNumber";
import VerifyNumber from "../../sections/Signup/VerifyNumber";
import RegisterSuccess from "../../sections/Signup/RegisterSuccess";

const SignupSellerPage = () => {
  const [formIndex, setFormIndex] = useState(0);
  const changeForm = (index) => {
    setFormIndex(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [formIndex]);
  return (
    <>
      {formIndex == 0 && <NewSellerAccount changeForm={changeForm} />}
      {formIndex == 1 && <RegisterNumber changeForm={changeForm} />}
      {formIndex == 2 && <VerifyNumber />}
      {/* <RegisterSuccess seller={true} /> */}
    </>
  );
};

export default SignupSellerPage;
