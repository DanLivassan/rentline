import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row, Label } from "reactstrap";
import * as yup from "yup";
import { CPFValidation, emailValidation } from "../../utils/forms-validations";
import useYupValidationResolver from "../../utils/validationResolver";
const validationSchema = yup.object({
  nome: yup.string().required("danilo"),
  cpf_cnpf: yup.string().matches(CPFValidation),
  data_nascimento: yup.date(),
  celular: yup.string(),
  email1: yup.string().matches(emailValidation.value),
  email2: yup.string().matches(emailValidation.value),
  endereco: yup.string().required(),
  bairro: yup.string().required(),
  cep: yup.string().required(),
  cidade: yup.string().required(),
  uf: yup.string().required(),
  gestor_contrato: yup.string().required(),
  observacoes: yup.string(),
  usuario: yup.string().required(),
  senha: yup.string().required(),
  perfil: yup.string(),
});

const Fields = Object.keys(validationSchema.fields);
console.log(Fields);
const Clientes = () => {
  const resolver = useYupValidationResolver(validationSchema);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = () => {};
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Clientes</h3>
      </div>
      <div className="panel-body">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {Fields.map((field) => {
              return (
                <Col className="col-md-4">
                  <Label>{field[0].toUpperCase() + field.slice(1)}</Label>
                  <input
                    className="form-control"
                    name={field}
                    type="text"
                  ></input>
                  <p style={{ color: "red" }}>
                    {errors[field] && errors[field]?.message}
                  </p>
                </Col>
              );
            })}
          </Row>
          <Button type="submit" color="primary">
            Salvar
          </Button>
          <Button onClick={console.log(errors, getValues())}> Err</Button>
        </Form>
      </div>
    </div>
  );
};

export default Clientes;
