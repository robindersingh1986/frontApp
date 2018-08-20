import * as PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";
import Login from './containers/login';
import Dashboard from "./components/dashboard";

const Routes = ({ className, path }) => (
  <div className={className}>
    <Route exact path='/' component={Login} />
    <Route exact path='/login' component={Login} /> 
    <Route exact path='/dashboard' component={Dashboard} />
    
  </div>
);

Routes.propTypes = {
  path: PropTypes.string
};

export default Routes;
