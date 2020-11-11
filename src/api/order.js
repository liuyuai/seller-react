


import createService from "../libs/http";
import config from "../config/index"
const {DOMAIN} = config;

const baseURL = `//oserv${DOMAIN}`;

const service = createService({baseURL:baseURL});


export const getAllOrder = () =>{
  return Promise.all([
      service.get('/mp/order/list'),
      service.get('/mp/order/count')
  ])
};

export const getVerifyList = () =>{
  return Promise.all([
    service.get('/mp/order/verify/list'),
    service.get('/mp/order/verify/count')
  ])
  
};



