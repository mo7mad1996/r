// components
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import SectionTitle from "~/sections/common/Products/SectionTitle";
import { StyledBox } from "~/pages/Admin/AdminDashboard/Page.jsx";
import { useNavigate } from "react-router-dom";

export default function My_account() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const links = [
    {
      title: "Profile",
      link: "/admin/dashboard/profile",
    },
    {
      title: "Addresses",
      link: "/user/address",
    },
    {
      title: "Notifications",
      link: "#",
    },
    {
      title: "Joumla Employees Newsletter",
      link: "#",
    },
    {
      title: "Language",
      link: "#",
    },
    {
      title: "logout",
      link: "/logout",
    },
  ];

  return (
    <Container>
      <SectionTitle
        sectionTitle={{ main: "my account", second: "مرحبا، ممدوح الصيرفي" }}
      />

      <div className="block md:grid md:grid-cols-4  md-grid-auto-flow-row-reverse">
        {/* img */}
        <div className="col-span-1">
          <img
            src="https://thispersondoesnotexist.com/"
            className="w-40 aspect-square rounded-full my-8 mx-auto"
            alt="some one"
          />
        </div>

        {/* links */}
        <div className="col-span-3 text-2xl">
          <div className="flex gap-6 items-end py-12 ">
            <span>{t("Role")}</span>
            <div className="bg-[#DADADA] border-2 min-w-20 text-[.7em] border-black text-center py-2 px-12">
              {t("Graphic")}
            </div>
          </div>

          <main className="flex justify-center gap-10 pa-10 flex-wrap">
            {links.map((item, n) => (
              <StyledBox
                key={n}
                onClick={() => navigate(item.link)}
                sx={[
                  item.link == "/logout" && {
                    backgroundColor: "colors.mainRed",
                    "& p": {
                      color: "#fff",
                    },
                  },
                ]}
              >
                <Typography>{t(item.title)}</Typography>
              </StyledBox>
            ))}
          </main>
        </div>
      </div>
    </Container>
  );
}
