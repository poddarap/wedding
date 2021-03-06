import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
