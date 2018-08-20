import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { withFormik, Form, Field } from "formik";
const Yup = require("yup");
import { Redirect } from "react-router-dom";

const Login = ({values, errors, touched, dummy, inc, dec}) => (
    <div>
        <Form>
            <h2>Login</h2>
            <div>
            <div> Email </div>
            <Field type="text" name="email" placeholder="email" />
            {errors.email && <div className="inputFeedback"> {errors.email} </div>}
            </div>
            <div>
            <div> Password </div>
            <Field type="password" name="password" placeholder="Last Name" />
                    {errors.password && <div className="inputFeedback"> {errors.password} </div>}
            </div>
            <button> Login </button>
        </Form>
         <span> d : { dummy } </span>
        <button onClick={ inc }> Increment </button>
        <button onClick={  dec }> Decrement </button>
    </div>
);

export default withFormik({
    mapPropsToValue({ name }) {
        return {
            email: email || ``,
            password: password || ``
        };
},
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .trim()
            .min(2)
            .max(250)
            .required("This field is required!"),
        password: Yup.string()
            .trim()
            .min(2)
            .max(250).required("This field is required!"),
    }),
    handleSubmit(values) {
        const payloadSkeleton = {
            email:'',
            password: ``
        };

        let payload = _.pick(values, [
            `email`,
            `password`
        ]);
        payload = _.merge(payloadSkeleton, payload);
        console.log("payload ", payload);
        //this.props.history.push("/dashboard");

        LoginToMyApp(payload).then(user => {
            setSubmitting(false);
            // do whatevs...
            // props.updateUser(user)
          }, errors => {
            setSubmitting(false);
            // Maybe even transform your API's errors into the same shape as Formik's!
            setErrors(transformMyApiErrors(errors));
          });


    }
})(Login);


Login.PropTypes = {
    inc: PropTypes.func,
    dec: PropTypes.func,
    dummy: PropTypes.string,
    history: PropTypes.object
};

