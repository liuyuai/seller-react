import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import React from "react";
import BeforeRoute from "./routes";


//使用严格匹配看看能不能解决 乱输入url是  还渲染main主题


// 在这里添加一个接口状态
// 判断当前用户状态




function App() {
  return (
      <Router>
          <BeforeRoute />
      </Router>
  )
}


export default App;
