import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// components
import * as MUI from "@mui/material";
import Logo from "~/components/Logo";
import MobileComponents from "./MobileComponents";
import PerfectScrollbar from "react-perfect-scrollbar";

// icons
import SearchIcon from "@mui/icons-material/Search";

// assets
import locationImage from "/location.png";
import cartImage from "/cart.png";

// css
import css from "./style.module.css";

import { navItems } from "~/utils/navItems";
import useShowModal from "~/hooks/useShowModal";
import ModalComponent from "~/components/ModalComponent";
import AddressPopup from "~/sections/Address/AddressPopup";
import useApi from "@/hooks/useApi";
import MobileModal from "./MobileModal";
const LocationIcon = MUI.styled("img")({
  marginLeft: "3px",
});
const Search = MUI.styled(MUI.Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  flex: "1",
  border: "2px solid",
  borderRadius: "5px",
  overflow: "hidden",
  borderColor: theme.palette.colors.website,
}));
const ShoppingCart = MUI.styled(MUI.Stack)({
  position: "relative",
});

const Nav = MUI.styled(MUI.Stack)({
  padding: "12px 16px",
  color: "colors.wi8",
  position: "sticky",
  top: "0",
  zIndex: "2",
  backgroundColor: "#5B5B5B",
  flexDirection: "row",
  gap: "20px",
});
const NavItem = MUI.styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.colors.wi8,
  fontSize: "16px",
  letterSpacing: "0em",
  textAlign: "right",
}));

const Header = () => {
  // config
  const api = useApi();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    open: openModal,
    handleOpen: handleOpenModal,
    handleClose: handleCloseModal,
  } = useShowModal();

  // data
  const [location, setLocation] = useState(null);

  // methods

  const getLocation = async () => {
    try {
      const res = await api.get("/users/address/default");
      const data = res.data.address;
    } catch (err) {
      console.error(err);
    }
  };

  // on component render
  useEffect(() => {
    getLocation();
  }, []);

  // render
  return (
    <>
      {/* first section */}
      <MUI.AppBar
        position="static"
        sx={{
          backgroundColor: "colors.wi8",
          py: "10px",
          boxShadow: "0",
        }}
      >
        <MUI.Container maxWidth="xl">
          <MUI.Toolbar
            disableGutters
            sx={{
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            <MUI.Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <Logo />

              {location && (
                <MUI.Box
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
                  {t("Delivery to")}{" "}
                  <MUI.Box>
                    <LocationIcon src={locationImage} />
                    {location?.governorate}
                  </MUI.Box>
                </MUI.Box>
              )}
            </MUI.Stack>
            <Search>
              <MUI.InputBase
                placeholder={t("Find your product here")}
                sx={{
                  position: "relative",
                  flex: "1",
                  px: 2,
                }}
              />
              <MUI.Box
                component="button"
                type="submit"
                sx={{ backgroundColor: "colors.website" }}
                className={css.btn}
              >
                <SearchIcon />
              </MUI.Box>
            </Search>

            <MUI.Toolbar
              sx={{
                gap: "1em",
                justifyContent: "space-between",
                pr: "0 !important",
                pl: "0 !important",
                display: { xs: "none", md: "flex" },
              }}
            >
              <MUI.Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                <MobileComponents />
              </MUI.Stack>

              <ShoppingCart>
                <MUI.Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "400",
                    textAlign: "center",
                    color: "colors.website",
                    position: "absolute",
                    transform: "translate(-4px,-50%)",
                    inset: 0,
                  }}
                >
                  0
                </MUI.Typography>
                <MUI.Box
                  component={"img"}
                  src={cartImage}
                  onClick={() => navigate("/cart")}
                  sx={{
                    cursor: "pointer",
                    height: "30px",
                    objectFit: "contain",
                  }}
                ></MUI.Box>
                <MUI.Typography
                  variant="body"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                    lineHeight: "16px",
                    textAlign: "center",
                    color: "colors.mainBlack",
                  }}
                >
                  {t("cart")}
                </MUI.Typography>
              </ShoppingCart>
            </MUI.Toolbar>

            <MobileModal />
          </MUI.Toolbar>
        </MUI.Container>
      </MUI.AppBar>

      {/* nav section */}
      <Nav>
        <PerfectScrollbar style={{ width: "100%" }}>
          <div className={css.flex}>
            {navItems.map((item) => (
              <NavItem to={item.path} key={item.title} className={css.navItem}>
                <MUI.Box component={item.icon} />
                {t(item.title)}
              </NavItem>
            ))}
          </div>
        </PerfectScrollbar>
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
