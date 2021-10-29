import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Row } from "reactstrap";
import * as yup from "yup";
import GenericInput from "../../components/inputs/GenericInput";
import useYupValidationResolver from "../../utils/validationResolver";
const validationSchema = yup.object({
  relacao_id_cliente: yup.number().typeError("Deve ser um número"),
  qtd_linhas: yup.number().typeError("Deve ser um número"),
  status: yup.number().typeError("Deve ser um número"),
  vencimento_aluguel: yup.date().typeError("Deve ser uma data"),
  valor_total: yup.number().typeError("Deve ser um número"),
  observacoes: yup.string(),
});

const fieldsOptions = {
  relacao_id_cliente: {
    name: "relacao_id_cliente",
    label: "Cliente",
  },
  qtd_linhas: {
    name: "qtd_linhas",
    label: "Quantidade de Linhas",
  },
  status: {
    name: "numero_linha",
    label: "Número da Linha",
    type: "select",
    options: [
      { label: "Ativo", value: "ativo" },
      { label: "Suspenso", value: "suspenso" },
      { label: "Renegociando", value: "renegociando" },
    ],
  },
  vencimento_aluguel: {
    name: "vencimento_aluguel",
    label: "Vencimento",
  },
  valor_total: {
    name: "valor_total",
    label: "Valor",
  },
  observacoes: {
    name: "observacoes",
    label: "Observações",
  },
};
const Fields = Object.keys(validationSchema.fields);
const ContratoAluguel = () => {
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
        <h3 className="panel-title">Contrato de aluguel</h3>
      </div>
      <div className="panel-body">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {Fields.map((field, key) => {
              return (
                <GenericInput
                  key={key}
                  {...{
                    fieldOptions: fieldsOptions[field],
                    errors,
                    register,
                  }}
                />
              );
            })}
          </Row>
          <Button type="submit" color="primary">
            Salvar
          </Button>
          <Button onClick={() => console.log(errors, getValues())}> Err</Button>
        </Form>
      </div>
    </div>
  );
};

export default ContratoAluguel;
