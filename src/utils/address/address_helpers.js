export const getCities = (state_uf, states_and_cities) => {
    return states_and_cities.estados.forEach(state => {
        if (state_uf.toUpperCase() === state.sigla.toUpperCase())
            return state.cidades
    })
}

export const getAddressStates = (states_and_cities) => {
    const states = states_and_cities.estados.map((state) => {
        return { uf: state.sigla, cidades: state.cidades, name: state.nome }
    })
    return states
}
