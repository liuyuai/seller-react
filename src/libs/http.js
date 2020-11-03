import axios from 'axios'
import QS from 'querystring'


export const service = axios.create({
  timeout:3000
});

service.interceptors.request.use(config => {
  if (config.method === "get") {
    let paramsStr = QS.stringify(config.params || config.data || {}, {
      indices: false
    });
    if (paramsStr) {
      config.url = config.url + "?" + paramsStr;
    }
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      platform: "mp"
    };
  } else if (config.method === "post") {
    // config.transformRequest = [
    //   data => {
    //     // data = QS.stringify(data);
    //     return data;
    //   }
    // ];
    config.headers = {
      "Content-Type": "application/json; charset=UTF-8",
      platform: "mp"
    };
  }
  return config;
});

service.interceptors.response.use(
    response => {
      let data = response.data;
      if (data.code === 0) {
        return data.data;
      } else {
        // ErrorMessgae(data)
        return Promise.reject(data);
      }
    },
    error => {
      // let rejectData;
      // switch (error.constructor) {
      //   case axios.Cancel:
      //     break;
      //   default:
      //     rejectData = new HttpError(error);
      // }
      return Promise.reject(error);
    }
);

