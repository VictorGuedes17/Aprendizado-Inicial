import { URL_API2 } from "./base";

export function consultarFaturamento(){
    return fetch(`${URL_API2}`).then(resultado => resultado.json());
}