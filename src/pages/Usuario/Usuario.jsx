import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "reactstrap";
import InputValidated from "../../components/inputs/InputValidated";
import { emailValidation } from "../../utils/forms-validations";

const Fields = [
  {
    name: "nome",
    labelText: "Nome",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 3, message: "Minímo de 3 letras" },
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
    name: "usuario",
    labelText: "Usuário",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "username",
  },
  {
    name: "senha",
    labelText: "Senha",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "password",
  },
  {
    name: "celular",
    labelText: "Celular",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "(99) 9999 9999",
  },
  {
    name: "observacoes",
    labelText: "Observações",
    inputType: "text",
    validation: {},
    placeholder: "observações...",
  },
  {
    name: "usuario_role",
    labelText: "Grupo de usuários",
    inputType: "text",
    validation: { required: "Escolha um tipo de usuário" },
    placeholder: "Selecione...",
    selectOptions: [
      { label: "Selecione", value: "" },
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
    ],
    select: true,
  },
];

const Usuario = () => {
  const {
    register,
    handleSubmit,
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
        </Form>
      </div>
    </div>
  );
};

export default Usuario;
