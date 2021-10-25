const emailValidation = {
    pattern: {
        value: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/,
        message:
            "Deve ser um email válido",
    }
}

const CPFValidation = {
    pattern: {
        value: /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/,
        message: "Não é um CPF/CNPJ válido"
    }
}

export { CPFValidation, emailValidation };