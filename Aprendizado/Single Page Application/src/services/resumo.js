import { URL_API1 } from "./base";
import { URL_API2 } from "./base";

export function consultarResumo(){
    return fetch(`${URL_API1}/resumo`).then(resultado => resultado.json());
}

export function consultarIBOV(){
    return fetch(`${URL_API2}/resumo`).then(resultado => resultado.json());
}