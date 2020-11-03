//封装一个方法 相当于制定一个规则  大家都去沿袭
//这个方法 是为了让你去写 大量重复的代码

import {service} from "../libs/http";
service.defaults.baseURL ="//base.test.66buy.com.cn";

export const getUserInfo = function (data) {

};

export const login = function (data) {
  return service.post('/privates/auth/seller/extLogin',data);
};
