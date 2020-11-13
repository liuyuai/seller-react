import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import menuList from "./menus";
import {useDispatch, useSelector} from "react-redux";
import NProgress from "nprogress";
import {fetchUser} from "../store/userSlice";
import { useHistory,useLocation } from 'react-router-dom'
import Login from "../components/login/Login";
import NotFound from "../components/NoFund";
import Main from "../components/Main";
import {getUserInfo} from "../api/base";





// 现在好用的原因 是因为每次切换页面后  返回的[]在本质上都一样  多以每次跳转都生成了 新的route  这应该是不对的
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


//在可以来实现么
export function RouteWithSubRoutes(route) {
  
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);
  // const history = useHistory();
  // useEffect(() => {
  //   if(user.loggedIn){
  //
  //   }else{
  //     dispatch(fetchUser());
  //     if(user.status === 'failed'&& user.loggedIn === false){
  //       history.push('/login');
  //     }
  //   }
  //
  // });
  
  return (
    route.childrens?
      <Route>
        {route.childrens.map(item => <CreateRoute key={item.id} {...item}/>)}
      </Route>
    :CreateRoute(route)
  )
}


function Routes() {
  return (
      <Switch>
        {menuList.map(item =><RouteWithSubRoutes key={item.id} {...item} /> )}
      </Switch>
  )
}


export default function BeforeRoute() {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector(state => state.user);
  
  useEffect(()=>{
    NProgress.done();
    
    if(user.loggedIn){
    
    }else{
      getUserInfo().then(data=>{
      
      }).catch(error =>{
        if(location.pathname === "/login"){
        
        }else{
          history.push('/login');
        }
      })
    }
    return () => NProgress.start();
  });
  return(
      <>
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
        <Redirect exact from="/" to="/home" />
        <Route path="/">
          <Main>
            <Routes></Routes>
          </Main>
        </Route>
        <Route component={NotFound} />
      </>
  )
}
