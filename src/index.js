import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.css';
import {ConfigProvider } from 'antd'  //antd 全局化配置 可以定义配置所有组件一些样式 具体看api
import {Provider} from "react-redux";
import store from './store/index'
import 'nprogress/nprogress.css';

// this.component = () =>{
//   return (
//       <div>
//         啦啦
//       </div>
//   )
// };
// <this.component />  可调用



// 由于使用了antdUI  导致StrictMode 模式会有错误
ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <ConfigProvider>
      <App />
      </ConfigProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
