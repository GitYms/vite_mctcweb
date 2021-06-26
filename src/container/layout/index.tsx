import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from '../../router';

import Header from './components/header';
import Footer from './components/footer';

const { Content } = Layout;

export default () => {
  return (
    <Layout>
      <Header />
        <Content className="contentBox">
          <Router>
            <Switch>
              {
                routes.map((route: any) => <Route exact key={route.path} path={route.path}>
                  <route.component />
                </Route>)
              }
            </Switch>
          </Router>
        </Content>
      <Footer /> 
    </Layout>
  )
}