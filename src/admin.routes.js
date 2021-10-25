import Clientes from "./pages/Clientes/Clientes";
import ContasContrato from "./pages/ContasContrato/ContasContrato";
import ContratoAluguel from "./pages/ContratoAluguel/ContratoAluguel";
import GestaoLinhas from "./pages/GestaoLinhas/GestaoLinhas";
import Linhas from "./pages/Linhas/Linhas";
import Titulares from "./pages/Titulares/Titulares";
import Usuario from "./pages/Usuario/Usuario";

const routes = [

    {
        name: "Usuários",
        collapse: null,
        path: "/usuario",
        component: Usuario,
        icon: null,
        layout: "/admin"
    },

    {
        name: "Clientes",
        collapse: null,
        path: "/clientes",
        component: Clientes,
        icon: null,
        layout: "/admin"
    },

    {
        name: "Contrato de Contas",
        collapse: null,
        path: "/conta-contrato",
        component: ContasContrato,
        icon: null,
        layout: "/admin"
    },

    {
        name: "Contratos de Aluguel",
        collapse: null,
        path: "/contrato-aluguel",
        component: ContratoAluguel,
        icon: null,
        layout: "/admin"
    },

    {
        name: "Gestão de Linhas",
        collapse: null,
        path: "/gestao-linhas",
        component: GestaoLinhas,
        icon: null,
        layout: "/admin"
    },

    {
        name: "Linhas",
        collapse: null,
        path: "/linhas",
        component: Linhas,
        icon: null,
        layout: "/admin"
    },
    {
        name: "Titulares",
        collapse: null,
        path: "/titulares",
        component: Titulares,
        icon: null,
        layout: "/admin"
    },
]

export default routes;