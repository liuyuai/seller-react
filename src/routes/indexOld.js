import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import menuList from "./menus";
import {useDispatch, useSelector} from "react-redux";
import NProgress from "nprogress";
import {loginUSer,setUserMenu} from "../store/userSlice";
import { useHistory,useLocation } from 'react-router-dom'
import Login from "../components/login/Login";
import Main from "../components/Main";
import {getUserInfo} from "../api/base";



// 现在好用的原因 是因为每次切换页面后  返回的[]在本质上都一样  多以每次跳转都生成了 新的route  这应该是不对的

//之前那种定义路由应该是对的  但是脑子有病去思考 在登录状态调用 info 接口 这里很蠢
// 如果在login的情况下那么一定是 退出了




function CreateRoute(route) {
  return (
    <Route
      exact
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}




// 之前这里就是由于这个Route 标签影响 多嵌套了一层
export function RouteWithSubRoutes(route) {
  return (
    route.childrens?
      <Route>
        {route.childrens.map(item => <CreateRoute key={item.id} {...item}/>)}
      </Route>
    :CreateRoute(route)
  )
}
function Routes() {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    NProgress.done();
    
    if(user.loggedIn){
      if(location.pathname === '/'){
        history.push('/home')
      }
      
    }else{
      getUserInfo().then(data=>{
        dispatch(setUserMenu(data));
        dispatch(loginUSer());
      }).catch(error =>{
        if(location.pathname === "/login"){
        
        }else{
          history.push('/login');
        }
      })
    }
    return () => NProgress.start();
  });
  return (
      <Switch>
        {/*这里的menuList 需要和数据库的做对比*/}
        {menuList.map(item =><RouteWithSubRoutes key={item.id} {...item} /> )}
      </Switch>
  )
}

function NotFound() {
  return (
      <div>
        这里什么也没有啊
      </div>
  )
}

// Question: 当我使用/来表示主题后 在直接输入url的时候 不知道是否匹配了 也不知道则怎么修改
// 1 就是路由加载的时候  和全部的path匹配 然后 看看有没有
// 2、我看下match 有没有可能捕获

export default function BeforeRoute() {
  return(
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
        <Redirect exact from="/" to="/home" />
        <Route path="/">
          <Main>
            <Switch>
              <Routes></Routes>
            </Switch>
          </Main>
        </Route>
        <Route component={NotFound}/>
      </Switch>
      
  )
}
