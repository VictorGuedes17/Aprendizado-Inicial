//import React from 'react';
import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import MenuSuperior from './Components/Menu Superior/MenuSuperior';
import Resumo from './Components/Resumo/Resumo';
import Consultas from './Components/Consultas/Consultas';
import Faturamento from './Components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render(){
      return(
          <div>
              <MenuSuperior/>
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <Switch>
                      <Route path="/" exact component={Resumo} />
                      <Route path="/consultas" component={Consultas} />
                      <Route path="/faturamento" component={Faturamento} />
                    </Switch>
                  </div>
                </div>
              </div>
          </div>
        )
  }
}

export default App;
