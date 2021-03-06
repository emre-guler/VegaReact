import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import Context from "./Context";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import 'bootstrap/dist/css/bootstrap.min.css';


import { ToastProvider } from "react-toast-notifications";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

const rootElement = document.getElementById("root");

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}.json",
    },
    react: {
      useSuspense: false,
    },
  });

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Context>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Context>,
  rootElement
);
