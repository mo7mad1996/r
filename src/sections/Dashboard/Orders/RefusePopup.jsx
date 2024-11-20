import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBox, CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import Logo from "../../../components/Logo";

const RefusePopup = ({ handleClose }) => {
  const [value, setValue] = useState(0);
  return (
    <Stack
      sx={{
        // width: "fit-content",
        width: "985px",
        // height: "706px",
        padding: "27px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo secondary={true} />

        <Box
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            color: "colors.mainBlack",
            marginRight: "auto",
          }}
        >
          <Close
            sx={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
        </Box>
      </Box>
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "800",
            lineHeight: "31px",
            color: "colors.mainBlack",
            textAlign: "center",
            my: "59px",
            // mb: "50px",
          }}
        >
          سبب الرفض{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "204px",
          }}
        >
          <Stack
            sx={
              {
                // gap: "36px",
              }
            }
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                disableRipple
                sx={{
                  borderRadius: "5px",
                  color: "colors.mainGreen",
                  fontSize: "20px",
                  "&.Mui-checked": {
                    color: "colors.mainGreen",
                  },
                  "& svg": {
                    fontSize: "30px",
                  },
                }}
                onClick={() => setChecked(1)}
              />
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "27px",
                  color: "colors.mainGreen",
                }}
              >
                غير متوفر في المخزون
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                disableRipple
                sx={{
                  borderRadius: "5px",
                  color: "colors.mainGreen",
                  fontSize: "20px",
                  "&.Mui-checked": {
                    color: "colors.mainGreen",
                  },
                  "& svg": {
                    fontSize: "30px",
                  },
                }}
                onClick={() => setChecked(1)}
              />
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "27px",
                  color: "colors.mainGreen",
                }}
              >
                المنتج في حالة تحديث سعر{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                disableRipple
                sx={{
                  borderRadius: "5px",
                  color: "colors.mainGreen",
                  fontSize: "20px",
                  "&.Mui-checked": {
                    color: "colors.mainGreen",
                  },
                  "& svg": {
                    fontSize: "30px",
                  },
                }}
                onClick={() => setChecked(1)}
              />
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "27px",
                  color: "colors.mainGreen",
                }}
              >
                المنتج سيصل قريبا{" "}
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              gap: "27px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "800",
                lineHeight: "22px",
                color: "colors.greyLabels",
              }}
            >
              اكتب أسباب أخري للرفض
            </Typography>
            <TextField
              multiline
              rows={4}
              sx={{
                width: "342px",
                backgroundColor: "colors.liteGrey",
                "& input": {
                  width: "342px",
                  //   height: "189px",
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "colors.greyIcons",
                },
                "& .MuiOutlinedInput-root, &:hover fieldset, &:hover fieldset":
                  {
                    "& fieldset": {
                      border: "1px solid",
                      borderColor: "colors.greyIcons",
                    },
                    //   "&:hover fieldset": {
                    //     border: "1px solid",
                    //     borderColor: "colors.greyIcons",

                    //     // borderColor: `${theme.palette.colors.mainGreen} !important`,
                    //   },
                    //   "&.Mui-focused fieldset": {
                    //     // border: "0",
                    //     border: "1px solid",
                    //     borderColor: "colors.greyIcons",

                    //   },
                  },
              }}
            />
          </Stack>
        </Box>
        <Button
          sx={{
            width: "233px",
            height: "57px",
            backgroundColor: "colors.mainGreen",
            borderRadius: "12px",
            color: "colors.wi8",
            fontSize: "25px",
            fontWeight: "800",
            lineHeight: "28px",
            textAlign: "center",
            mt: "105px",
            mb: "88px",
            "&:hover": {
              backgroundColor: "colors.mainGreen",
            },
          }}
        >
          إرسال{" "}
        </Button>
      </Stack>
    </Stack>
  );
};

export default RefusePopup;
