import React from "react";
import _ from "lodash";
import Dashboard from "../components/dashboard";

/* const handleLogin = payload => {
    console.log("i am called with payload : ", payload);
    return "something";
}; */

const Login = ({ values, errors, touched }) => (
    <Dashboard/>
);

export default Login;


import { connect } from 'react-redux';
import { showReceipts } from '../actions';
import DashboardComponent from "../components/dashboard";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent)

export default Dashboard