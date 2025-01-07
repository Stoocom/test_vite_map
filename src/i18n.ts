import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .init({
    // resources, // передаем переводы текстов интерфейса в формате JSON
    lng: "en",
    fallbackLng: 'en', // если переводы на языке пользователя недоступны, то будет использоваться язык, указанный в этом поле
    debug: true,
    interpolation: {
      escapeValue: false, // экранирование уже есть в React, поэтому отключаем
    },
    resources: {
      en: {
        translation: {
          "login": "Login",
          "registration": "Registration",
          "email": "email",
          "password": "password",
          "sign_in": "Sign In",
          "sign_up": "Sign Up",
          "to_login": "to login",
          "to_sign": "to register",
        }
      },
      ru: {
        translation: {
          "login": "Авторизация",
          "registration": "Регистрация",
          "email": "почта",
          "password": "пароль",
          "sign_in": "Войти",
          "sign_up": "Зарегистрировать",
          "to_login": "войти",
          "to_sign": "к регистрации",
        }
      }
    }
  });

export default i18n;
