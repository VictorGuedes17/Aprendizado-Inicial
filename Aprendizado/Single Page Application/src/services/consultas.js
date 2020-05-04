import { URL_API1 } from "./base";

export function listarConsultas(){
    return fetch(`${URL_API1}/consultas`).then(resultado => resultado.json());
}