/*
 * @Author: your name
 * @Date: 2021-06-25 10:57:17
 * @LastEditTime: 2021-06-25 19:18:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-react-app\src\container\Index\index.tsx
 */
import React from 'react';
import { Layout } from "antd";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from '../Home'

import routerKeyName from '../../router'

const { Content } = Layout;

export default () =>  {
  const RouteWithSubRoutes = (route) => {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  return (
    <HashRouter>
      <Header />
      <Switch>
        {routerKeyName.map((item: any, i: number) => (
          <RouteWithSubRoutes key={i} {...item} />
        ))}
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to={"/home"} />
      </Switch>
      <Footer />
    </HashRouter>
  )
}

