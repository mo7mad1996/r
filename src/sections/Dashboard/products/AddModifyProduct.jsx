import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import SectionTitle from "../../../sections/common/Products/SectionTitle";

import defaultImg from "../../../assets/product/default.png";
import UploadButton from "../../../components/UploadButton";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: "800",
  lineHeight: "28px",
  color: "#292D32",
  width: "200px",
  textAlign: "end",
}));
const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "589px",
  height: "53px",
  borderRadius: "5px",
  border: "1px solid",
  borderColor: "colors.mainBlack",
  "& input": {
    height: "100%",
    fontSize: "22px",
    lineHeight: "25px",
    padding: "13px",
    color: theme.palette.colors.greyStrock,
    // color: `${theme.palette.colors.mainGreen} !important`,
    // height: "69px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&:hover fieldset": {
      // borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${theme.palette.colors.mainGreen} !important`,
    },
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  width: "239px",
  height: "56px",
  borderRadius: "5px",
  "&, &:hover": {
    color: theme.palette.colors.wi8,
    backgroundColor: theme.palette.colors.mainGreen,
  },
  fontSize: "25px",
  fontWeight: "800",
  lineHeight: "28px",
  margin: "auto",
}));
const CustomListItem = styled(ListItem)({
  "&, & > p": {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "22.32px",
    textAlign: "right",
    color: "#3B3A3A",
  },

  "& > p": {
    width: "149px",
  },
});
const StyledDimension = styled(Box)(({ theme }) => ({
  width: "125px",
  height: "30px",
  borderRadius: "5px",
  border: "1px solid",
  borderColor: theme.palette.colors.greyStrock,
  backgroundColor: theme.palette.colors.liteGrey,
  display: "flex",
  alignItems: "center",
  padding: "2px",
  "& p": {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "18px",
    minWidth: "60px",
  },
}));
const AddModifyProduct = ({ isNew = true, admin }) => {
  const navigate = useNavigate();
  return (
    <Stack>
      {/* product images  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "133px",
        }}
      >
        <Stack sx={{ gap: "52px" }}>
          <Box
            component="img"
            src={defaultImg}
            sx={{
              width: "237px",
              height: "188px",
            }}
          />
          <Box
            component="img"
            src={defaultImg}
            sx={{
              width: "237px",
              height: "188px",
            }}
          />
        </Stack>
        <Box
          component="img"
          src={defaultImg}
          sx={{
            width: "552px",
            height: "438px",
          }}
        />
      </Box>
      {/* upload  */}
      <Box
        sx={{
          mt: "180px",
          mb: "135px",
          mx: "auto",
        }}
      >
        <UploadButton title={isNew ? "إضافة صور المنتج" : "تغيير صور المنتج"} />
      </Box>
      {/* product info  */}
      <Stack sx={{ gap: "33px", mx: "auto" }}>
        <StyledBox sx={{}}>
          <StyledTypography sx={{}}>اسم المنتج</StyledTypography>
          <StyledTextField sx={{}} />
        </StyledBox>
        <StyledBox sx={{}}>
          <StyledTypography sx={{}}>السعر</StyledTypography>
          <StyledTextField sx={{}} />
        </StyledBox>
        <StyledBox sx={{}}>
          <StyledTypography
            sx={{
              position: "relative",
              "&::after": {
                content: "'(اختياري)'",
                display: "block",
                position: "absolute",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "27px",
                color: "colors.darkIcons",
                left: "0",
                top: "31px",
              },
            }}
          >
            السعر بعد الخصم
          </StyledTypography>
          <StyledTextField sx={{}} />
        </StyledBox>
        <StyledBox sx={{}}>
          <StyledTypography sx={{}}>القسم</StyledTypography>
          <StyledTextField
            sx={{
              position: "relative",
              "& .notranslate": {
                position: "absolute",
                top: "5px",
                left: "40px",
                display: "block",
                height: "52px",
                width: "1px",
                backgroundColor: "colors.mainBlack",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ExpandMore
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </StyledBox>
        <StyledBox sx={{}}>
          <StyledTypography
            sx={{
              position: "relative",
              "&::after": {
                content: "'(اختياري)'",
                display: "block",
                position: "absolute",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "27px",
                color: "colors.darkIcons",
                left: "0",
                top: "31px",
              },
            }}
          >
            الوسم
          </StyledTypography>
          {/* <StyledTextField sx={{}} /> */}
          {/* autocomplete  */}
          <Autocomplete
            multiple
            id="tags-standard"
            options={tags}
            getOptionLabel={(option) => option.title}
            defaultValue={[tags[0]]}
            // value={tags[0]}
            renderInput={(params) => (
              <TextField
                multiline
                sx={{
                  width: "589px",
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "colors.mainBlack",
                  minHeight: "53px!important",
                  // height: "100px",
                  "& input": {
                    height: "100%",
                    fontSize: "22px",
                    padding: "13px",
                    // color: `${theme.palette.colors.mainGreen} !important`,
                    // height: "69px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                      // borderColor: `${theme.palette.colors.mainGreen} !important`,
                    },
                    "&:hover fieldset": {
                      // borderColor: `${theme.palette.colors.mainGreen} !important`,
                    },
                    "&.Mui-focused fieldset": {
                      // borderColor: `${theme.palette.colors.mainGreen} !important`,
                    },
                  },
                  "& .MuiInputBase-root": {
                    top: "-4px",
                  },
                  // "& .MuiButtonBase-root": {
                  "& .MuiChip-root": {
                    width: "122px",
                    height: "30px",
                    borderRadius: "5px",
                    backgroundColor: "#d9d9d9",
                  },
                  "& .MuiChip-deleteIcon": {
                    // -webkit-tap-highlight-color: transparent;
                    // color: rgba(0, 0, 0, 0.26);
                    fontSize: "18px!important",
                    margin: "0 -5px 0 -6px!important",
                  },
                }}
                {...params}
                // variant="standard"
                // label="Multiple values"
                // placeholder="Favorites"
              />
            )}
          />
        </StyledBox>
      </Stack>

      <Stack sx={{ mt: "188px", mx: "auto" }}>
        <Typography
          sx={{
            width: "200px",
            textAlign: "end",
            fontSize: "25px",
            fontWeight: "800",
            lineHeight: "28px",
            color: "colors.mainBlack",
            mb: "20px",
          }}
        >
          {t("Sizes")}
        </Typography>
        <StyledBox
          sx={{
            mb: "49px",
          }}
        >
          <StyledTypography>المقاس</StyledTypography>
          <StyledTextField placeholder="المقاس" />
        </StyledBox>
        <StyledBox>
          <StyledTypography>السعر</StyledTypography>
          <StyledTextField placeholder="50 ج.م" sx={{ mb: "84px" }} />
        </StyledBox>
      </Stack>
      <CustomButton sx={{}}>اضافة مقاس جديد</CustomButton>
      <Stack sx={{ mt: "100px", mx: "auto" }}>
        <Typography
          sx={{
            width: "200px",
            textAlign: "end",
            fontSize: "25px",
            fontWeight: "800",
            lineHeight: "28px",
            color: "colors.mainBlack",
            mb: "20px",
          }}
        >
          الألوان
        </Typography>
        <StyledBox
          sx={{
            mb: "49px",
          }}
        >
          <StyledTypography>اللون</StyledTypography>
          <StyledTextField placeholder="اللون" />
        </StyledBox>
        <StyledBox sx={{ mb: "103px" }}>
          <StyledTypography>السعر</StyledTypography>
          <StyledTextField placeholder="50 ج.م" />
        </StyledBox>
      </Stack>
      <CustomButton sx={{}}>اضافة مقاس جديد</CustomButton>
      {/* product details  */}
      <Stack sx={{ mt: "83px", mb: "14px", mx: "auto", width: "800px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "25px",
            // mt: "83px",
            mb: "45px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "27.9px",
              color: "colors.website",
            }}
          >
            الكمية في المخزون
          </Typography>
          <Box
            // defaultValue={25}
            sx={{
              // "& .MuiOutlinedInput-root": {
              //   "& fieldset": {
              //     border: "none",
              //   },
              // },
              width: "141px",
              height: "46px",
              border: "1px solid #a5a5a5",
              borderRadius: "12px",
              // fontFamily: "Allerta Stencil",
              // lineHeight: "25.57px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#292D32",
              "& .MuiInputBase-root": {
                display: "block",
                width: "50px",
                mx: "auto",
                "& input": {
                  textAlign: "center",
                  fontWeight: "800",
                },
              },
            }}
          >
            <InputBase defaultValue={25} />
            {/* {25} */}
          </Box>
        </Box>
        <Stack
          sx={{
            width: { md: "940px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "800",
              lineHeight: "27.9px",
              letterSpacing: "0em",
              textAlign: "right",
              color: "colors.mainGreen",
              mb: "28px",
            }}
          >
            تفاصيل المنتج{" "}
          </Typography>
          <Box>
            <List>
              <CustomListItem>
                <Typography>الماركة :</Typography> lego
              </CustomListItem>
              <CustomListItem>
                <Typography>الخامة :</Typography> بلاستيك
              </CustomListItem>
              <CustomListItem>
                <Typography>اللون :</Typography> اسود
              </CustomListItem>
              <CustomListItem>
                <Typography>المقاس :</Typography> XL
              </CustomListItem>
              <CustomListItem>
                <Typography>الوزن :</Typography> gm
              </CustomListItem>
              <CustomListItem sx={{ display: "flex", alignItems: "start" }}>
                <Typography>الأبعاد :</Typography>{" "}
                <Box
                  sx={{
                    display: "flex",
                    gap: "31px",
                    flexWrap: "wrap",
                  }}
                >
                  <StyledDimension>
                    <Typography>طول :</Typography>
                    <InputBase />
                  </StyledDimension>
                  <StyledDimension>
                    <Typography>{t("Offer")} :</Typography>
                    <InputBase />
                  </StyledDimension>
                  <StyledDimension>
                    <Typography>إرتفاع :</Typography>
                    <InputBase />
                  </StyledDimension>
                  <StyledDimension
                    sx={{
                      width: "200px",
                    }}
                  >
                    <Typography sx={{ minWidth: "100px!important" }}>
                      وحدة الطول :
                    </Typography>
                    <InputBase />
                  </StyledDimension>
                </Box>
              </CustomListItem>
              <CustomListItem>
                <Typography>رقم الموديل :</Typography> 137
              </CustomListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
      {/* وصف المنتج  */}
      <Box
        sx={{
          // mt: { xs: "14px", lg: "5px" },
          mt: "14px",
          mb: admin ? "66px" : "116px",
          // pb: "67px",
          px: { md: "83px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "800",
            lineHeight: "39.06px",
            color: "colors.mainGreen",
            mb: "46px",
            mr: { lg: "48px" },
          }}
        >
          وصف المنتج
        </Typography>
        <Stack
          sx={{
            gap: "35px",

            borderRadius: "12px",
            // maxHeight: "280px",
            // overflowY: "auto",
            border: "3px solid #a5a5a5",
            p: "18px 26px 21px 58px",
            "& p": {
              fontSize: "20px",
              fontWeight: "800",
              lineHeight: "22.5px",
              color: "colors.mainBlack",
            },
          }}
        >
          <InputBase
            multiline
            sx={{
              "&, & input": {
                height: "266px",
              },
            }}
          />
        </Stack>
      </Box>
      {!admin && (
        <CustomButton
          sx={{
            mb: "50px",
          }}
        >
          ارسال للمراجعة
        </CustomButton>
      )}
      {admin && (
        <>
          {isNew ? (
            <CustomButton
              sx={{
                width: "265px",
                mb: "50px",
              }}
            >
              إضافة بائع{" "}
            </CustomButton>
          ) : (
            <CustomButton
              onClick={() => navigate("/admin/dashboard/add-seller")}
              sx={{
                width: "265px",
                mb: "50px",
              }}
            >
              تغيير بائع
            </CustomButton>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "45px",
              mb: "37px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "800",
                lineHeight: "25px",
                collor: "#292D32",
              }}
            >
              {t("Seller Name")}
            </Typography>
            <TextField
              defaultValue="صيرفي"
              sx={{
                width: "589px",
                height: "53px",
                p: "0",
                "& .MuiInputBase": {
                  p: "0",
                },
                "& input": {
                  p: "0 185px",
                  // textAlign: "center",
                  height: "100%",
                  fontSize: "24px",
                  lineHeight: "27px",
                  border: "1px solid #292D32",
                  borderRadius: "5px",
                },
                "& .MuiOutlinedInput-root": {
                  height: "59px!important",

                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            ></TextField>
          </Box>
          <CustomButton
            sx={{
              width: "265px",
              mb: "50px",
            }}
          >
            حفظ
          </CustomButton>
        </>
      )}
    </Stack>
  );
};

export default AddModifyProduct;
const tags = [
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
  { title: "بنطلون رجالي" },
  { title: "تيشرت رجالي" },
];
