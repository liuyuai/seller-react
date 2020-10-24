import React from "react";
import {  Route } from "react-router-dom";
import Home from '../compontents/Home'
import About from "../compontents/About";

export default function Routes() {
  return (
      <>
        <Route path="/about" component={About}></Route>
        <Route path="/home" component={Home}></Route>
      </>
  )
}

