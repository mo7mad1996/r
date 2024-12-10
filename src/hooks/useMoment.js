import moment from "moment";
import lang_ar from "moment/locale/ar";

export default () => {
  // Define custom Arabic locale
  moment.locale("ar", {
    months:
      "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
        "_"
      ),
    monthsShort:
      "ينا_فبرا_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبت_أكتوبر_نوف_ديسمبر".split(
        "_"
      ),
    monthsParseExact: true,
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثن_ثلا_أربع_خمس_جمعة_سبت".split("_"),
    weekdaysMin: "أ_إ_ث_أ_خ_ج_س".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[اليوم في] LT",
      nextDay: "[غدًا في] LT",
      nextWeek: "dddd [في] LT",
      lastDay: "[أمس في] LT",
      lastWeek: "dddd [في الأسبوع الماضي في] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "في %s",
      past: "منذ %s",
      s: "بضع ثوان",
      m: "دقيقة واحدة",
      mm: "%d دقائق",
      h: "ساعة واحدة",
      hh: "%d ساعات",
      d: "يوم واحد",
      dd: "%d أيام",
      M: "شهر واحد",
      MM: "%d شهور",
      y: "سنة واحدة",
      yy: "%d سنوات",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(م|أ)/,
    ordinal: function (number) {
      return number + (number === 1 ? "م" : "أ");
    },
    meridiemParse: /ص|م/,
    isPM: function (input) {
      return input.charAt(0) === "م";
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? "ص" : "م";
    },
    week: {
      dow: 0, // الأحد هو أول يوم في الأسبوع
      doy: 4, // لتحديد الأسبوع الأول من السنة
    },
  });

  return moment;
};
