import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

import adImage from "../../../assets/admin/ads/ad.png";
import UploadButton from "../../../components/UploadButton";

const AdminAddSection = () => {
  return (
    <Stack
      sx={{
        width: "1221px",
        mx: "auto",
        mb: "200px",
      }}
    >
      <SectionTitle sectionTitle={{ main: "اضافة قسم جديد" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* add image  */}
        <Stack
          sx={{
            width: "461px",
            display: "flex",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "500px",
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
                width: "336px",
                height: "291px",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "800",
              lineHeight: "36px",
              color: "colors.mainBlack",
            }}
          >
            أضف صورة القسم
          </Typography>
          <UploadButton
            title="أضف صورة القسم"
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
              color: "colors.mainBlack",
              textAlign: "center",
              mt: "18px",
            }}
          >
            اسم القسم
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
                color: "colors.greyLabels",
                p: "0 30px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "0",
                },
              },
              mt: "35px",
              //   mb: "72px",
            }}
            defaultValue={"اسم القسم"}
          ></TextField>
          <Button
            sx={{
              width: "461px",
              height: "92px",
              borderRadius: "15px",
              fontSize: "32px",
              fontWeight: "800",
              lineHeight: "36px",
              mt: "84px",
              mx: "auto",
              "&, &:hover": {
                backgroundColor: "colors.mainGreen",
                color: "colors.wi8",
              },
            }}
          >
            حفظ
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AdminAddSection;
