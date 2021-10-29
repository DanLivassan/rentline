import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Row } from "reactstrap";
import * as yup from "yup";
import GenericInput from "../../components/inputs/GenericInput";
import useYupValidationResolver from "../../utils/validationResolver";
const validationSchema = yup.object({
  relacao_id_linha: yup.number().typeError("Deve ser um número"),
  relacao_id_cliente: yup.number().typeError("Deve ser um número"),
  relacao_id_contrato_aluguel: yup.number().typeError("Deve ser um número"),
  numero_linha: yup.number().typeError("Deve ser um número"),
  vencimento_contrato_aluguel: yup.date().typeError("Deve ser uma data"),
  celular: yup.string().required("Celular é requerido"),
  valor_aluguel_linha: yup.number().typeError("Deve ser um número"),
  plano_aluguel: yup.string().required("Endereço é requerido"),
  observacoes: yup.string(),
});

const fieldsOptions = {
  relacao_id_linha: {
    name: "relacao_id_linha",
    label: "Linha",
  },
  relacao_id_cliente: {
    name: "relacao_id_cliente",
    label: "Cliente",
  },
  relacao_id_contrato_aluguel: {
    name: "relacao_id_contrato_aluguel",
    label: "Contrato Aluguel",
  },
  numero_linha: {
    name: "numero_linha",
    label: "Número da Linha",
  },
  vencimento_contrato_aluguel: {
    name: "vencimento_contrato_aluguel",
    label: "Vencimento",
  },
  celular: {
    name: "celular",
    label: "Celular",
  },
  valor_aluguel_linha: {
    name: "valor_aluguel_linha",
    label: "Valor",
  },
  plano_aluguel: {
    name: "plano_aluguel",
    label: "Plano do aluguel",
  },
  observacoes: {
    name: "observacoes",
    label: "Observações",
  },
};
const Fields = Object.keys(validationSchema.fields);
const GestaoLinhas = () => {
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
        <h3 className="panel-title">Gestao de Linhas</h3>
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

export default GestaoLinhas;
