import { lazy } from "react";
import { AppConfig } from "react-fanap";
import routes from "./routes";
import Loading from "components/Loading";

const LandingAsync = lazy(() => import("components/Landing"));

const config: AppConfig = {
  displayAppBar: true,
  landingPage: LandingAsync,
  theme: {
    themes: {}
  },
  auth: {
    sso: {
      lsKey: "REACT_FANAP_SSO",
      redirect_url:
        process.env.REACT_APP_SSO_REDIRECT_URL ??
        window.location.href.split("?")[0],
      client_id: process.env.REACT_APP_SSO_CLIENT_ID ?? "",
      login_url: process.env.REACT_APP_SSO_LOGIN_URL ?? "",
      base_url: process.env.REACT_APP_SSO_BASE_URL ?? "",
      user_info_url: process.env.REACT_APP_SSO_USER_INFO_URL ?? "",
      maxTryOn401: 3
    },
    signInURL: "/signin",
    fullContent: true,
    displaySignInPage: true
  },
  drawer: {
    display: true,
    items: [
      [
        {
          text: "test",
          visible: true,
          path: "/test"
        }
      ]
    ]
  },
  routes,
  components: {
    Loading
  }
};

export default config;
