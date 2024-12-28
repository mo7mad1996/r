import { useState, useContext, useEffect } from "react";
import { Context } from "~/components/Context/Context";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";

// components
import * as MUI from "@mui/material";
import AuthBtns from "./AuthBtns";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// styled components
const Language = MUI.styled(MUI.Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "22px",
  fontWeight: "800",
  lineHeight: "25px",
  letterSpacing: "0em",
  textAlign: "right",
  cursor: "pointer",
  color: theme.palette.colors.mainBlack,
}));

export default function MobileComponents() {
  // config
  const { t, i18n } = useTranslation();
  const { user } = useContext(Context);

  // data
  const langs = ["AR", "EN"];
  const [lang, setLang] = useLocalStorage("lang", "EN");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [profile, setProfile] = useState(false);

  // methods
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  async function handleLogout() {
    try {
      const res = await api.post("/user/logout");
      setProfile(false);
      localStorage.removeItem("userId");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  // render
  return (
    <>
      <Language>
        {lang}

        <ArrowDropDownIcon
          sx={{ fontSize: "40px" }}
          id="choose-lang"
          aria-controls={open ? "choose-lang-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open.toString()}
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
      {user ? (
        <UserBox sx={{ position: "relative" }}>
          <MUI.Typography
            sx={{
              fontSize: "12px",
              fontWeight: "800",
              lineHeight: "13px",
              letterSpacing: " 0em",
              color: "#000",
            }}
          >
            {t("hello")} {user?.name}
          </MUI.Typography>
          <MUI.Box
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
            {t("my account")}
            <ArrowDropDownIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setProfile(!profile);
              }}
              sx={{ fontSize: "30px", mr: "-5px" }}
            />
          </MUI.Box>

          {profile && (
            <MUI.Box className={css.dropDown}>
              <Link to="/Login" onClick={handleLogout}>
                <MUI.Button sx={{ textTransform: "capitalize", color: "#000" }}>
                  {t("logout")}
                </MUI.Button>
              </Link>
            </MUI.Box>
          )}
        </UserBox>
      ) : (
        <AuthBtns />
      )}
    </>
  );
}
