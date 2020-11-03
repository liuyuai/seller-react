//封装一个方法 相当于制定一个规则  大家都去沿袭
//这个方法 是为了让你去写 大量重复的代码

import {service} from "../libs/http";
import config from "../config/index"
const {DOMAIN} = config;


service.defaults.baseURL =`//base${DOMAIN}`;

export const getUserInfo = function (data) {
  return service.get('/mp/auth/info');
};

export const login = function (data) {
  return service.post('/mp/seller/login',data);
};
