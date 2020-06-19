const mongoose = require('mongoose');
const Carteira = mongoose.model('carteira')

module.exports = {

    async validaSessao(req,res) {
        return res.send({ Sessao: 'ok', user: req.userId });
    },

    async cadastro(req,res){
        const cadastro = await Carteira.create(req.body);
        res.json(cadastro);
    },

    async listar(req,res){
        const lista = await Carteira.find({ iduser : req.params.iduser });
        res.json(lista);
    },

    async alterar(req,res){
        const alterar = await Carteira.findByIdAndUpdate(req.params.id,req.body, { new : true});
        res.json(alterar);
    },

    async deletar(req,res){
        const deletar = await Carteira.findByIdAndRemove(req.params.id);
        res.json("Deletado");
    }
}