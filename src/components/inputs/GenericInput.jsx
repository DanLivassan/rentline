import React from "react";
import { Col, Label } from "reactstrap";

const GenericInput = (props) => {
  const { fieldOptions, errors, register } = props;

  const normal = (
    <Col
      className={
        fieldOptions.colClassName ? fieldOptions.colClassName : "col-md-4"
      }
    >
      <Label>{fieldOptions.label}</Label>
      <input
        className="form-control"
        name={fieldOptions.name}
        type="text"
        {...register(fieldOptions.name)}
      ></input>
      <p style={{ color: "red" }}>
        {errors[fieldOptions.name] && errors[fieldOptions.name]?.message}
      </p>
    </Col>
  );
  const select = (
    <Col
      className={
        fieldOptions.colClassName ? fieldOptions.colClassName : "col-md-4"
      }
    >
      <Label>{fieldOptions.label}</Label>
      <select
        className="form-control"
        name={fieldOptions.name}
        type="text"
        {...register(fieldOptions.name)}
      >
        {fieldOptions.options?.map((option, key) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
      <p style={{ color: "red" }}>
        {errors[fieldOptions.name] && errors[fieldOptions.name]?.message}
      </p>
    </Col>
  );
  if (fieldOptions.type === "select") {
    return select;
  }
  return normal;
};

export default GenericInput;
