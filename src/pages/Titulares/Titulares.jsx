import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "reactstrap";
import InputValidated from "../../components/inputs/InputValidated";
import { emailValidation, CPFValidation } from "../../utils/forms-validations";

const Fields = [
  {
    name: "cpf_cnpj",
    labelText: "CPF/CNPJ",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      ...CPFValidation,
    },
    placeholder: "Nome...",
  },

  {
    name: "email",
    labelText: "Email",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      ...emailValidation,
    },
    placeholder: "email@mail.com",
  },
  {
    name: "Nome",
    labelText: "Nome",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 3, message: "Minímo de 3 letras" },
    },
    placeholder: "nome",
  },
  {
    name: "endereco",
    labelText: "Endereço",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 6, message: "Minímo de 6 letras" },
    },
    placeholder: "Endereço",
  },
  {
    name: "cidade",
    labelText: "Cidade",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 6, message: "Minímo de 6 letras" },
    },
    placeholder: "cidade",
  },
  {
    name: "uf",
    labelText: "UF",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 6, message: "Minímo de 6 letras" },
    },
    placeholder: "Estado",
  },
  {
    name: "bairro",
    labelText: "Bairro",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 6, message: "Minímo de 6 letras" },
    },
    placeholder: "Bairro",
  },
];

const Titulares = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Usuário</h3>
      </div>
      <div className="panel-body">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {Fields.map((props, key) => {
              return (
                <Col key={key} className="pl-1" md="3">
                  <InputValidated
                    {...{
                      ...props,
                      errors,
                      register,
                    }}
                  />
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

export default Titulares;
