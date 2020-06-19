var usuarioid = sessionStorage.getItem('usuarioid');
var token = sessionStorage.getItem('token');
console.log(usuarioid);
console.log(token);

var config = {
    headers: { 'autorization' : ('Bearer '+ token)}
}


axios.get('http://localhost:3334/dev/dashboard',config)
.then(response=>{
    console.log(response.data);
})
.catch(function(){
    alert('Token invalido');
    window.location = 'file:///C:/Users/victo/Documents/Programacao/Public/Projetos/acoes_bolsa_de_valores/src/views/Login/login.html';
}).finally();



function pesqParametros()
{
  
var empresa = document.querySelector('#empresa').value;
console.log(empresa);
axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${empresa}.sa&interval=5min&outputsize=full&apikey=4ABH0QOGZYTBQ3AQ`)
.then(response => {
    var ultAtualizacao = response.data['Meta Data']['3. Last Refreshed'];
    recebeParametros(response.data['Meta Data']['2. Symbol'],
    response.data["Time Series (5min)"][`${ultAtualizacao}`]["4. close"],
    response.data["Time Series (5min)"][`${ultAtualizacao}`]["1. open"],
    response.data["Time Series (5min)"][`${ultAtualizacao}`]["5. volume"],
    response.data['Meta Data']['3. Last Refreshed']
    )
})
.catch(function(error){
    console.log(error);
}).finally();
}




function recebeParametros(papel,cotacao,abertura,volume,atualizacao)
    {
              
        if(papel == null || cotacao == null)
        {
            console.log('teste ok');
        }
        else if(papel != null)
        {
            var bloco = document.createElement('div');
            bloco.setAttribute('class','bloco');

            var blocoa = document.createElement('div');
            blocoa.setAttribute('class','blocoa');
            var blocob = document.createElement('div');
            blocob.setAttribute('class','blocob');

            

            var exibipapel = document.createElement('h1');
            exibipapel.setAttribute('class','papel')
            var exibipreco = document.createElement('h2');
            exibipreco.setAttribute('class','cotacao');
            var expapel = document.createTextNode(papel.substr(0,5));
            var TextoDetalhe = document.createTextNode('Detalhes : ')
            var expreco = document.createTextNode(`Preço: R$ ${parseFloat(cotacao).toFixed(2)} - Manuntencao% `);
            
            //Conteudo da Lista
            var lista = document.createElement('ul');  
            var elementoDetalhe = document.createElement('br')
            var fechamentoLista = document.createElement('li');
            var conteudoFechamento = document.createTextNode(`Fechamento Anterior : MANUTENCAO`);
            var aberturaLista = document.createElement('li');
            var conteudoAbertura = document.createTextNode(`Abertura : R$ ${parseFloat(abertura).toFixed(2)}`);
            var volumeLista = document.createElement('li');
            var conteudoVol = document.createTextNode(`Volume : ${volume}`);
            var atualizacaoLista = document.createElement('li');
            var conteudoAtualizacao = document.createTextNode(`Ultima Atualização : ${atualizacao}`);
            fechamentoLista.appendChild(conteudoFechamento);
            aberturaLista.appendChild(conteudoAbertura);
            volumeLista.appendChild(conteudoVol);
            atualizacaoLista.appendChild(conteudoAtualizacao);
            lista.appendChild(elementoDetalhe);
            lista.appendChild(fechamentoLista);
            lista.appendChild(aberturaLista);
            lista.appendChild(volumeLista);
            lista.appendChild(atualizacaoLista);

            blocob.appendChild(lista);

            var container = document.querySelector('.container');
            exibipapel.appendChild(expapel);
            exibipreco.appendChild(expreco);
            blocoa.appendChild(exibipapel);
            blocoa.appendChild(exibipreco);
            bloco.appendChild(blocoa);
            bloco.appendChild(blocob);
            container.appendChild(bloco);

        }
          
    }
