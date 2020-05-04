"use strict";

var usuario = {
  nome: 'Victor',
  idade: 23,
  endereco: {
    rua: 'Nelson de Senna',
    cidade: 'BH'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(cidade);
