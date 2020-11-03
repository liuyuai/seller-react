import config from '../config/index'
import Cookie from 'js-cookie'

import { getTimestampFor } from "./util";

const { TOKEN, COOKIE_DOMAIN, BASE_TITLE } = config;
const { KEY: TOKEN_KEY } = TOKEN;


export const getToken = () => {
  return Cookie.get(TOKEN_KEY,{
    domain:COOKIE_DOMAIN
  });
};

export const setToken = (value,expires) =>{
  return Cookie.set(TOKEN_KEY,value,{
    domain:COOKIE_DOMAIN,
    expires: expires ? new Date(Date.now() + getTimestampFor(expires)) : undefined
  });
};

export const clearToken = () => {
  setToken("", 0);
  setCookie("user", "", 0);
  setCookie("backToken", "", 0);
  setCookie("merchantId", "", 0);
};


export const setCookie = (key, value, expires) => {
  return Cookie.set(key, value, {
    domain: COOKIE_DOMAIN,
    expires: expires ? new Date(Date.now() + getTimestampFor(expires)) : undefined
  });
};

export const getCookie = key => {
  return Cookie.get(key, {
    domain: COOKIE_DOMAIN
  });
};
