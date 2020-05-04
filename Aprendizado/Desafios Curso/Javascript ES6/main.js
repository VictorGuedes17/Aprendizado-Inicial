const usuario = {
    nome : 'Victor',
    idade : 23,
    endereco : {
        rua : 'Nelson de Senna',
        cidade : 'BH',
    },
};

const { nome, idade, endereco :{ cidade }} = usuario;

console.log(cidade);