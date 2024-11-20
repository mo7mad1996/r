import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, InputAdornment, Stack, Typography, styled } from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "../../components/FormElements";
import { CallOutlined } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import VerifyNumber from "../../sections/Signup/VerifyNumber";

const Typo = styled(StyledTypography)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    position: "relative",
    width: "fit-content",
    textAlign: "start",
    top: "0",
    transform: "translateY(0)",
    right: "0",
    marginBottom: "52px",
  },
}));
const RestorePasswordPage = () => {
  //   const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("type"));
  const confirm = searchParams.get("type");
  return (
    <>
      {confirm !== "confirm" && (
        <Box>
          <SectionTitle sectionTitle={{ main: "استرداد كلمة المرور" }} />
          <Stack
            sx={{
              position: "relative",
              px: { xs: "15px", sm: "45px" },
              //   gap: { xs: "50px", sm: "52px" },
              gap: "52px",
              width: { lg: "fit-content" },
              mx: { xs: "auto" },
              //   , lg: "0"
              alignItems: { md: "center", lg: "end" },
              //   left: { xl: "50%" },
              //   transform: { xl: "translateX(-50%)" },
            }}
          >
            <FormItem
              sx={{
                flexDirection: { lg: "column" },
                alignItems: { lg: "start" },
              }}
            >
              <Typo
              // sx={{
              //   position: {
              //     lg: "relative",
              //     transform: "translateY(0px)",
              //     right: "0px",
              //     top: "0px",
              //   },
              // }}
              >
                ادخل رقم هاتفك
              </Typo>
              <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ "& span": { width: "10px" } }}
                    >
                      <Box
                        sx={{
                          fontSize: "28px",
                          fontWeight: "700",
                          lineHeight: "31px",
                          color: "#000000",
                        }}
                      >
                        رقم الهاتف
                      </Box>
                    </InputAdornment>
                  ),
                }}
              ></StyledTextField>
            </FormItem>
          </Stack>
          <Typography
            sx={{
              color: "colors.greyLabels",
              width: { xs: "80%", md: "800px", lg: "550px", xl: "635px" },
              mt: "23px",
              mx: "auto",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "27px",
            }}
          >
            بالضغط علي (ارسال رمز التأكيد) أدناه , سنرسل لك رسالة قصيرة لتأكيد
            رقم هاتفك في الشاشة التالية.
          </Typography>
          <Box
            sx={{
              width: "fit-content",
              mx: "auto",
              mb: "100px",
            }}
          >
            <ConfirmButton
              sx={{
                my: "52px",
              }}
              //   onClick={() => navigate("?confirm")}
              onClick={() => setSearchParams({ type: "confirm" })}
            >
              إرسال رمز التأكيد
            </ConfirmButton>
          </Box>
        </Box>
      )}
      {confirm == "confirm" && <VerifyNumber />}
    </>
  );
};

export default RestorePasswordPage;
