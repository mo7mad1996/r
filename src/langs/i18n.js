import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import en from "~/locales/en.json";
import ar from "~/locales/ar.json";

i18n
  .use(initReactI18next)
  .use(languagedetector)
  .init({
    resources: {
      EN: { translation: en },
      AR: { translation: ar },
    },
    lng: localStorage.getItem("lang") || "EN",
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
