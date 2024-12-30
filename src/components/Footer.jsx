import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, styled } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Logo from "./Logo";
import faceIcon from "../assets/home/face.png";
import callIcon from "/phone.png";
import instaIcon from "../assets/home/insta.png";
import whatsIcon from "../assets/home/whats.png";
import emailIcon from "/email.png";
import phoneIcon from "../assets/home/phone.png";
import mobileIcon from "/mobile.png";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";

const langs = ["AR", "EN"];

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
  const { t } = useTranslation();
  const [lang, setLang] = useLocalStorage("lang", "EN");
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
            {t("About Joumla")}
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
            {t("______long____text______")}
          </Typography>

          <Stack>
            <LinkItem>{t("Privacy Policy")}</LinkItem>
            <LinkItem>{t("Product Return Policy")}</LinkItem>
            <LinkItem to={"/terms-and-conditions"}>
              {t("Joumla Terms and Conditions")}
            </LinkItem>
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
            {t("my account")}
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
            {t("______long____text______")}
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
              {t("Privacy Policy")}
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableGutters sx={{ m: "0px" }}>
              {t("Product Return Policy")}
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableGutters sx={{ m: "0px" }}>
              {t("Joumla Terms and Conditions")}
            </ListItemButton>
          </ListItem>
        </List> */}
          <Stack>
            <LinkItem to={"/my-account"}>{t("your account")}</LinkItem>
            <LinkItem to={"/user/orders"}>{t("Your Orders")}</LinkItem>
            <LinkItem to={"/cart"}>{t("Shopping Cart")}</LinkItem>
            <LinkItem to={"/store/favourite"}>{t("Wishlist")}</LinkItem>
            <LinkItem to={"/user/address"}>{t("Your Addresses")}</LinkItem>
            <LinkItem>{t("Customer Support")}</LinkItem>
          </Stack>
        </StyledBox>
        <StyledBox>
          <Typography
            sx={{ mb: "39px", fontSize: "22px", lineHeight: "24.55px" }}
          >
            {t("Joumla sellers")}
          </Typography>

          <Stack>
            <LinkItem to={"/signup-seller"}>{t("signup-seller")}</LinkItem>
            <LinkItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Box component={"img"} src={mobileIcon} alt="" />
              {t("Download the Joumla Sellers App")}
            </LinkItem>
            <LinkItem>{t("Seller Assistance")}</LinkItem>
          </Stack>
        </StyledBox>
        <StyledBox>
          <Typography
            sx={{ mb: "39px", fontSize: "22px", lineHeight: "24.55px" }}
          >
            {t("Customer Service")}
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
            {t(
              "We are always here to serve you. You can contact us through the following methods."
            )}
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
              {t("Phone Number")} 01155123609
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
              <Box component={"img"} src="chat.png" alt="" /> {t("Live Chat")}{" "}
              <Box
                component={Link}
                to="#"
                sx={{ color: "colors.wi8", textDecoration: "none" }}
              >
                {t("Click Here")}
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
                {t("Email")}:{" "}
                <Box
                  component={Link}
                  sx={{
                    color: "colors.wi8",
                    textDecorationColor: "colors.wi8",
                    display: "block",
                    mt: "5px",
                  }}
                >
                  support@Joumla-eg.com
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
              {t("Download the Joumla App")}
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
            {/* <ArrowDropDownIcon
              sx={{ fontSize: "40px", cursor: "pointer" }}
              id="choose-lang"
              aria-controls={open ? "choose-lang-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            /> */}
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
                {t(lang)}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
    </>
  );
};
export default Footer;
