function logarUsuario()
{
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    axios.post('http://localhost:3334/dev/autenticacao', {email : email , senha : senha})
        .then(response => {
            if(response.data.id !== null){
                var usuarioid = response.data.id;
                var token = response.data.token;
                sessionStorage.setItem('iduser', usuarioid);
                sessionStorage.setItem('token', token);
                alert('Bem vindo');
                window.location="file:///C:/Users/victo/Documents/Programacao/Public/Projetos/acoes_bolsa_de_valores/src/views/Monitoramento/cotacao.html"

            }
            
})
.catch(function(error){
    console.log(error);
}).finally();
}


