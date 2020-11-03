const getEnv = () => {
  const hostname = document.location.hostname;
  let env = "DEV";
  let domain = ".dev.tgos.com.cn";
  let cookieDomain = "dev.tgos.com.cn";
  if (hostname.includes("51tiangou.tgos.com.cn")) {
    env = "PRODUCT";
    domain = ".51tiangou.tgos.com.cn";
    cookieDomain = "51tiangou.tgos.com.cn";
  }
  if (hostname.includes("pre.tgos.com.cn")) {
    env = "PRE";
    domain = ".pre.tgos.com.cn";
    cookieDomain = "pre.tgos.com.cn";
  }
  if (hostname.includes("test.tgos.com.cn")) {
    env = "TEST";
    domain = ".test.tgos.com.cn";
    cookieDomain = "test.tgos.com.cn";
  }
  return {
    SERVER_ENV: env,
    DOMAIN: domain,
    COOKIE_DOMAIN: cookieDomain,
    IMAGE_DOMAIN: /(dev|test)\.tgos.com.cn/.test(document.location.hostname) ? "//img.test.tgos.tgtupian.com" : "//tgos.tgtupian.com",
    IMAGE_UPLOAD: `//base${domain}/mp/image/upload`
  };
};

const { SERVER_ENV, DOMAIN, COOKIE_DOMAIN, IMAGE_DOMAIN, IMAGE_UPLOAD } = getEnv();
const DEBUG = process.env.NODE_ENV === "development";
// import ROLE from "./role";


export default {
  DEBUG,
  DOMAIN,
  COOKIE_DOMAIN,
  IMAGE_DOMAIN,
  IMAGE_UPLOAD,
  PLATFORM: "mp",
  BASE_TITLE: "天狗SELLER",
  HTTP: {
    PROTOCOL: DEBUG ? "http:" : "http:",
    HOSTNAME: DEBUG ? "10.10.5.240" : "10.10.5.240",
    PORT: DEBUG ? "7001" : "7001",
    WITH_CREDENTIALS: DEBUG ? true : true,
    TIMEOUT: DEBUG ? 3000 : 3000
  },
  ROUTER: {
    HOME_NAME: "home",
    LOGIN_NAME: "login",
    REGISTER_NAME: "register",
    SET_PASSWORD_NAME: "setPwd",
    VERIFY_NAME: "verify",
    CHANGE_PASSWORD_NAME: "changePwd",
    NOTFOUND_NAME: "error_404",
    NOT_AUTH_NAME: "error_401",
    SPECIAL_ERROR_NAME: "error_500",
    NAME_SPLIT_KEY: "@#@"
  },
  // ROLE,
  SERVER_ENV,
  TOKEN: {
    KEY: "mpLoginToken"
  },
  HTTP_PENDING_TIME: 2000
};
