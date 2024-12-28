import { Link, useNavigate } from "react-router-dom";

// components
import * as MUI from "@mui/material";

// css
import css from "./style.module.css";
import { useTranslation } from "react-i18next";

// component
export default function AuthBtns() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // render
  return (
    <>
      <MUI.Button
        variant="outlined"
        className={css.loginBtn}
        sx={{
          color: "colors.mainBlack",
          background: "colors.mainBlack",
          "&:hover": {
            borderColor: "colors.mainGreen",
          },
        }}
        onClick={() => navigate("/login")}
      >
        {t("login")}
      </MUI.Button>

      <Link className={css.link} to="/signup">
        {t("Register now")}
      </Link>
    </>
  );
}
