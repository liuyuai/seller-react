import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from '../compontents/Home'
import About from "../compontents/About";
import {menu as mentList} from "./config";


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
        {mentList.map(item =><RouteWithSubRoutes key={item.id} {...item} /> )}
      </Switch>
  )
}

