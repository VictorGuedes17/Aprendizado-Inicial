const mongoose = require('mongoose');
const Usuarios = mongoose.model('usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    });
}

module.exports = {

    async index (req,res) {
        const usuarios = await Usuarios.find()
        return res.json(usuarios);
    },

    async show (req,res) {
        const usuarios = await Usuarios.find({email : req.params.email,senha : req.params.senha})
        return res.json(usuarios);
    },

    async cadastro(req,res) {
        const user = await Usuarios.create({
            email : req.body.email, 
            senha : req.body.senha,
            apelido : req.body.apelido,
            telefone : req.body.telefone,
            notifica_email : req.body.notifica_email,
            notifica_sms : req.body.notifica_sms,
            notifica_whatsapp : req.body.notifica_whatsapp
        });

        user.senha = undefined;

        const msg = "Cadastrado";

        res.send({
            msg,
            user,
            token: generateToken({ id: user.id })
           });
    },

   

    async login (req,res) {
        const { email, senha } = req.body;

        const user = await Usuarios.findOne({ email }).select('+senha');

        if(!user)
       return res.json({ error: 'User not found'});

        if(senha != user.senha)
        return res.json({error : 'Invalid Password'});

        user.senha = undefined;

        res.send({
             id: user.id,
             token: generateToken({ id: user.id })
            });

    }
    

}