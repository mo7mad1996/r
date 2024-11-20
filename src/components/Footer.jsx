import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, styled } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Logo from "./Logo";
import faceIcon from "../assets/home/face.png";
import callIcon from "/phone.png";
import instaIcon from "../assets/home/insta.png";
import whatsIcon from "../assets/home/whats.png";
import emailIcon from "/email.png";
import phoneIcon from "../assets/home/phone.png";
import mobileIcon from "/mobile.png";

const langs = ["اللغة العربية", "اللغة الانجليزية"];

const LinkItem = styled(Link)(({ theme }) => ({
  color: theme.palette.colors.wi8,
  marginBottom: "10px",
  fontSize: "20px",
  fontWeight: "800",
  lineHeight: "22.32px",
  letterSpacing: "0em",
  textDecoration: "none",
  cursor: "pointer",
  //   textAlign: "right",
}));
const Item = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  textAlign: "right",
});
const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#2a2a2a",
  color: theme.palette.colors.wi8,
  textAlign: "center",
  paddingTop: "45px",
  paddingBottom: "50px",
  paddingRight: "40px",
  paddingLeft: "40px",
}));
const Footer = () => {
  const [lang, setLang] = useState(langs[0]);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  // language menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          height: "135px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          backgroundColor: "colors.wi8",
        }}
      >
        <Link to={""}>
          <Box
            component={"img"}
            sx={{ width: "60px", height: "60px" }}
            src={phoneIcon}
          ></Box>
        </Link>
        <Link to={""}>
          <Box
            component={"img"}
            sx={{ width: "60px", height: "60px" }}
            src={instaIcon}
          ></Box>
        </Link>
        <Link to={""}>
          <Box
            component={"img"}
            sx={{ width: "60px", height: "60px" }}
            src={whatsIcon}
          ></Box>
        </Link>
        <Link to={""}>
          <Box
            component={"img"}
            sx={{ width: "60px", height: "60px" }}
            src={faceIcon}
          ></Box>
        </Link>
      </Box>
      <Stack
        sx={{
          backgroundColor: "#b8aeae",
          flexDirection: { sm: "row" },
          flexWrap: "wrap",
          gap: "5px",
          "& > div": {
            minHeight: "525px",
            // maxWidth: { md: "500px" },
            // width: { md: "370px" },
            // maxWidth: { md: "370px" },
          },
          "& > div:nth-of-type(1)": {
            width: { sm: "100%" },
            // width: "50%",
            flex: { xl: "1" },
          },
          "& > div:nth-of-type(2), & > div:nth-of-type(3)": {
            // width: "50%",
            flex: { sm: "1" },
          },
          "& > div:nth-of-type(4)": {
            width: { sm: "100%" },
            flex: { md: "1" },
          },
        }}
      >
        <StyledBox>
          <Typography
            sx={{ mb: "39px", fontSize: "22px", lineHeight: "24.55px" }}
          >
            عن چوملا
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "800",
              // lineHeight: "22.32px",
              // textAlign: "center",
              mb: "51px",
            }}
          >
            چوملا سوق تجاري مصري يشمل ويعرض جميع انواع البضائع التى يصرح بها
            القانون المصري.
          </Typography>

          <Stack>
            <LinkItem>سياسة الخصوصية</LinkItem>
            <LinkItem>سياسة إرجاع المنتجات</LinkItem>
            <LinkItem to={"/terms-and-conditions"}>شروط و أحكام چوملا</LinkItem>
          </Stack>
          <Box
            sx={{
              position: "absolute",
              bottom: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              mt: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "colors.wi8",
              width: "calc(100% - 18px)",
              maxWidth: "500px",
              height: "100px",
              gap: "24px",
            }}
          >
            <Link>
              <Box
                component={"img"}
                src={phoneIcon}
                sx={{ width: "60px", height: "60px" }}
              ></Box>
            </Link>
            <Link>
              <Box
                component={"img"}
                src={instaIcon}
                sx={{ width: "60px", height: "60px" }}
              ></Box>
            </Link>
            <Link>
              <Box
                component={"img"}
                src={whatsIcon}
                sx={{ width: "60px", height: "60px" }}
              ></Box>
            </Link>
            <Link>
              <Box
                component={"img"}
                src={faceIcon}
                sx={{ width: "60px", height: "60px" }}
              ></Box>
            </Link>
          </Box>
        </StyledBox>
        <StyledBox>
          <Typography
            sx={{ mb: "39px", fontSize: "22px", lineHeight: "24.55px" }}
          >
            حسابي{" "}
          </Typography>
          {/* <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "800",
            // lineHeight: "22.32px",
            // textAlign: "center",
            mb: "51px",
          }}
        >
          چوملا سوق تجاري مصري يشمل ويعرض جميع انواع البضائع التى يصرح بها
          القانون المصري.
        </Typography> */}
          {/* <List
          disablePadding
          sx={{
            m: "0",
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "22.32px",
            textAlign: "center",
            // display: "flex",
            // flexDirection: "column",
            // gap: "2px",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <ListItem>
            <ListItemButton disableGutters sx={{ m: "0px" }}>
              سياسة الخصوصية
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableGutters sx={{ m: "0px" }}>
              سياسة إرجاع المنتجات
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableGutters sx={{ m: "0px" }}>
              شروط و أحكام چوملا
            </ListItemButton>
          </ListItem>
        </List> */}
          <Stack>
            <LinkItem to={"/my-account"}>حسابك</LinkItem>
            <LinkItem to={"/user/orders"}>طلباتك</LinkItem>
            <LinkItem to={"/cart"}>سلة المشتريات</LinkItem>
            <LinkItem to={"/store/favourite"}>قائمة الرغبات</LinkItem>
            <LinkItem to={"/user/address"}>عناوينك</LinkItem>
            <LinkItem>المساعدة للعملاء</LinkItem>
          </Stack>
        </StyledBox>
        <StyledBox>
          <Typography
            sx={{ mb: "39px", fontSize: "22px", lineHeight: "24.55px" }}
          >
            بائعين چوملا{" "}
          </Typography>

          <Stack>
            <LinkItem to={"/signup-seller"}>بيع على چوملا</LinkItem>
            <LinkItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Box component={"img"} src={mobileIcon} alt="" />
              حمل تطبيق بائعين چوملا
            </LinkItem>
            <LinkItem>المساعدة للبائعين</LinkItem>
          </Stack>
        </StyledBox>
        <StyledBox>
          <Typography
            sx={{ mb: "39px", fontSize: "22px", lineHeight: "24.55px" }}
          >
            خدمة العملاء{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "800",
              // lineHeight: "22.32px",
              // textAlign: "center",
              mb: "51px",
            }}
          >
            نحن هنا دائما لخدمتك يمكنك الاتصال بنا من خلال الطرق التالية{" "}
          </Typography>

          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textAlign: "right",
                color: "colors.wi8",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "800",
                lineHeight: "22.32px",
              }}
            >
              <Box component={"img"} src={callIcon} alt="" />
              رقم الهاتف 01155123609{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textAlign: "right",
                color: "colors.wi8",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "800",
                lineHeight: "22.32px",
              }}
            >
              <Box component={"img"} src="chat.png" alt="" /> المحادثة الفورية{" "}
              <Box
                component={Link}
                to="#"
                sx={{ color: "colors.wi8", textDecoration: "none" }}
              >
                اضغط هنا
              </Box>{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                // flexDirection: "column",
                gap: "5px",
                // textAlign: "right",
                color: "colors.wi8",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "800",
                lineHeight: "22.32px",
              }}
            >
              <Box component={"img"} src={emailIcon} alt="" />
              <Box sx={{ textAlign: "right" }}>
                بريد أليكتروني :{" "}
                <Box
                  component={Link}
                  sx={{
                    color: "colors.wi8",
                    textDecorationColor: "colors.wi8",
                    display: "block",
                    mt: "5px",
                  }}
                >
                  support@joumla-eg.com
                </Box>
              </Box>
            </Box>
            <LinkItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textAlign: "right",
              }}
            >
              <Box component={"img"} src={mobileIcon} alt="" />
              حمل تطبيق چوملا{" "}
            </LinkItem>
          </Stack>
        </StyledBox>
      </Stack>
      <Stack sx={{ flexDirection: "row" }}>
        <Box
          sx={{
            height: "135px",
            display: "flex",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "colors.wi8",
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            height: "135px",
            display: "flex",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#787878",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "5px",
              border: "1px solid black",
              height: "40px",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "colors.wi8",
                height: "100%",
                display: "flex",
                alignItems: "center",
                px: { xs: "5px", sm: "34px" },
                fontSize: "20px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                fontWeight: "800",
                lineHeight: "22.32px",
                letterSpacing: "0em",
              }}
            >
              {lang}
            </Typography>
            <ArrowDropDownIcon
              sx={{ fontSize: "40px", cursor: "pointer" }}
              id="choose-lang"
              aria-controls={open ? "choose-lang-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </Stack>
          {/* menu  */}
          <Menu
            id="choose-lang-menu"
            aria-labelledby="choose-lang"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {langs.map((lang) => (
              <MenuItem
                key={lang}
                onClick={() => {
                  setLang(lang);
                  handleClose();
                }}
              >
                {lang}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
    </>
  );
};
export default Footer;
