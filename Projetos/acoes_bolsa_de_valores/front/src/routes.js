import React from 'react';
//import { Router } from 'react-router';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import history from './history';

import Login from './pages/login';
import Carteira from './pages/carteira';
import Cadastro from './pages/cadastro';




const Routes = () => (
    <BrowserRouter forceRefresh={true} history={ history }  >
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/carteira" component={Carteira} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>
);

export default Routes;