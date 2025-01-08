import { useState } from "react";
import { useTranslation } from "react-i18next";

// components
import * as MUI from "@mui/material";
import * as FormElements from "~/components/FormElements";
import { StyledTypography } from "~/sections/Login/Login.jsx";
import SectionTitle from "~/sections/common/Products/SectionTitle";
import { Typo } from "~/pages/registration/NewPasswordPage.jsx";

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Admin_profile() {
  const { t } = useTranslation();

  return (
    <MUI.Container>
      <SectionTitle sectionTitle={{ main: "View Profile" }} />

      <div className="text-2xl mb-3">
        <MUI.Box component="h3" sx={{ color: "colors.mainGreen" }}>
          {t("Your Details")}
        </MUI.Box>
        <p className="p-5 text-[#656667]">
          من هنا يمكنك تعديل بياناتك الشخصية عندما تنتهي اضغط علي حفظ .
        </p>
      </div>
      <Form />

      <ChangePassword />
    </MUI.Container>
  );
}

function Form() {
  const { t } = useTranslation();

  const user = {
    Role: "جرافيك",
    "First Name": "روينة",
    "Father's Name": "احمد",
    "Grandfather's Name or Surname": "فراج",
    "Phone Number": "011111111111",
    Email: "test@example.com",
  };
  return (
    <form>
      <MUI.Stack
        sx={{
          mx: { xs: "auto" },
          px: { xs: "15px", sm: "45px" },
          width: { lg: "fit-content" },
          gap: { xs: "50px", sm: "61px" },
          alignItems: { md: "center", lg: "end" },
          position: "relative",
        }}
      >
        {Object.entries(user).map(([key, value]) => (
          <FormElements.FormItem key={key} sx={{ gap: { lg: "54px" } }}>
            <StyledTypography>{t(key)}</StyledTypography>
            <FormElements.StyledTextField name={key} value={value} />
          </FormElements.FormItem>
        ))}
      </MUI.Stack>

      <MUI.Box className="w-fit mx-auto mb-24 mt-20 leading-6">
        <FormElements.ConfirmButton type="submit">
          {t("Save")}
        </FormElements.ConfirmButton>
      </MUI.Box>
    </form>
  );
}

function ChangePassword() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="text-center my-6 text-2xl">
        {t("Change password")}
      </button>
      <MUI.Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="flex p-5 items-center justify-center h-full pointer-events-none text-center">
          <div className=" overflow-auto max-h-screen bg-white px-24 py-12 pointer-events-auto rounded-md">
            <h2
              id="parent-modal-title"
              className="text-center font-bold  text-4xl  mb-12"
            >
              {t("Change password")}
            </h2>
            <hr />
            <div
              id="parent-modal-description"
              className="my-12 flex gap-8 flex-col"
            >
              {["Current Password", "New Password", "Confirm New Password"].map(
                (item, n) => (
                  <FormItem key={n} title={item} />
                )
              )}
            </div>

            <MUI.Box className="w-fit mx-auto   leading-6">
              <FormElements.ConfirmButton type="submit">
                {t("Save")}
              </FormElements.ConfirmButton>
            </MUI.Box>
          </div>
        </div>
      </MUI.Modal>
    </div>
  );
}

function FormItem({ title }) {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((v) => !v);

  return (
    <div>
      <p className="text-2xl ">{t(title)}</p>
      <MUI.TextField
        className="block"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <MUI.InputAdornment position="end">
              <MUI.IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </MUI.IconButton>
            </MUI.InputAdornment>
          ),
        }}
      />
    </div>
  );
}
