const express = require('express');
const routes = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const authMiddleware = require('./middlewares/auth');

//Chamando Controllers 
const AtivosController = require('./controller/AtivosController');
const UsuariosController = require('./controller/UsuariosController');
const DashboardController = require('./controller/DashboardController');
const CarteiraController = require('./controller/CarteiraController');

//Camando Models 
requireDir('./models');

;

//Criando Rotas 

//Usuarios
routes.get('/usuarios',UsuariosController.index);
routes.get('/usuarios/:email&:senha',UsuariosController.show);
routes.post('/cadastro',UsuariosController.cadastro);
routes.post('/autenticacao',UsuariosController.login);

// Carteira
//routes.use(authMiddleware).get('/carteira',CarteiraController.validaSessao);
routes.post('/carteira/cadastro',CarteiraController.cadastro);
routes.get('/carteira/:iduser',CarteiraController.listar);
routes.put('/carteira/:id',CarteiraController.alterar);
routes.delete('/carteira/:id',CarteiraController.deletar);

//Ativos
routes.get('/verificar',AtivosController.index);

//Dashboard
routes.use(authMiddleware).get('/dashboard',DashboardController.teste);





module.exports = routes;