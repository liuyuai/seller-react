import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './compontents/Main'
import Login from './compontents/login/Login'
import NotFound from './compontents/NoFund'
import React from "react";


//使用严格匹配看看能不能解决 乱输入url是  还渲染main主题


const fakeAuth = {
  isAuthenticated: true
};

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <PrivateRoute>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/" component={Main} />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
