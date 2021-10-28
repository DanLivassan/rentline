import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "reactstrap";
import InputValidated from "../../components/inputs/InputValidated";
import { getAddressStates } from "../../utils/address/address_helpers";
import { states_and_cities } from "../../utils/address/brazil/states_and_cities";
import { emailValidation, CPFValidation } from "../../utils/forms-validations";
const estados = getAddressStates(states_and_cities);
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
    name: "nome",
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
    name: "uf",
    labelText: "UF",
    select: true,
    selectOptions: estados
      ? estados.map((estado) => {
          return { label: estado.name, value: estado.uf };
        })
      : [],
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
    placeholder: "Estado",
    dependentSelect: "cidade",
  },
  {
    name: "cidade",
    labelText: "Cidade",
    select: true,
    dependent: true,
    dependentOptions: { cidade: [{ label: "Selecione um estado", value: "" }] },
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
    },
  },

  {
    name: "bairro",
    labelText: "Bairro",
    inputType: "text",
    validation: {
      required: "Este campo não pode ser vazio",
      minLength: { value: 3, message: "Minímo de 3 letras" },
    },
    placeholder: "Bairro",
  },
];

const Titulares = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState({ fields: Fields });
  const onSelect = (e, dependentSelect) => {
    let cities = states_and_cities["estados"].find((state) => {
      return state.sigla === e.target.value;
    });
    cities = cities["cidades"].map((city) => {
      return { label: city, value: city };
    });
    state.fields[5].dependentOptions = {
      cidade: cities,
    };

    setState({ fields: state.fields });
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Titulares</h3>
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
                      onSelect,
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

export default Titulares;
