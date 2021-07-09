import React from "react";
import { Input } from "antd";

export const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => (
  <div>
    <Input
      {...field}
      {...props}
      placeholder="Basic usage"
      style={{ width: "300px" }}
    />

    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);
