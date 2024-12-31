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

const items = [
  {
    id: 0,
    name: "أضف قسم",
    title: "اسم القسم",
  },
  {
    id: 1,
    name: "أضف بائع",
    title: "Seller Name",
  },
  {
    id: 2,
    name: "أضف منتج",
    title: "اسم المنتج",
  },
];
const StyledButton = styled(Button)(({ theme }) => ({
  height: "60px",
  borderRadius: "10px",
  fontSize: "25px",
  fontWeight: "700",
  lineHeight: "77px",
  justifyContent: "start",
  padding: "0 50px",
  "&, &:hover": {
    backgroundColor: theme.palette.colors.mainGreen,
    color: theme.palette.colors.wi8,
  },
  // cursor: !active && "pointer",
  // "& .MuiOutlinedInput-root": {
  //   "& fieldset": {
  //     border: "0",
  //   },
  // },
}));
const AdminAddAd = () => {
  const [sectionValue, setSectionValue] = useState(0);
  const [currentItem, setCurrentItem] = useState(1);
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
            overrideStyle={{
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
          {items.map((item) => (
            <>
              {item.id == currentItem && (
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    lineHeight: "27px",
                    color: "colors.greyLabels",
                    mt: "18px",
                  }}
                >
                  {t(item.title)}
                </Typography>
              )}
              {item.id == currentItem && (
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
                  defaultValue={t(item.title)}
                ></TextField>
              )}
            </>
          ))}
          <Stack
            sx={{
              gap: "18px",
            }}
          >
            {items.map((item) => (
              <StyledButton
                key={item.id}
                onClick={() => setCurrentItem(item.id)}
              >
                {t(item.name)}
              </StyledButton>
            ))}
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
