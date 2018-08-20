import React from "react";
import _ from "lodash";
import LoginComponent from "../components/login";

const handleLogin = payload => {
    console.log("i am called with payload : ", payload);
  return "something";
}; 

const Login = ({ values, errors, touched }) => (
  <LoginComponent onSubmit={handleLogin} />
);

export default Login;
