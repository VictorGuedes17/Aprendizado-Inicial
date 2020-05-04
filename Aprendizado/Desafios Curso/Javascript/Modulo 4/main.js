    function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

    var dataatual = document.createTextNode(dataAtualFormatada());
    var createDiv = document.createElement('div');
    function Pesquisar(){

      // createDiv.innerHTML = '';

        var inp = document.getElementById('texto');
        var textopesq = inp.value;
        console.log(textopesq);
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+textopesq+'.sa&outputsize=full&apikey=4ABH0QOGZYTBQ3AQ';
        
    
    

  

axios.get(url)
    .then(function(response) {
        
        var Cotacao = response.data["Time Series (Daily)"]["2020-04-09"]["4. close"];
        var prfAtivo = response.data["Meta Data"]["2. Symbol"];
        var textodiv = document.createTextNode(Cotacao);  
        var textoativo = document.createTextNode(prfAtivo);      
        createDiv.setAttribute('id','ex');
        createDiv.style.backgroundColor = 'White';
        createDiv.style.width = '100px';
        createDiv.style.height = '100px';
        createDiv.appendChild(textoativo);
        var parag = document.createElement('p');
        createDiv.appendChild(parag);
        createDiv.appendChild(textodiv);
        
        
    
        var preencher = document.getElementById('app');
        preencher.appendChild(createDiv);

   
    })
    .catch(function(error){
        console.log(error);
    })

}