import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './components/Main'
import Login from './components/login/Login'
import NotFound from './components/NoFund'
import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "./store/userSlice";
import NProgress from 'nprogress'


//使用严格匹配看看能不能解决 乱输入url是  还渲染main主题


// 在这里添加一个接口状态
// 判断当前用户状态


function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  useEffect(()=>{
    NProgress.done();
    dispatch(fetchUser());
    return () => NProgress.start();
  });
  console.log(user);
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Route path="/" component={Main} />
          <Route path="/" render={() => (user.loggedIn?<Redirect to="/home" />:<Redirect to="/login" />)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
}

// function PrivateRoute({ children, ...rest }) {
//   const user = useSelector(state => state.user);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//           user.loggedIn ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

export default App;
