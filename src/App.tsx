/*
 * @Author: your name
 * @Date: 2021-06-25 10:53:05
 * @LastEditTime: 2021-06-25 17:58:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-react-app\src\App.tsx
 */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import routes from '../src/router'

export default () => {
  return <Router>
    <Switch>
      {
        routes.map(route => <Route exact key={route.path} path={route.path}>
          <route.component />
        </Route>)
      }
    </Switch>
  </Router>
}
