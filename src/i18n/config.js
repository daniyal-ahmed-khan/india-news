import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        h1: "Desh",
        h2: "Foreign",
        h3: "State",
        h4: "Bollywood",
        h6: "Sports",
        h7: "Tech",
        h8: "Auto",
        h9: "Business",
        h10: "Life Style",
        h11: "Health",
        h12: "Astha",
        h13: "Eduction",
        h14: "Live",
        h15: "Bihar",
        fn:"Flash News",
        ts:"Top Stories",
        ln:"Latest News",
        bn:"Big News",
        v:"Videos",
        t:"Technology",
        vs:"Visual Stories",
        ph:"Photo Gallery",
        list:"Join Our Mailing List!",
        rn:"Related News",
        to:"TOPICS"
      },
    },
    ur: {
      translation: {
        h1: "دیش",
        h2: "غیر ملکی",
        h3: "ریاست",
        h4: "بالی ووڈ",
        h6: "کھیل",
        h7: "ٹیک",
        h8: "آٹو",
        h9: "کاروبار",
        h10: "لائف اسٹائل",
        h11: "صحت",
        h12: "آستھا",
        h13: "تعلیم",
        h14: "لائیو",
        fn:"فلیش نیوز",
        ts:"اہم خبریں",
        ln:"تازہ ترین خبریں",
        bn:"بڑی خبر",
        v:"ویڈیوز",
        t:"ٹیکنالوجی",
        vs:"بصری کہانیاں",
        ph:"فوٹو گیلری",
        list:"ہماری میلنگ لسٹ میں شامل ہوں!",
        rn:"متعلقہ خبریں۔",
        to:"عنوانات"
      },
    },
    hi: {
      translation: {
        h1: "देश",
        h2: "विदेशी",
        h3: "राज्य",
        h4: "बॉलीवुड",
        h6: "खेल",
        h7: "टेक",
        h8: "ऑटो",
        h9: "व्यवसाय",
        h10: "जीवन शैली",
        h11: "स्वास्थ्य",
        h12: "आस्था",
        h13: "शिक्षा",
        h14: "लाइव",
        fn:"फ़्लैश ख़बर",
        ts:"शीर्ष आलेख",
        ln:"ताजा खबर",
        bn:"बड़ी खबर",
        v:"वीडियो",
        t:"तकनीकी",
        vs:"दृश्य कहानियाँ",
        ph:"फोटो गैलरी",
        list:"हमारी मेलिंग सूची में शामिल हो जाएं!",
        rn:"सम्बंधित खबर",
        to:"विषय"
      },
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// i18n.languages = ['en', 'ur'];

export default i18n;
