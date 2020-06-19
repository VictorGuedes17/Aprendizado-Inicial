import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import history from '../../history';
import './style.css';



//import { push } from 'connected-react-router';

class Login extends Component {

    tstfun = async () => {
        var txtemail = document.getElementById('email').value;
        var txtsenha = document.getElementById('senha').value;
        
        const response = await api.post('/autenticacao',{ email: txtemail, senha: txtsenha})
        
        if(response.data.error) return  alert(response.data.error);

        var userid = response.data.id;
        var token = response.data.token;
        sessionStorage.setItem('userid',userid);
        sessionStorage.setItem('token',token);

        this.props.history.push('/carteira')
        
      }

    render(){
        return(
            <div className = "container">
                <div className ="formulario">
                    LOGIN
                <p><input name = "email" id= "email" placeholder = "Digite seu Email" /></p>
            <p> <input type = "password" name = "senha" id= "senha" placeholder="Digite sua senha" /></p>
            <button name="login" onClick={this.tstfun}> Entrar </button>
                </div>
            
                
            </div>
        );

    }
}

export default Login;