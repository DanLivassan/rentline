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
    placeholder: "Relação 1",
  },
  {
    name: "relacao_id_conta_contrato",
    labelText: "Relação conta contrato",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "Relação 2",
  },

  {
    name: "numero_linha",
    labelText: "Número da linha",
    inputType: "number",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "",
  },
  {
    name: "iccid",
    labelText: "ICCID",
    inputType: "number",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "ICCID",
  },
  {
    name: "status",
    labelText: "Sistema",
    inputType: "text",
    select: true,
    selectOptions: [
      { label: "Disponível", value: "disponivel" },
      { label: "Alugada", value: "alugada" },
      { label: "Suspensa", value: "suspensa" },
    ],
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "status",
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
    name: "vencimento",
    labelText: "Vencimento",
    inputType: "date",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "",
  },

  {
    name: "plano_operadora",
    labelText: "Plano da operadora",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "",
  },
  {
    name: "observacoes",
    labelText: "Observações",
    inputType: "text",
    validation: {},
    placeholder: "",
  },
];

const Linhas = () => {
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
        <h3 className="panel-title">Linhas</h3>
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

export default Linhas;
