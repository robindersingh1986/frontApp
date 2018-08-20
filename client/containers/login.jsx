import React from "react";
import _ from "lodash";
import LoginComponent from "../components/login";
import { incOne, decOne } from "../actions";
import { connect } from 'react-redux'

const handleLogin = payload => {
    console.log("i am called with payload : ", payload);
  return "something";
};
/*
const incrementOne = () => console.log("incOne called");
const decrementOne = () => console.log("decOne called");
*/

  const Login = ({ values, errors, touched }) => (
  <span>
    <LoginComponent onSubmit={handleLogin} inc={incOne} dec={decOne} dummy="dummyText" />
    <span onClick={incOne}>Test</span>
  </span>
);


const mapStateToProps = state => {
  return {
    //todo: state.todos[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incOne: () =>
      dispatch({
        type: 'INC_ONE'
      }),
    decOne: () =>
      dispatch({
        type: 'DEC_ONE'
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

//export default Login;
