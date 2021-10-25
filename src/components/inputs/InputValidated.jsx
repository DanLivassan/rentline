import React, { useState } from "react";
import { FormGroup, Input, FormFeedback, Label } from "reactstrap";
import InputMask from "react-input-mask";

// Como utilizar este input
// const Fields = [
//     {
//       name: "nome",
//       labelText: "Nome da submatéria",
//       inputType: "text",
//       validation: {
//         required: "Este campo não pode ser vazio",
//         minLength: { value: 3, message: "Minímo de 3 letras" },
//       },
//       placeholder: "Nome...",
//     },
//     {
//       name: "materia",
//       labelText: "Matéria",
//       inputType: "text",
//       validation: { required: "Escolha uma matéria" },
//       placeholder: "Selecione...",
//       selectOptions: [],
//       select: true,
//       asyncSelect: true,
//       asyncOptions: { materia: [] },
//     },
//     {
//       name: "materialDidaticos",
//       labelText: "Materiais didáticos",
//       inputType: "text",
//       validation: { required: "Escolha materiais didáticos" },
//       placeholder: "Selecione...",
//       selectOptions: [],
//       multiple: true,
//       select: true,
//       asyncSelect: true,
//       asyncOptions: { materialDidaticos: [] },
//     },
//   ];

const InputValidated = (props) => {
  const {
    register,
    name,
    labelText,
    inputType,
    errors,
    validation,
    placeholder,
    checked,
    select,
    selectOptions,
    onSelect,
    asyncSelect,
    asyncOptions,
    mask,
    dependent,
    dependentOptions,
    multiple,
  } = props;
  let input = null;
  let [inputValue, setInputValue] = useState("");
  if (!checked && !select && !mask) {
    input = (
      <FormGroup className={errors[name] ? "has-error" : "has-success"}>
        <label htmlFor={name}>{labelText}</label>
        <input
          className={`form-control ${errors[name] && "is-invalid"}`}
          placeholder={placeholder}
          type={inputType}
          name={name}
          invalid={errors[name] ? "invalid" : undefined}
          {...register(name, validation)}
        />
        {errors[name] ? (
          <FormFeedback>{errors[name]["message"]}</FormFeedback>
        ) : null}
      </FormGroup>
    );
  } else if (checked) {
    input = (
      <FormGroup check className="pl-3" md="3">
        <FormGroup check>
          <Label check>
            <Input
              name={name}
              innerRef={register(validation)}
              invalid={errors[name] ? true : false}
              type="checkbox"
            />
            {labelText} <span className="form-check-sign" />
          </Label>
        </FormGroup>
        {errors[name] ? (
          <FormFeedback>{errors[name]["message"]}</FormFeedback>
        ) : null}
      </FormGroup>
    );
  } else if (select) {
    let options = dependent ? dependentOptions : selectOptions;
    options = asyncSelect ? asyncOptions[name] : options;
    const onChange = dependent ? (a, b) => {} : onSelect;
    input = (
      <FormGroup>
        <Label>{labelText}</Label>
        <Input
          type="select"
          name={name}
          innerRef={register(validation)}
          invalid={errors[name] ? true : false}
          onChange={onChange}
          multiple={multiple}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
        {errors[name] ? (
          <FormFeedback>{errors[name]["message"]}</FormFeedback>
        ) : null}
      </FormGroup>
    );
  } else if (mask) {
    input = (
      <>
        <Label>{labelText}</Label>
        <FormGroup>
          <Input
            placeholder={placeholder}
            type="tel"
            mask={mask}
            maskChar=" "
            invalid={errors[name] ? true : false}
            tag={InputMask}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          {errors[name] ? (
            <FormFeedback>{errors[name]["message"]}</FormFeedback>
          ) : null}
          <Input
            name={name}
            value={inputValue}
            onChange={() => {}}
            hidden={true}
            innerRef={register(validation)}
          />
        </FormGroup>
      </>
    );
  }
  return input;
};
export default InputValidated;
