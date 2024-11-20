import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import NewAccount from "../../sections/Signup/NewAccount";
import RegisterNumber from "../../sections/Signup/RegisterNumber";
import VerifyNumber from "../../sections/Signup/VerifyNumber";
import RegisterSuccess from "../../sections/Signup/RegisterSuccess";

const SignupPage = () => {
  const [formIndex, setFormIndex] = useState(0);
  const changeForm = (index) => {
    setFormIndex(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [formIndex]);
  return (
    <>
      {formIndex == 0 && <NewAccount changeForm={changeForm} />}
      {formIndex == 1 && <RegisterNumber changeForm={changeForm} />}
      {formIndex == 2 && <VerifyNumber />}
      {/* <RegisterSuccess /> */}
    </>
  );
};

export default SignupPage;
