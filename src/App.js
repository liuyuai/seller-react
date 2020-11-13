import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './components/Main'
import Login from './components/login/Login'
import NotFound from './components/NoFund'
import React,{useEffect} from "react";
import Routes from "./routes";


//使用严格匹配看看能不能解决 乱输入url是  还渲染main主题


// 在这里添加一个接口状态
// 判断当前用户状态


function App() {
  useEffect(()=>{
    console.log('aaaa');
  });
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Redirect exact from="/" to="/home" />
          <Route path="/">
            <Main>
              <Routes></Routes>
            </Main>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
}


export default App;
