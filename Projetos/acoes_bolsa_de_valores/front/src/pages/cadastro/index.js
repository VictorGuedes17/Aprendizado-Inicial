import React, { Component } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router';

class Cadastro extends Component {

    cadastro = async () => {
      //Recebendo valores do HTML
      //Text
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value; 
      var apelido = document.getElementById("apelido").value; 
      var telefone = document.getElementById("telefone").value; 
      
      //Checkbox
      var notifica1 = document.getElementById("notificaemail");
      var notifica2 = document.getElementById("notificasms");
      var notifica3 = document.getElementById("notificawhatsapp");
      var notifica_email = 'F';
      var notifica_sms = 'F';
      var notifica_whatsapp = 'F';
      
      if(!notifica1.checked) {notifica_email = 'F'} else {notifica_email = 'T'};
      if(!notifica2.checked) {notifica_sms = 'F'} else {notifica_sms = 'T'};
      if(!notifica3.checked) {notifica_sms = 'F'} else {notifica_sms = 'T'};
      
      //Requisição API função cadastro
    const response = await api.post('/cadastro',{
        email: email,
        senha: senha,
        apelido: apelido,
        telefone: telefone,
        notifica_email: notifica_email,
        notifica_sms: notifica_sms,
        notifica_whatsapp: notifica_whatsapp
     });
     console.log(response.data);
     if(response.data != null){
         alert('tstok');
        return <Redirect to={"/carteira"}/>;
     } 
     
    }

    render(){
            return(
                <div className = "container">
                <label>Email : </label><input type = 'text' name="email" id="email" /><br />
                <label>Senha : </label><input type = 'text' name="senha" id="senha" /><br />
                <label>Apelido : </label><input type = 'text' name="apelido" id="apelido" /><br />
                <label>Telefone :</label><input type = 'text' name="telefone" id="telefone" /><br />
                <label>Notificar Email :</label><input type = 'checkbox' name="notificaemail" id="notificaemail"/><br />
                <label>Notificar SMS : </label><input type = 'checkbox' name="notificasms" id="notificasms" value="T" /><br />
                <label>Notificar Whatsapp : </label><input type = 'checkbox' name="notificawhatsapp" id="notificawhatsapp" value="T" /><br />
                <button name = "cadastrar" onClick={this.cadastro}>Cadastrar</button>
                </div>
            );
    }

}

export default Cadastro;