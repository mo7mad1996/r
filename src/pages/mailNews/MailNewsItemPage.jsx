import React from "react";
import SectionTitle from "../../sections/common/Products/SectionTitle";
import { Box, Stack, Typography, styled } from "@mui/material";

import img1 from "../../assets/mailNews/mail1.png";
import img2 from "../../assets/mailNews/mail2.png";

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "800",
  lineHeight: "33px",
  color: theme.palette.colors.darkIcons,
  textAlign: "center",
}));
const StyledCard = styled(Box)(({ theme }) => ({
  width: "583px",
  //   height: "307px",
  backgroundColor: "#F6F6F6",
  borderRadius: "15px",
  border: "2px solid",
  borderColor: theme.palette.colors.greyStrock,
  padding: "17px 40px 66px 86px",
  "& p": {
    fontSize: "18px",
    fontWeight: "800",
    lineHeight: "20px",
    color: theme.palette.colors.greyStrock,
  },
}));
const MailNewsItemPage = () => {
  return (
    <>
      <SectionTitle sectionTitle={{ main: "عرض نشرة بريدية" }} />
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "700",
          lineHeight: "33px",
          textAlign: "center",
          color: "colors.website",
          mt: "-95px",
          mb: "92px",
        }}
      >
        الخميس , 10:30 م, 31 اغسطس 2023
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "92px",
        }}
      >
        {/* right  */}
        <Stack
          sx={{
            mt: "19px",
          }}
        >
          <Box
            component="img"
            src={img1}
            sx={{
              width: "500px",
              height: "592px",
            }}
          />
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "800",
              lineHeight: "33px",
              mb: "41px",
              mt: "119px",
            }}
          >
            شاشة LG Smart 60
          </Typography>
          <Box
            sx={{
              width: "495px",
              height: "402px",
              borderRadius: "15px",
              border: "2px solid",
              borderColor: "colors.greyStrock",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "54px",
            }}
          >
            <Box
              component="img"
              src={img2}
              sx={{
                width: "100%",
                // height: "583px",
              }}
            />
          </Box>
          <StyledCard
            sx={{
              height: "307px",
              py: "43px",
            }}
          >
            <Typography>خصم 10 % على الشاشات Smart</Typography>
          </StyledCard>
        </Stack>
        {/* left  */}
        <Stack
          sx={{
            width: "fit-content",
            gap: "70px",
          }}
        >
          <Stack>
            <StyledTitle
              sx={{
                // fontSize: "30px",
                // fontWeight: "800",
                // lineHeight: "33px",
                // color: "colors.darkIcons",
                // textAlign: "center",
                mb: "24px",
              }}
            >
              أخبار الأقتصاد
            </StyledTitle>
            <StyledCard
              sx={{
                height: "543px",
              }}
            >
              <Typography>
                لماذا ترضى بالعادي عندما يمكنك الحصول على الاستثنائي؟ مجموعتنا
                الأخيرة من التلفزيونات تجمع بين أحدث التقنيات مع تصميمات أنيقة
                لإعادة تعريف تجربة الترفيه في منزلك.
              </Typography>
              <Typography>
                🌈 صور مذهلة: شاهد كل تفاصيل الحياة بألوانها الزاهية، وتبايناتها
                الحادة، ودقتها الفائقة. تلفزيوناتنا تتميز بأحدث تقنيات العرض،
                مما يضمن تجربة مشاهدة مفعمة بالغموض.
              </Typography>
              <Typography>
                <Box component="img" src="" />
                🔊 صوت ديناميكي: اشعر بنبض كل مشهد مع أنظمتنا المتقدمة للصوت. من
                مشاهد الحركة الرائعة إلى التفاصيل الدقيقة في ال diالوج، تقدم
                تلفزيوناتنا تجربة صوتية تكمل الصورة المذهلة.
              </Typography>
            </StyledCard>
          </Stack>
          <Stack>
            <StyledTitle
              sx={{
                mb: "24px",
              }}
            >
              اخبار چوملا الجديدة{" "}
            </StyledTitle>
            <StyledCard
              sx={{
                height: "307px",
              }}
            >
              <Typography>أنتظرو تطبيق موقع چوملا</Typography>
            </StyledCard>
          </Stack>
          <Stack>
            <StyledTitle
              sx={{
                mb: "24px",
              }}
            >
              خصومات چوملا{" "}
            </StyledTitle>
            <StyledCard
              sx={{
                height: "307px",
                py: "76px",
                "& p": {
                  fontSize: "22px!important",
                  fontWeight: "700!important",
                  lineHeight: "25px!important",
                  textAlign: "center!important",
                  color: "#292D32!important",
                },
              }}
            >
              <Typography>الأربعاء , 6 ديسمبر ,5:35 pm </Typography>
              <Typography
                sx={{
                  mt: "26px",
                  mb: "6px",
                }}
              >
                {t("Use")} {t("Code")}:{" "}
                <Typography
                  variant="span"
                  sx={{
                    color: "colors.website",
                  }}
                >
                  SM2005
                </Typography>
              </Typography>
              <Typography sx={{ mb: "20px" }}>
                {" "}
                {t("To Get a Discount")}50
              </Typography>
              <Typography>{t("This code is valid for")} 3 ايام</Typography>{" "}
            </StyledCard>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default MailNewsItemPage;
