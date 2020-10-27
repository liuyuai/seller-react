import React from "react";
import { Switch,Route } from "react-router-dom";
import menuList from "./menus";





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

