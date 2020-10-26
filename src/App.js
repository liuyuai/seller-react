import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './compontents/Main'
import Login from './compontents/login/Login'
import React from "react";


function App() {
  return (
      // <Main></Main>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" render={() => <Redirect to="/home" push />} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
  )
}

export default App;
