import React from "react";
import { Route } from "react-router-dom";
import Home from '../compontents/Home'
import About from "../compontents/About";
import {menu as mentList} from "./config";


// function CreateRoute(props) {
//   return (
//       <Route exact path={props.path} component={Home}></Route>
//   )
// }
//
//
// function ConfigRoute() {
//   return (mentList.map(item => {
//     CreateRoute(item)
//   }));
// }

export default function Routes() {
  return (
      <>
        <Route path="/about" component={About}></Route>
        <Route path="/home" component={Home}></Route>
      </>
  )
}

