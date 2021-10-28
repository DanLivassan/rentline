import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row, Label } from "reactstrap";
import * as yup from "yup";
import { CPFValidation, emailValidation } from "../../utils/forms-validations";
import useYupValidationResolver from "../../utils/validationResolver";
const validationSchema = yup.object({
  nome: yup.string().required("O nome é requerido"),
  cpf_cnpf: yup
    .string()
    .matches(CPFValidation.pattern.value, CPFValidation.pattern.message),
  data_nascimento: yup.date("Deve ser uma data"),
  celular: yup.string(),
  email1: yup
    .string()
    .matches(emailValidation.pattern.value, emailValidation.pattern.message),
  email2: yup
    .string()
    .matches(emailValidation.pattern.value, emailValidation.pattern.message),
  endereco: yup.string().required("Endereço é requerido"),
  bairro: yup.string().required("Bairro é requerido"),
  cep: yup.string().required("CEP é requerido"),
  cidade: yup.string().required("Cidade é requerida"),
  uf: yup.string().required("UF é requerida"),
  gestor_contrato: yup.string().required("Gestor é requerido"),
  observacoes: yup.string(),
  usuario: yup.string().required("Usuário requerido"),
  senha: yup.string().required("Senha requerida"),
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
                    {...register(field)}
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
