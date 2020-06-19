import React, { Component } from 'react';
import api from '../../services/api';
import history from '../../history';
import Header from '../../components/header'
import './styles.css';






class Carteira extends Component {

    

    ValidaSessao = async () =>{
    
        
        var token = sessionStorage.getItem('token');

        var config = {
            headers: { 'autorization' : ('Bearer '+ token)}
        }
    
        const response = await api.get('/dashboard',config);
        if(!response.data.user) return this.props.history.push('/');
    }

    state = {
        ativo : [],
    };
        

    componentDidMount(){
        this.ValidaSessao();
        this.Carteira();
    }


    Carteira = async() => {
        var usuarioid = sessionStorage.getItem('userid');
        const response = await api.get(`/carteira/${usuarioid}`);
        this.setState({ ativo: response.data})
    };

   
    render(){
        const {ativo} = this.state;
        return (
                    <div className="container">
                         
                      <table className="tabela">
                        <tr>
                            <th>Ativo</th>
                            <th>Lotes</th>
                            <th>Data de Entrada</th>
                            <th>Valor Entrada</th>
                            <th>Data de Saida</th>
                            <th>Valor de Saida</th>
                            <th>Resultado</th>
                        </tr>
                        
                            {ativo.map(row => ( 
                            <tr>
                            <td >{row.ativo}</td>
                            <td>{row.quantidade}</td>
                            <td>{row.data_entrada}</td>
                            <td>{row.valor_entrada}</td>
                            <td>{row.data_saida}</td>
                            <td>{row.valor_saida}</td>
                            <td>R${row.valor_saida - row.valor_entrada}</td>
                            </tr>
                            ))}
                        

                      </table>
                    </div>
            );
    }

}


export default Carteira;