import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "~/sections/common/Products/SectionTitle";

import adImage from "~/assets/admin/ads/ad.png";
import UploadButton from "~/components/UploadButton";

const StyledTextField = styled(TextField)(({ theme, active }) => ({
  height: "60px",
  borderRadius: "10px",
  backgroundColor: theme.palette.colors.mainGreen,
  "& input": {
    height: "57px",
    fontSize: "25px",
    fontWeight: "700",
    lineHeight: "77px",
    color: theme.palette.colors.wi8,
    padding: "0 50px",
    cursor: !active && "pointer",
    "&::placeholder": {
      color: theme.palette.colors.wi8,
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "0",
    },
  },
}));
const AdminAddAd = () => {
  const [sectionValue, setSectionValue] = useState("");
  const [sectionInput, setSectionInput] = useState(false);

  const handleSectionInputChange = (event) => {
    setSectionValue(event.target.value);
  };
  const handleSectionBlur = (event) => {
    if (event.target.value.length == 0) {
      setSectionInput(false);
      //   setSectionInput(false);
    }
  };

  const handleSectionInputClick = () => {
    setSectionInput(true);
  };
  return (
    <Stack
      sx={{
        width: "1221px",
        mx: "auto",
      }}
    >
      <SectionTitle sectionTitle={{ main: "اضافة إعلان جديد" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* add image  */}
        <Stack
          sx={{
            width: "461px",
            display: "flex",
            alignItems: "center",
            gap: "52px",
          }}
        >
          <Box
            sx={{
              width: "346px",
              height: "564px",
              backgroundColor: "#F6F6F6",
              border: "2px solid",
              borderRadius: "15px",
              borderColor: "colors.greyStrock",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={adImage}
              sx={{
                width: "204px",
                height: "172px",
              }}
            />
          </Box>
          <UploadButton
            title="Upload a New Advertisement Image"
            overridestyle={{
              width: "461px",
              height: "92px",
              borderRadius: "15px",
            }}
          />
        </Stack>
        <Stack
          sx={{
            width: "528px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "800",
              lineHeight: "27px",
              color: "colors.greyLabels",
              mt: "18px",
            }}
          >
            {t("Seller Name")}
          </Typography>
          <TextField
            sx={{
              height: "57px",
              borderRadius: "5px",
              border: "3px solid",
              borderColor: "colors.mainGreen",
              "& input": {
                height: "53px",
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "77px",
                color: "colors.mainBlack",
                p: "0 50px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "0",
                },
              },
              mt: "35px",
              mb: "72px",
            }}
            defaultValue={t("Seller Name")}
          />
          <Stack
            sx={{
              gap: "18px",
            }}
          >
            <StyledTextField
              value={sectionInput ? sectionValue : "أضف قسم"}
              //   placeholder="أضف قسم"
              InputProps={
                {
                  // readOnly: !sectionInput,
                }
              }
              active={sectionInput.toString()}
              onChange={handleSectionInputChange}
              onClick={handleSectionInputClick}
              onBlur={handleSectionBlur}
            >
              أضف
            </StyledTextField>
            <StyledTextField defaultValue="أضف بائع"></StyledTextField>
            <StyledTextField defaultValue="أضف منتج"></StyledTextField>
          </Stack>
          <Button
            sx={{
              width: "461px",
              height: "92px",
              borderRadius: "15px",
              fontSize: "32px",
              fontWeight: "800",
              lineHeight: "36px",
              mt: "73px",
              mx: "auto",
              "&, &:hover": {
                backgroundColor: "colors.mainGreen",
                color: "colors.wi8",
              },
            }}
          >
            اضف
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AdminAddAd;
