import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { CustomInputComponent } from "./CustomInput";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <Field
            name="firstName"
            className="inputes"
            placeholder="First Name"
            component={CustomInputComponent}
          />
          {/* {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null} */}

          <Field
            name="lastName"
            className="inputes"
            placeholder="Last Name"
            component={CustomInputComponent}
          />
          {/* {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null} */}
          <Field
            name="email"
            type="email"
            className="inputes"
            placeholder="Email"
            component={CustomInputComponent}
          />
          {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
