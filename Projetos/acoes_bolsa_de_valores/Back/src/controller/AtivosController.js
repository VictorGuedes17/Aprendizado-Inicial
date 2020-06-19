const mongoose = require('mongoose');
const Ativos = mongoose.model('ativos');

module.exports = { 
    async index(req,res) {
       const ativos = await Ativos.find();
       return res.json(ativos);
    },

}