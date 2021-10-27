import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "reactstrap";
import InputValidated from "../../components/inputs/InputValidated";

const Fields = [
  {
    name: "relacao_id_titular",
    labelText: "Relação id titular",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "Relação",
  },

  {
    name: "operadora",
    labelText: "Operadora",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "vivo... tim...",
  },
  {
    name: "valor",
    labelText: "Valor",
    inputType: "number",
    step: ".01",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 3, message: "Minímo de 3 letras" },
    },
    placeholder: "Valor",
  },
  {
    name: "sistema",
    labelText: "Sistema",
    inputType: "text",
    select: true,
    selectOptions: [
      { label: "vivo360", value: "vivo360" },
      { label: "vivoNext", value: "vivo-next" },
    ],
    validation: {},
    placeholder: "Sistema",
  },

  {
    name: "numero_da_conta",
    labelText: "Número da conta",
    inputType: "number",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "Numero",
  },
  {
    name: "vencimento",
    labelText: "Vencimento",
    inputType: "date",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "date",
  },

  {
    name: "plano_operadora",
    labelText: "Plano da Operadora",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "",
  },
  {
    name: "observacao",
    labelText: "Observação",
    inputType: "text",
    validation: {},
    placeholder: "",
  },
];

const ContasContrato = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [state] = useState({ fields: Fields });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Contas Contrato</h3>
      </div>
      <div className="panel-body">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {state.fields.map((props, key) => {
              return (
                <Col key={key} className="pl-1" md="3">
                  <InputValidated
                    {...{
                      errors,
                      register,
                      setValue,
                      ...props,
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

export default ContasContrato;
