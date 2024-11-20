import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";
import { CheckRounded } from "@mui/icons-material";

const StyledTypo = styled(Typography)(({ theme }) => ({
  height: "89px",
  backgroundColor: "#D9D9D9",
  fontSize: "48px",
  fontWeight: "700",
  lineHeight: "54px",
  textAlign: "center",
  color: theme.palette.colors.mainBlack,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const StyledCheckbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "56px",
  height: "40px",
  borderRadius: "5px",
  border: "1px solid",
  borderColor: theme.palette.colors.mainGreen,
  cursor: "pointer",
  "& svg": {
    color: theme.palette.colors.mainGreen,
    width: "55px",
    height: "55px",
  },
}));
const CustomizeSection = ({ title }) => {
  const [show, setShow] = useState(false);
  return (
    <Stack
      sx={{
        mb: "100px",
      }}
    >
      <SectionTitle sectionTitle={{ main: title }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "613px",
          height: "163px",
          borderRadius: "10px",
          backgroundColor: "#D9D9D9",
          mx: "auto",
          mt: "-50px",
        }}
      >
        <Typography
          sx={{
            width: "536px",
            height: "98px",
            fontSize: "35px",
            fontWeight: "700",
            lineHeight: "39px",
            textAlign: "center",
            color: "colors.mainBlack",
          }}
        >
          *هذا الشحن الأفتراضى لكل المتاجر فى حاله عدم تخصيص الشحن للمتجر
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "800",
          lineHeight: "33px",
          textAlign: "center",
          color: "colors.mainBlack",
          my: "46px",
        }}
      >
        الشحن الحالي
      </Typography>
      <StyledTypo
        sx={{
          width: "314px",
          mx: "auto",
        }}
      >
        چوملا{" "}
      </StyledTypo>
      <Stack
        sx={{
          gap: "46px",
          mt: "74px",
          "& > div": {
            position: "relative",
            left: "60px",
            width: "550px",
            display: "flex",
            justifyContent: "end",
            mx: "auto",
          },
        }}
      >
        <Box sx={{}}>
          <StyledTypo
            sx={{
              width: "314px",
            }}
          >
            چوملا{" "}
          </StyledTypo>
          <StyledTypo
            sx={{
              backgroundColor: "colors.liteGrey",
              width: "126px",
              borderRadius: "5px",
            }}
          >
            40{" "}
          </StyledTypo>
        </Box>
        <Box sx={{}}>
          <StyledTypo
            sx={{
              width: "314px",
            }}
          >
            قيمة الخصم{" "}
          </StyledTypo>
          <StyledTypo
            sx={{
              backgroundColor: "colors.liteGrey",
              width: "126px",
              borderRadius: "5px",
            }}
          >
            10{" "}
          </StyledTypo>
        </Box>
        <Box sx={{}}>
          <StyledTypo
            sx={{
              width: "412px",
            }}
          >
            الحد الأدنى(الوزن)
          </StyledTypo>
          <StyledTypo
            sx={{
              backgroundColor: "colors.liteGrey",
              width: "126px",
              borderRadius: "5px",
            }}
          >
            10{" "}
          </StyledTypo>
          <StyledTypo
            sx={{
              position: "absolute",
              right: "calc(100% + 50px)",
              backgroundColor: "transparent",
              borderRadius: "5px",
            }}
          >
            كجم{" "}
          </StyledTypo>
        </Box>
        <Box sx={{}}>
          <StyledTypo
            sx={{
              width: "412px",
            }}
          >
            سعر الكيلو{" "}
          </StyledTypo>
          <StyledTypo
            sx={{
              backgroundColor: "colors.liteGrey",
              width: "126px",
              borderRadius: "5px",
            }}
          >
            3{" "}
          </StyledTypo>
          <StyledTypo
            sx={{
              position: "absolute",
              right: "calc(100% + 50px)",
              backgroundColor: "transparent",
              borderRadius: "5px",
            }}
          >
            ج.م{" "}
          </StyledTypo>
        </Box>
      </Stack>
      <Typography
        sx={{
          position: "relative",
          right: "-110px",
          width: "316px",
          mt: "61px",
          mb: "39px",
          fontSize: "30px",
          fontWeight: "700",
          lineHeight: "33px",
          textAlign: "center",
          color: "colors.mainBlack",
          mx: "auto",
        }}
      >
        تحديد
      </Typography>
      <Stack
        sx={{
          alignItems: "center",
          gap: "46px",
          "& > div": {
            width: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "17px",
          },
          "& p": {
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "33px",
          },
        }}
      >
        <Box>
          <StyledCheckbox>
            {" "}
            <CheckRounded />
          </StyledCheckbox>
          <Typography>چوملا</Typography>
        </Box>
        <Box>
          <StyledCheckbox> {show && <CheckRounded />}</StyledCheckbox>
          <Typography>المتاجر</Typography>
        </Box>
      </Stack>
      <Button
        sx={{
          width: "461px",
          height: "92px",
          borderRadius: "15px",
          fontSize: "32px",
          fontWeight: "800",
          lineHeight: "36px",
          "&, &:hover": {
            backgroundColor: "colors.mainGreen",
            color: "colors.wi8",
          },
          mx: "auto",
          mt: "62px",
        }}
      >
        حفظ
      </Button>
    </Stack>
  );
};

export default CustomizeSection;
