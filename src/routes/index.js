import React, {useEffect} from "react";
import { Switch,Route } from "react-router-dom";
import menuList from "./menus";
import {useDispatch, useSelector} from "react-redux";
import NProgress from "nprogress";
import {fetchUser} from "../store/userSlice";
import { useHistory } from 'react-router-dom'




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

function RouteWithSubRoutes(route) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const history = useHistory();
  useEffect(() => {
    NProgress.done();
    dispatch(fetchUser());
    return () => NProgress.start();
  });
  if(user.status === 'failed'&& user.loggedIn === false){
    history.push('/login');
  }
  return (
    route.childrens?
      <Route>
        {route.childrens.map(item => <CreateRoute key={item.id} {...item}/>)}
      </Route>
    :CreateRoute(route)
  )
}



export default function Routes() {
  return (
      <Switch>
        {menuList.map(item =><RouteWithSubRoutes key={item.id} {...item} /> )}
      </Switch>
  )
}

