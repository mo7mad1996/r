import {
  AppBar,
  Box,
  Button,
  Container,
  InputBase,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";

import locationImage from "/location.png";
import cartImage from "/cart.png";
import searchImage from "/search.png";

import { navItems } from "../utils/navItems";
import { useContext, useState } from "react";
import useShowModal from "../hooks/useShowModal";
import ModalComponent from "./ModalComponent";
import DateFilter from "./DateFilter";
import AddressPopup from "../sections/Address/AddressPopup";
import { Context } from "./Context/Context";
// const Logo = styled(Typography)({
//   fontSize: "60px",
//   fontWeight: 800,
//   lineHeight: "67px",
//   textAlign: "right",
//   color: "#292D32",
//   marginLeft: "16px",
//   letterSpacing: "0em",
// });
// const LogoSpan = styled("span")({
//   color: "#008C5D",
// });
const LocationIcon = styled("img")({
  marginLeft: "3px",
});
const Search = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "60px",
  flex: "1",
  border: "2px solid",
  borderColor: theme.palette.colors.website,
  borderRadius: "5px",
  marginLeft: "13px",
}));
const Language = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "22px",
  fontWeight: "800",
  lineHeight: "25px",
  letterSpacing: "0em",
  textAlign: "right",
  color: theme.palette.colors.mainBlack,
  cursor: "pointer",
}));
const ShoppingCart = styled(Stack)({
  position: "relative",
});
const UserBox = styled(Stack)({
  color: "colors.mainBlack",
});

const Nav = styled(Stack)({
  padding: "12px 16px",
  color: "colors.wi8",
  backgroundColor: "#5B5B5B",
  flexDirection: "row",
  gap: "20px",
});
const NavItem = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.colors.wi8,
  fontSize: "16px",
  fontWeight: "800",
  lineHeight: "17.86px",
  letterSpacing: "0em",
  textAlign: "right",
}));
const langs = ["AR", "EN"];

const Header = () => {
  let navigate = useNavigate();
  const [lang, setLang] = useState(langs[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const { userName } = useContext(Context);

  function handleLogout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  }

  const [profile, setProfile] = useState(false);
  const {
    open: openModal,
    handleOpen: handleOpenModal,
    handleClose: handleCloseModal,
  } = useShowModal();

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
      <AppBar
        position="static"
        sx={{
          backgroundColor: "colors.wi8",
          py: "10px",
          boxShadow: "0",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <Box
                sx={{
                  marginLeft: "16px",

                  //   width: "169px",
                  //   height: "50px",
                }}
              >
                {/* <Logo>
                  <LogoSpan>چ</LogoSpan>وملا
                </Logo> */}
                <Logo />
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                  fontWeight: "800",
                  lineHeight: "16px",
                  letterSpacing: "0em",
                  textAlign: "right",
                  color: "colors.darkIcons",
                  mx: "16px",
                  cursor: "pointer",
                }}
                onClick={handleOpenModal}
              >
                التوصيل إلى{" "}
                <Box>
                  <LocationIcon src={locationImage} />
                  القاهرة
                </Box>
              </Box>
            </Stack>
            <Search>
              {/* <TextField id="outlined-basic" variant="filled" /> */}
              <InputBase
                placeholder="ابحث عن منتجك هنا"
                sx={{
                  position: "relative",
                  padding: "20px",
                  flex: "1",
                  fontSize: "28px",
                }}
              />
              <Box
                sx={{
                  // width: "44.88px",
                  // height: "44.96px",
                  height: "100%",
                  width: "75px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "colors.website",
                }}
              >
                {/* <SearchIcon
                sx={{
                    //   width: "44.88px",
                    //   height: "44.96px",
                    fontSize: "47px",
                    fontWeight: "800",
                    // backgroundColor: "#007A4A",
                    color: "colors.wi8",
                }}
            /> */}
                <Box component={"img"} src={searchImage} alt="" />
              </Box>
            </Search>
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <Language>
                {lang}
                <ArrowDropDownIcon
                  sx={{ fontSize: "40px", mr: "-5px" }}
                  id="choose-lang"
                  aria-controls={open ? "choose-lang-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Language>
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
              {localStorage.getItem("userId") ? (
                <UserBox sx={{ position: "relative" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "800",
                      lineHeight: "13px",
                      letterSpacing: " 0em",
                      color: "#000",
                    }}
                  >
                    مرحبا {userName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      fontSize: "14px",
                      fontWeight: " 800",
                      lineHeight: "16px",
                      color: "#000",
                    }}
                  >
                    حسابي
                    <ArrowDropDownIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setProfile(!profile);
                      }}
                      sx={{ fontSize: "30px", mr: "-5px" }}
                    />
                  </Box>

                  {profile && (
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#ccc",
                        color: "#000",
                        borderRadius: "10px",
                        position: "absolute",
                        top: "100%",
                        right: "-30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to={"/Login"} onClick={handleLogout}>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#000" }}
                        >
                          تسجيل الخروج{" "}
                        </Button>
                      </Link>
                    </Box>
                  )}
                </UserBox>
              ) : (
                <Button
                  variant="outlined"
                  sx={{
                    display: "block",
                    //   py: "10px",
                    height: "55px",
                    color: "colors.mainBlack",
                    mr: "24px",
                    ml: "18px",
                    //   outline: "colors.mainBlack",
                    borderColor: "colors.mainBlack",
                    borderRadius: "5px solid",
                    fontSize: "14px",
                    fontWeight: "800",
                    lineHeight: "15.62px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    "&:hover": {
                      borderColor: "colors.mainGreen",
                    },
                  }}
                  onClick={() => navigate("/signup")}
                >
                  تسجيل دخول
                </Button>
              )}

              <ShoppingCart>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "800",
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    // color: "#007A4A",
                    // color: (theme) => theme.palette.colors.website,
                    color: "colors.website",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  0
                </Typography>
                <Box
                  component={"img"}
                  src={cartImage}
                  onClick={() => navigate("/cart")}
                  sx={{
                    cursor: "pointer",
                  }}
                ></Box>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                    lineHeight: "16px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "colors.mainBlack",
                  }}
                >
                  عربة التسوق
                </Typography>
              </ShoppingCart>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Nav>
        <NavItem
          to={"/menu"}
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <MenuIcon />
          القائمة
        </NavItem>
        {navItems.map((item) => (
          <NavItem to={item.path} key={item.title}>
            {item.title}
          </NavItem>
        ))}
      </Nav>
      <ModalComponent
        open={openModal}
        handleOpen={handleOpenModal}
        handleClose={handleCloseModal}
      >
        <AddressPopup handleClose={handleCloseModal} />
      </ModalComponent>
    </>
  );
};

export default Header;
